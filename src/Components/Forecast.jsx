import React from 'react';

const Forecast = ({ threeHourlyWeather }) => {
	// console.log(threeHourlyWeather);
	return (
		<div className='mb-6'>
			<div className='flex items-center justify-start mt-6'>
				<p className='text-white font-medium uppercase'>3 hourly forecast</p>
			</div>
			<hr className='my-2' />

			<div className='flex items-center justify-between md:space-x-5 space-x-3 text-white'>
				{threeHourlyWeather.map((weather) => (
					<div
						className='flex flex-col items-center text-center text-sm md:text-base'
						key={weather.id}
					>
						<p className='font-light'>{weather.dateTime}</p>
						<img
							src={weather.dayIcon}
							alt='weather_icon'
							className='w-12 my-1'
						/>
						<p className='font-medium'>{`${weather.temp.toFixed()}°`}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Forecast;
