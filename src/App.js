import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './Components/TopButton';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData, {
	formatForecastWeather,
} from './services/WeatherService';
// import Weather from './services/ForecastService';
import { useEffect, useState } from 'react';
import getFormattedThreeHoursWeather from './services/ForecastService';
import ThreeHourWeather from './Components/ThreeHourWeather';

function App() {
	const { query, setQuery } = useState({ q: 'berlin' });
	const [units, setUnits] = useState('metric'); //°C ?°F
	const { weather, setWeather } = useState(null);

	const fetchWeather = async () => {
		const data = await getFormattedWeatherData({ q: 'tokyo' });
		// formatForecastWeather();
		// console.log(data);
		//3hour add
		const forecastData = await getFormattedThreeHoursWeather({ q: 'tokyo' });
		// console.log(forecastData);
	};
	fetchWeather();

	return (
		<div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
			<TopButton />
			<Inputs />

			<TimeAndLocation />
			<TemperatureAndDetails />
			<Forecast title='3 hour forecast' />
			{/* <Forecast title='Daily forecast' /> */}
			{/* <ThreeHourWeather /> */}

			{/* <Weather /> */}
		</div>
	);
}

export default App;
