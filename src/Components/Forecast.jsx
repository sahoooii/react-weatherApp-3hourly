import React from 'react';

const Forecast = ({ title, threeHourWeather }) => {
	// console.log(threeHourWeather);
	return (
		<div>
			<div className='flex items-center justify-start mt-6'>
				<p className='text-white font-medium uppercase'>{title}</p>
			</div>
			<hr className='my-2' />

			<div className='flex items-center justify-between text-white'>
				{threeHourWeather.map((weather) => (
					<div className='flex flex-col items-center' key={weather.id}>
						<p className='font-light text-white'>{weather.dateTime}</p>
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
