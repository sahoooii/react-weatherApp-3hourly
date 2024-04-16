import { DateTime } from 'luxon';
import { getWeatherData } from './WeatherService';

// get Weather Icon
const iconUrlFromCode = (icon) =>
	`http://openweathermap.org/img/wn/${icon}@2x.png`;

//format to Wednesday, 28 Apr 2024 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd MMM yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Get timezone from city and then format date and temp
const formatForecastWeather = (data) => {
	const { city } = data;
	const {
		timezone,
		coord: { lat, lon },
	} = city;

	// timezone / 60 for change min
	const timezoneInMinutes = timezone / 60;

	// Get five data after current time
	let threeHourly = data.list.slice(0, 5).map((details, i) => {
		let dtToDate = details.dt;

		return {
			id: i,
			date: formatToLocalTime(dtToDate, timezoneInMinutes, 'dd MMM yyyy'),
			dateTime: formatToLocalTime(dtToDate, timezoneInMinutes, 'hh:mm a'),
			dayIcon: iconUrlFromCode(details.weather[0].icon),
			temp: details.main.temp,
		};
	});

	return { threeHourly, timezoneInMinutes, lat, lon };
};

const getFormattedThreeHourlyWeather = async (searchParams) => {
	// Get  lat, lon, timezoneInMinutes, threeHourly
	let formattedThreeHourlyForecast = await getWeatherData(
		'forecast',
		searchParams
	).then(formatForecastWeather);
	// console.log('formattedThreeHourlyForecast', formattedThreeHourlyForecast);

	return formattedThreeHourlyForecast;
};

export default getFormattedThreeHourlyWeather;

export { formatToLocalTime, iconUrlFromCode };
