# react-weatherApp-3hourly

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-0055ff?style=for-the-badge&logo=framer&logoColor=white)
![Open Weather MAP](https://img.shields.io/badge/Open_Weather_Map-FF6600?style=for-the-badge&logo=open_weather_map&logoColor=white)
![Luxon](https://img.shields.io/badge/Luxon-69639A?style=for-the-badge&logo=luxon&logoColor=white)

<p>etc...</p>

## Link
[Weather App](https://react-weatherapp-3hourly.onrender.com)


## Demo

![weatherApp](https://user-images.githubusercontent.com/75118062/220865632-fd4d82f3-98fa-44fa-aa32-11f8948c1c47.gif)

## Describe

Using OpenWeather API, Get current weather data and three hourly forecast data. I struggled that get data and restructure it into what I just needed. Also, created an amazing loading animation and background, the Search functionality of city or country, see a three hourly forecast. You can set the Celsius and Fahrenheit easily. Updated to be more user-friendly.

<br />

OpenWeather API を使って作成したお天気アプリ。必要なデータだけを取得し、再構築してまとめていくのに苦労した。ローディング中のアニメーション、気温によって変わる背景カラー、好きな都市や国でのお天気検索機能、現在の天気や 3 時間毎の天気情報を取得でき、 摂氏、華氏表示も簡単に変更できるように、より使いやすくした。

## Features

- Search by city or country
- Get details of weather
	- ex: Real Feel, Humidity, Wind Speed, Sunrise and Sunset time, and so on.
- Get a current location weather
- Get a three hourly weather forecast
- Loading animation
- Changing background color
- Fully responsive design


## Env Variables

Rename the `example.env` file to `.env` and add the following

```
REACT_APP_API_KEY = Your Open Weather API KEY
REACT_APP_BASE_URL = https://api.openweathermap.org/data/2.5

```
## src
* [Open Weather](https://openweathermap.org/)
* [Icon Scout](https://iconscout.com/)


<br />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
