import React from 'react';

const DailyWeather = ({ dateNum, dayIcon, tempHigh, tempLow }) => {
	// console.log(dayIcon);
	dateNum = new Date(dateNum * 1000);
	dateNum.getDay();
	console.log(dateNum);

	let options = { weekday: 'short' };
	dateNum = Intl.DateTimeFormat('ja-JP', options).format(dateNum);
	// console.log(dateNum);

	return (
		<div>
			<h3>3Hour Weather</h3>
			<img src={dayIcon} alt='weather_icon' />
			<h3>{dateNum}</h3>
			<h3>{tempHigh}</h3>
			<h3>{tempLow}</h3>
		</div>
	);
};

export default DailyWeather;
