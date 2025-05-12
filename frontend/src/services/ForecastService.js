import { DateTime } from 'luxon';
import { getWeatherData } from './WeatherService';

// Get Weather Icon
const iconUrlFromCode = (icon) =>
	`http://openweathermap.org/img/wn/${icon}@2x.png`;

//Format to Wednesday, 28 Apr 2024 | Local time 12: 45 PM
const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd MMM yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatDetailsToWeather = (details, timezoneInMinutes, index) => {
	const dtToDate = details.dt;
	return {
		id: index,
		date: formatToLocalTime(dtToDate, timezoneInMinutes, 'dd MMM yyyy'),
		dateTime: formatToLocalTime(dtToDate, timezoneInMinutes, 'hh:mm a'),
		dayIcon: iconUrlFromCode(details.weather[0].icon),
		temp: details.main.temp,
	};
};

// Get timezone from city and then format it
const formatForecastWeather = (data) => {
	const {
		city: { timezone },
	} = data;

	// timezone / 60 = change to min
	const timezoneInMinutes = timezone / 60;

	// Get five weather forecasts for every three hours, excluding the current time
	const threeHourly = data.list
		.slice(0, 5)
		.map((details, index) =>
			formatDetailsToWeather(details, timezoneInMinutes, index)
		);

	return { threeHourly, timezoneInMinutes };
};

const getFormattedThreeHourlyWeather = async (searchParams) => {
	try {
		// Get timezoneInMinutes, threeHourly
		let formattedThreeHourlyForecast = await getWeatherData(
			'forecast',
			searchParams
		);

		return formatForecastWeather(formattedThreeHourlyForecast);
	} catch (error) {
		console.log(error.message);
	}
};

export default getFormattedThreeHourlyWeather;

export { formatToLocalTime, iconUrlFromCode };
