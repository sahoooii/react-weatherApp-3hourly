import React from 'react';
import { UilSearch, UilLocationPoint, UilHome } from '@iconscout/react-unicons';
import { MdOutlineClear } from 'react-icons/md';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Inputs = ({ setQuery, units, setUnits }) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');

	const [city, setCity] = useState('');
	const [isCelsius, setIsCelsius] = useState(true);

	const handleSearch = (e) => {
		e.preventDefault();

		if (city !== '') {
			setQuery({ q: city });
			setCity('');
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

	// Handle Degree
	const selectedDegree = 'text-3xl font-bold text-white';
	const notSelectedDegree =
		'text-xl text-white font-light transition ease-out hover:scale-125 duration-500';

	//metric or imperial
	const handleUnitsChange = (e) => {
		const selectedUnit = e.currentTarget.name;
		if (units !== selectedUnit) {
			setUnits(selectedUnit);
		}
	};

	//onClick °C ? °F
	const changeUnits = () => {
		setIsCelsius(!isCelsius);
	};

	return (
		<div className='md:flex flex-row my-6'>
			<form
				onSubmit={handleSearch}
				className='flex flex-row lg:w-3/4 md:w-4/5 items-center justify-center space-x-2 md:space-x-4'
			>
				<div className='relative'>
					<input
						value={city}
						onChange={(e) => setCity(e.currentTarget.value)}
						type='text'
						placeholder='Search for the city...'
						className='md:text-xl text-lg font-light lg:w-[450px] md:w-[320px] w-[250px] p-2 focus:outline-none shadow-xl capitalize placeholder:lowercase rounded-md'
					/>
					<button
						className='absolute items-center top-0 bottom-0 right-3.5 text-gray-500'
						// onClick={() => setCity('')}
					>
						<MdOutlineClear size={18} onClick={() => setCity('')} />
					</button>
				</div>
				<UilSearch
					size={isAboveMediumScreens ? 24 : 20}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleSearch}
				/>
				<UilLocationPoint
					size={isAboveMediumScreens ? 24 : 20}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={handleCurrentLocationClick}
				/>
				<UilHome
					size={isAboveMediumScreens ? 24 : 20}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
					onClick={() => setQuery({ q: 'tokyo' })}
				/>
			</form>

			<div className='flex flex-row lg:w-1/4 md:w-1/5 items-center justify-center mx-auto mt-2 md:mt-0'>
				<button
					name='metric'
					className={` ${isCelsius ? selectedDegree : notSelectedDegree}`}
					onClick={(e) => {
						handleUnitsChange(e);
						changeUnits();
					}}
				>
					°C
				</button>
				<p className='text-xl text-white mx-1'>|</p>
				<button
					name='imperial'
					className={`${!isCelsius ? selectedDegree : notSelectedDegree}`}
					onClick={(e) => {
						handleUnitsChange(e);
						changeUnits();
					}}
				>
					°F
				</button>
			</div>
		</div>
	);
};

export default Inputs;
