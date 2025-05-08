import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
	const { lat, lon } = req.query;

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5`,
			{
				params: {
					lat,
					lon,
					appid: process.env.OPENWEATHER_API_KEY,
					units: 'metric',
				},
			}
		);
		console.log(response.data); 
		res.json(response.data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: 'API呼び出しに失敗しました' });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
