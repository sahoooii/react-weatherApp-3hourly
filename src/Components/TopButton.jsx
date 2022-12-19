import React from 'react';

const TopButton = ({ setQuery }) => {
	const cities = [
		{
			id: 1,
			cityName: 'London',
		},
		{
			id: 2,
			cityName: 'Sydney',
		},
		{
			id: 3,
			cityName: 'Tokyo',
		},
		{
			id: 4,
			cityName: 'Toronto',
		},
		{
			id: 5,
			cityName: 'Paris',
		},
	];

	return (
		<div className='flex items-center justify-around my-6'>
			{cities.map((city) => (
				<button
					key={city.id}
					className='text-white text-lg font-medium'
					onClick={() => setQuery({ q: city.cityName })}
				>
					{city.cityName}
				</button>
			))}
		</div>
	);
};

export default TopButton;
