import React from 'react';
import {
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';
import { iconUrlFromCode } from '../services/WeatherService';
import { formatToLocalTime } from '../services/ForecastService';

export const TemperatureAndDetails = ({
	weather: {
		details_weather,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
		timezoneInMinutes,
	},
	units,
}) => {
	return (
		<div>
			<div className='flex justify-center items-center py-2 md:py-6 text-xl text-cyan-300'>
				<p>{details_weather}</p>
			</div>

			<div className='md:flex md:flex-row items-center justify-evenly pt-0 text-white py-3'>
				<div className='flex flex-row items-center justify-center'>
					<img
						src={iconUrlFromCode(icon)}
						alt='weather_icon'
						className='w-20 md:mr-8'
					/>
					<p className='text-5xl'>{`${temp.toFixed()} °${
						units === 'metric' ? 'C' : 'F'
					}`}</p>{' '}
				</div>

				<div className='md:flex md:flex-col space-y-2'>
					<div className='flex font-light text-sm items-center justify-center'>
						<UilTemperature size={18} className='mr-1' />
						Real feel:
						<span className='font-medium ml-1'>{`${feels_like.toFixed()}°${
							units === 'metric' ? 'C' : 'F'
						}`}</span>
					</div>
					<div className='flex font-light text-sm items-center justify-center'>
						<UilTear size={18} className='mr-1' />
						Humidity:
						<span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
					</div>
					<div className='flex font-light text-sm items-center justify-center'>
						<UilWind size={18} className='mr-1' />
						Wind:
						<span className='font-medium ml-1'>
							{`${speed.toFixed()} ${units === 'metric' ? 'm/s' : 'mph'}`}
						</span>
					</div>
				</div>
			</div>

			<div className='flex flex-row items-center justify-center  md:space-x-2 text-white text-sm pt-2'>
				<p className='font-light text-center'>
					Rise:{' '}
					<span className='font-sm md:font-medium ml-1'>
						{formatToLocalTime(sunrise, timezoneInMinutes, 'hh:mm a')}
					</span>
				</p>
				<UilSunset />
				<p className='font-light ml-1'>|</p>
				<p className='font-light text-center'>
					Set:{' '}
					<span className='font-medium ml-1'>
						{' '}
						{formatToLocalTime(sunset, timezoneInMinutes, 'hh:mm a')}
					</span>
				</p>
				<UilSun />
				<p className='font-light  ml-1'>|</p>
				<p className='font-light text-center '>
					High:{' '}
					<span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
				</p>
				<UilSun />
				<p className='font-light ml-1'>|</p>
				<p className='font-light text-center'>
					Low:{' '}
					<span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
				</p>
				<UilSun />
			</div>
		</div>
	);
};
