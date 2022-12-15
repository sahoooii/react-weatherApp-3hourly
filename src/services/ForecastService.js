import ThreeHourWeather from '../Components/ThreeHourWeather';
import WeatherService, {
	getWeatherData,
	iconUrlFromCode,
} from './WeatherService';

// const [weatherData, setWeatherData] = useState('');

// const lon = -0.1257;
// const lat = 51.5085;
// const APIKey = 'afda9fe2cae870ff9ebda89a08e3aa2c';

// useEffect(() => {
// 	// const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
// 	const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;

// 	fetch(API)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			// console.log(data);
// 			setWeatherData(data);
// 		})
// 		.catch((err) => console.log(err));
// }, []);

//listから必要なものだけ取得 あとでコメントアウト外す
const formatForecastWeather = (data) => {
	// console.log(formatThreeHoursWeather);
	let threeHourly = data.list.slice(1, 6).map((details, i) => {
		return {
			dateNum: details.dt,
			dayIcon: iconUrlFromCode(details.weather[0].icon),
			tempHigh: details.main.temp_max,
			tempLow: details.main.temp_min,
		};
		// return (
		// 	<ThreeHourWeather
		// 		dateNum={details.dt_txt}
		// 		// dayIcon={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
		// 		dayIcon={iconUrlFromCode(details.weather[0].icon)}
		// 		tempHigh={details.main.temp_max}
		// 		tempLow={details.main.temp_min}
		// 	/>
		// );
	});
	return threeHourly;
};

//cityの中からtimezone, lat, lon取得
const formatThreeHoursWeather = (data) => {
	// console.log(data);
	const { city } = data;
	const { timezone } = city;
	const {
		coord: { lat, lon },
	} = city;

	return { timezone, lat, lon };
};

const getFormattedThreeHoursWeather = async (searchParams) => {
	const formattedThreeHourForecast = await getWeatherData(
		'forecast',
		searchParams
	).then(formatThreeHoursWeather);
	// {timezone: 0, lat: 51.5085, lon: -0.1257}取得

	// console.log(formattedThreeHourForecast); //lat, lon timezone

	const { lat, lon } = formattedThreeHourForecast;

	const formattedForecastWeather = await getWeatherData('forecast', {
		lat,
		lon,
		// timezone,
		units: searchParams.units,
	}).then(formatForecastWeather);

	// console.log(formattedForecastWeather); //list

	// console.log({
	// 	...formattedForecastWeather,
	// 	...formattedThreeHourForecast,
	// });
	// data取得ok

	// return { ...formattedForecastWeather, ...formattedThreeHourForecast };
	return [formattedForecastWeather, formattedThreeHourForecast];
};

export default getFormattedThreeHoursWeather;

export { formatForecastWeather };
