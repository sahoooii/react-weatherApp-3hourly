import React from 'react';

const TopButton = ({ setQuery }) => {
	const cities = [
		{
			id: 1,
			cityName: 'London',
		},
		{
			id: 2,
			cityName: 'New York',
		},
		{
			id: 3,
			cityName: 'Paris',
		},
		{
			id: 4,
			cityName: 'Sydney',
		},
		{
			id: 5,
			cityName: 'Honolulu',
		},
	];

	return (
		<div className='flex items-center justify-around my-6 space-x-2'>
			{cities.map((city) => (
				<button
					key={`${city.id}-${city.cityName}`}
					className='text-white text-sm md:text-lg font-medium'
					onClick={() => setQuery({ q: city.cityName })}
				>
					{city.cityName}
				</button>
			))}
		</div>
	);
};

export default TopButton;
