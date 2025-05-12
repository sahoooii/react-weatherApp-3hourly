import './App.css';
import { useEffect, useState } from 'react';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import { TemperatureAndDetails } from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedCurrentWeather from './services/WeatherService';
import getFormattedThreeHourlyWeather from './services/ForecastService';
import Loading from './components/Loading';

function App() {
	const coldBg = 'from-cyan-700 to-blue-700';
	const hotBg = 'from-yellow-500 to-red-500';

	//Search city
	const [query, setQuery] = useState({ q: 'tokyo' });
	//°C ?°F
	const [units, setUnits] = useState('metric');
	//Put Current Weather
	const [weather, setWeather] = useState(null);
	//Put threeHourly weather list
	const [threeHourlyWeather, setThreeHourlyWeather] = useState(null);
	//BgColor change
	const [bg, setBg] = useState(coldBg);

	const [isLoading, setIsLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	// Show not found message
	const searchResult = async (result) => {
		if (result === undefined) {
			setShowMessage(true);
			setIsLoading(false);
		} else {
			setShowMessage(false);
		}
	};

	useEffect(() => {
		const fetchWeather = async () => {
			setIsLoading(true);

			try {
				const [currentWeather, forecastData] = await Promise.all([
					// Get current weather
					getFormattedCurrentWeather({ ...query, units }),
					// Get 3-hourly forecast weather
					getFormattedThreeHourlyWeather({ ...query, units }),
				]);
				// Handle search result and show message if not find the city
				await searchResult(currentWeather);

				const { timezoneInMinutes, threeHourly } = forecastData;

				// Combine current weather and timezone
				const currentWeatherAndTimeZone = {
					...currentWeather,
					timezoneInMinutes,
				};

				// Update state
				setWeather(currentWeatherAndTimeZone);
				setThreeHourlyWeather(threeHourly);

				// Change background color based on temperature
				const range = units === 'metric' ? 25 : 77;

				if (currentWeather.temp <= range) {
					setBg(coldBg);
				} else {
					setBg(hotBg);
				}
			} catch (error) {
				console.error('Error fetching weather data', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchWeather();
	}, [query, units]);

	return (
		<div
			className={`mx-auto w-full py-12 px-5 md:px-28 lg:px-32 bg-gradient-to-br min-h-[100vh] ${bg}`}
		>
			<div className='xl:w-[85%] mx-auto'>
				<TopButton setQuery={setQuery} />
				<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			</div>

			<div className='w-[95%] lg:w-[70%] mx-auto'>
				{/* Show message, when not found the city */}
				{showMessage && !isLoading ? (
					<div className='text-center mt-20'>
						<p className='text-2xl text-white'>
							<span className='font-bold text-3xl'>{`"${query.q}"`}</span>
							<span>is Not Found</span>
						</p>
					</div>
				) : weather && !isLoading ? (
					<>
						<TimeAndLocation weather={weather} />
						<TemperatureAndDetails weather={weather} units={units} />
						<Forecast threeHourlyWeather={threeHourlyWeather} />
					</>
				) : (
					<>
						<Loading />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
