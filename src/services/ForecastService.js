import { DateTime } from 'luxon';
import { getWeatherData, iconUrlFromCode } from './WeatherService';

//dataのcityからtimezoneだけ取得
const formatForecastWeather = (data) => {
	const { city } = data;
	const { timezone } = city;

	//timezoneを60で割ってminにする
	const timezoneInMinutes = timezone / 60;

	//current time以降の5つのdata取得
	let threeHourly = data.list.slice(0, 5).map((details, i) => {
		let dtToDate = details.dt;

		return {
			id: i,
			date: formatToLocalTime(dtToDate, timezoneInMinutes, 'dd LLL yyyy'),
			dateTime: formatToLocalTime(dtToDate, timezoneInMinutes, 'hh:mm a'),
			dayIcon: iconUrlFromCode(details.weather[0].icon),
			tempHigh: details.main.temp_max,
			tempLow: details.main.temp_min,
		};
	});
	// console.log(threeHourly);
	return threeHourly;
};

//format= Wednesday, 31 May 2022 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//cityの中からtimezone, lat, lon取得
const formatThreeHoursWeather = (data) => {
	const { city } = data;
	const { timezone } = city;
	const {
		coord: { lat, lon },
	} = city;

	const timezoneInMinutes = timezone / 60;

	return { timezoneInMinutes, lat, lon };
};

const getFormattedThreeHoursWeather = async (searchParams) => {
	const formattedThreeHourForecast = await getWeatherData(
		'forecast',
		searchParams
	).then(formatThreeHoursWeather);
	// { lat, lon, timezoneInMinutes }取得

	const { lat, lon } = formattedThreeHourForecast;

	const formattedForecastWeather = await getWeatherData('forecast', {
		lat,
		lon,
		units: searchParams.units,
	}).then(formatForecastWeather);
	//id, date, dateTime,dayIcon, tempHigh,mim取得

	// console.log(formattedForecastWeather); //formatされたlist

	//formatされたlist + lat, lon, timezoneInMinutes
	return [formattedForecastWeather, formattedThreeHourForecast];
};

export default getFormattedThreeHoursWeather;

export { formatForecastWeather, formatToLocalTime };
