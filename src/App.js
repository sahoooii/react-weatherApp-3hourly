import './App.css';
import TopButton from './Components/TopButton';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import getFormattedThreeHoursWeather from './services/ForecastService';

function App() {
	const coldBg = 'from-cyan-700 to-blue-700';
	const hotBg = 'from-yellow-700 to-orange-700';

	const [query, setQuery] = useState({ q: 'tokyo' });
	const [units, setUnits] = useState('metric'); //°C ?°F
	const [weather, setWeather] = useState(null);
	const [threeHourWeather, setThreeHourWeather] = useState(null); //for 3h forecastData[0]=listを入れていく
	const [bg, setBg] = useState(coldBg); //BgColor change

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
				setWeather(allTheData);

				setThreeHourWeather(forecastData[0]);

				//BgColor change
				const range = units === 'metric' ? 25 : 77;

				if (currentData.temp <= range) {
					setBg(coldBg);
				} else {
					setBg(hotBg);
				}
			});
		};

		fetchWeather();
	}, [query, units]);

	// const formatBackgroundColor = () => {
	// 	//default color
	// 	if (!weather) {
	// 		return 'from-cyan-700 to-blue-700';
	// 	}

	// 	const range = units === 'metric' ? 25 : 77;

	// 	if (weather.temp <= range) {
	// 		return 'from-cyan-700 to-blue-700';
	// 	}
	// 	return 'from-yellow-700 to-orange-700';
	// };

	return (
		<div
			className={`mx-auto w-[100%] py-12 px-5 md:px-28 lg:px-32 bg-gradient-to-br min-h-[100vh] shadow-gray-400 ${bg}`}
		>
			<div className='lg:w-[70%] mx-auto'>
				<TopButton setQuery={setQuery} />
				<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			</div>

			<div className='w-[95%] lg:w-[70%] mx-auto'>
				{weather && (
					<>
						<TimeAndLocation weather={weather} />
						<TemperatureAndDetails weather={weather} units={units} />
						<Forecast
							title='3 hour forecast'
							threeHourWeather={threeHourWeather}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
