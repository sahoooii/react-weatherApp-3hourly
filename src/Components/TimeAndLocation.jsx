import React from 'react';
import { formatToLocalTime } from '../services/ForecastService';

// const TimeAndLocation = ({ weather: detail }) => {
const TimeAndLocation = ({
	weather: { name, country, dt, timezoneInMinutes },
}) => {
	// const { name, country, dt, timezoneInMinutes } = weather;

	return (
		<div>
			<div className='flex items-center justify-center my-6'>
				<p className='text-white text-xl font-extralight'>
					{formatToLocalTime(dt, timezoneInMinutes)}
					{/* Wednesday, 31 May 2022 | Local time 12: 45 PM */}
				</p>
			</div>

			<div className='flex items-center justify-center my-3'>
				<p className='text-white text-3xl font-medium'>{`${name}, ${country}`}</p>
			</div>
		</div>
	);
};

export default TimeAndLocation;
