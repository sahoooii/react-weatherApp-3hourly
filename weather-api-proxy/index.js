import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import {
	buildWeatherQueryParams,
	fetchWeatherFromAPI,
} from './utils/weatherRequest.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Get current weather data
app.get('/api/weather', async (req, res) => {
	try {
		const params = buildWeatherQueryParams(req.query);

		const response = await fetchWeatherFromAPI('weather', params);

		res.json(response.data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: 'Failed to fetch current weather data' });
	}
});

// Get 3 hourly weather data
app.get('/api/forecast', async (req, res) => {
	try {
		const { lat, lon, q, units } = req.query;

		const params = buildWeatherQueryParams(req.query);

		const response = await fetchWeatherFromAPI('forecast', params);

		res.json(response.data);
	} catch (error) {
		console.error(error.message);
		res
			.status(500)
			.json({ error: 'Failed to fetch three hourly weather data' });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
