import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { useState } from 'react';

const Inputs = ({ setQuery, units, setUnits }) => {
	const [city, setCity] = useState('');

	const handleSearchClick = () => {
		if (city !== '') {
			setQuery({ q: city });
		}
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

	return (
		<div className='flex flex-row justify-center my-6'>
			<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
				<input
					value={city}
					onChange={(e) => setCity(e.currentTarget.value)}
					type='text'
					placeholder='Search for the city...'
					className='text-xl font-light w-full p-2 focus:outline-none shadow-xl capitalize placeholder:lowercase'
				/>
				<UilSearch
					size={25}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleSearchClick}
				/>
				<UilLocationPoint
					size={25}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleCurrentLocationClick}
				/>

				<div className='flex flex-row w-1/4 items-center justify-center'>
					<button
						name='metric'
						className='text-xl text-white font-light transition ease-out hover:scale-125'
						onClick={handleUnitsChange}
					>
						°C
					</button>
					<p className='text-xl text-white mx-1'>|</p>
					<button
						name='imperial'
						className='text-xl text-white font-light transition ease-out hover:scale-125'
						onClick={handleUnitsChange}
					>
						°F
					</button>
				</div>
			</div>
		</div>
	);
};

export default Inputs;
