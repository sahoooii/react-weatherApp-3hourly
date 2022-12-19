import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './Components/TopButton';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import getFormattedThreeHoursWeather from './services/ForecastService';

function App() {
	const [query, setQuery] = useState({ q: 'tokyo' });
	const [units, setUnits] = useState('metric'); //°C ?°F
	const [weather, setWeather] = useState(null);
	const [threeHourWeather, setThreeHourWeather] = useState(null); //for 3h forecastData[0]=listを入れていく

	useEffect(() => {
		const fetchWeather = async () => {
			const currentData = await getFormattedWeatherData({ ...query, units });
			// console.log(currentData);
			//3hour weather
			await getFormattedThreeHoursWeather({
				...query,
				units,
			}).then((forecastData) => {
				// console.log({ ...forecastData[1], ...currentData });//0=list 1=data separated
				const allTheData = { ...forecastData[1], ...currentData }; //current+ lat lon timezone
				// console.log(allTheData);
				setWeather(allTheData);

				setThreeHourWeather(forecastData[0]);
			});
		};

		fetchWeather();
	}, [query, units]);

	return (
		<div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
			<TopButton setQuery={setQuery} />
			<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

			{weather && (
				<>
					<TimeAndLocation weather={weather} />
					<TemperatureAndDetails weather={weather} />
					<Forecast
						title='3 hour forecast'
						threeHourWeather={threeHourWeather}
					/>
				</>
			)}
		</div>
	);
}

export default App;
