import React from 'react';
import { formatToLocalTime } from '../services/ForecastService';

// const TimeAndLocation = ({ weather: detail }) => {
const TimeAndLocation = ({ weather }) => {
	const {
		currentData: { name, country, dt },
		timezone,
	} = weather;

	// console.log(formatToLocalTime(dt, timezone));

	// let name = detail.currentData.name;
	// let country = detail.currentData.country;
	// let dt = detail.dt;
	// let timezone = detail.timezone;

	return (
		<div>
			<div className='flex items-center justify-center my-6'>
				<p className='text-white text-xl font-extralight'>
					{formatToLocalTime(dt, timezone)}
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
