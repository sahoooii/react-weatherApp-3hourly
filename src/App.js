import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './Components/TopButton';
import Inputs from './Components/Inputs';
// import Weather from './Components/Weather';

function App() {
	return (
		<div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
			<TopButton />
			<Inputs />
		</div>
	);
}

export default App;
