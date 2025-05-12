import React from 'react';
import { formatToLocalTime } from 'services/ForecastService';

const TimeAndLocation = ({
	weather: { name, country, dt, timezoneInMinutes },
}) => {
	return (
		<div>
			<div className='flex items-center justify-center my-6'>
				<p className='text-white text-base md:text-xl font-extralight'>
					{/* Format: Wednesday, 31 May 2024 | Local time 12: 45 PM */}
					{formatToLocalTime(dt, timezoneInMinutes)}
				</p>
			</div>

			<div className='flex items-center justify-center my-3'>
				<p className='text-white text-2xl text-center md:text-3xl font-medium'>{`${name}, ${country}`}</p>
			</div>
		</div>
	);
};

export default TimeAndLocation;
