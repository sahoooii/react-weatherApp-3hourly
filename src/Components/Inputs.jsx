import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Inputs = ({ setQuery, units, setUnits }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');

	const [city, setCity] = useState('');
	const [changedC, setChangedC] = useState(false);
	// const [changedF, setChangedF] = useState(true);

	const handleSearchClick = () => {
		if (city !== '') {
			setQuery({ q: city });
		}
		//入力後input空に
		setCity('');
	};

	const handleCurrentLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;

				setQuery({ lat, lon });
			});
		}
	};

	//metric or imperial
	const handleUnitsChange = (e) => {
		const selectedUnit = e.currentTarget.name;
		if (units !== selectedUnit) {
			setUnits(selectedUnit);
		}
	};

	//onClick °C ? °F
	const changeFontToggle = () => {
		setChangedC(!changedC);
	};

	return (
		<div className='md:flex flex-row my-6'>
			<div className='flex flex-row md:w-3/4 items-center justify-center space-x-2 md:space-x-4'>
				<input
					value={city}
					onChange={(e) => setCity(e.currentTarget.value)}
					type='text'
					placeholder='Search for the city...'
					className='md:text-xl text-lg font-light md:w-[450px] w-2/3 p-2 focus:outline-none shadow-xl capitalize placeholder:lowercase rounded-md'
				/>
				<UilSearch
					size={isAboveMediumScreens ? 24 : 20}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleSearchClick}
				/>
				<UilLocationPoint
					size={isAboveMediumScreens ? 24 : 20}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleCurrentLocationClick}
				/>
			</div>

			<div className='flex flex-row md:w-1/4 items-center justify-center mx-auto mt-2 md:mt-0'>
				{changedC ? (
					<button
						name='metric'
						className='text-lg md:text-xl text-white font-light transition ease-out hover:scale-125'
						onClick={(e) => {
							handleUnitsChange(e);
							changeFontToggle();
						}}
					>
						°C
					</button>
				) : (
					<button className='text-2xl md:text-3xl font-bold text-white'>
						°C
					</button>
				)}
				<p className='text-xl text-white mx-1'>|</p>

				{changedC ? (
					<button className='text-2xl md:text-3xl font-bold text-white'>
						°F
					</button>
				) : (
					<button
						name='imperial'
						className='text-lg md:text-xl text-white font-light transition ease-out hover:scale-125'
						onClick={(e) => {
							handleUnitsChange(e);
							changeFontToggle();
						}}
					>
						°F
					</button>
				)}
			</div>
		</div>
	);
};

export default Inputs;
