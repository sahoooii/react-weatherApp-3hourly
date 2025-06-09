# react-weatherApp-3hourly

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React@18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/axios@1.9.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js@20.11.1-339933?style=for-the-badge&logo=node.js&logoColor=ff0)
![Express](https://img.shields.io/badge/Express@5.1.0-000?style=for-the-badge&logo=express&logoColor=ff0)
<br />
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS@3.2.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-0055ff?style=for-the-badge&logo=framer&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion@11.1.0-0055ff?style=for-the-badge&logo=framer&logoColor=white)
![Open Weather MAP](https://img.shields.io/badge/Open_Weather_Map-FF6600?style=for-the-badge&logo=open_weather_map&logoColor=white)
![Luxon](https://img.shields.io/badge/Luxon@3.1.1-69639A?style=for-the-badge&logo=luxon&logoColor=white)

<p>etc...</p>

## Link

[☀️ Weather App](https://weatherapp-frontend-shnz.onrender.com/)

## Demo

![weatherApp](https://user-images.githubusercontent.com/75118062/220865632-fd4d82f3-98fa-44fa-aa32-11f8948c1c47.gif)

<br />

## What is this project?

**(EN)**

This is a responsive **weather forecast app** built with **React and Tailwind CSS**, utilizing the **OpenWeather API**.
It allows users to view the current weather and three-hourly forecasts for any city or location.
To improve security, a **Node.js + Express backend** has been added to handle API requests securely without exposing the API key on the client side.
The app also includes a **smooth loading animation**, responsive design for various screen sizes, and the ability to toggle between **Celsius and Fahrenheit**.
Recent improvements focused on **optimizing performance, enhancing UX, and improving security** for deployment.

I hope you’ll take a look and enjoy exploring it!
<br />

**(JP)**

このアプリは、**React と Tailwind CSS** で構築されたレスポンシブな天気予報アプリです。
**OpenWeather API** を活用して、指定した都市の現在の天気と 3 時間ごとの天気予報を表示できます。
セキュリティ強化のため、**バックエンド（Node.js + Express）** を導入し、API キーをフロントエンドに公開せずに安全にリクエスト処理を行っています。
**スムーズなローディングアニメーション**や、**Celsius（摂氏）・Fahrenheit（華氏**）の切り替え機能、モバイル対応デザインなど、ユーザーの目線に立って、改善を重ねてきました。
最近のアップデートでは、**パフォーマンスの向上**や **UX の強化**、**デプロイ時のセキュリティ改善**にも注力し、改善しました。

ぜひ、実際に検索してお天気を調べてみてください！

<br />
<br />

## Features

**(EN)**

Here are some of the main features this Weather App offers:

✅ **User Interface & Responsiveness**

- Responsive design using **Tailwind CSS**
- Smooth **loading animation** using **Framer Motion**
- Toggle between **Celsius and Fahrenheit**
- Support for **multiple screen sizes**, including mobile

✅ **Weather Search Functionality**

- Search weather by c**ity or country name**
- Quick access buttons for popular cities like **London, Paris, and Honolulu**
- View current weather and **3-hourly forecast** for the day

✅ **Security & Backend Integration**

- Secure API key handling via a **Node.js + Express backend**
- Prevents exposure of API keys on the frontend
- Deployed backend and frontend separately using **Render**

✅ **Performance & Optimization**

- Optimized loading with **concurrent API calls**
- Code refactoring for **better readability and structure**
- Future-ready structure for adding **memoization and caching**
  <br />
  <br />

**(JP)**

この天気予報アプリの主な機能は以下の通りです：

✅ **UI・レスポンシブ対応**

- **Tailwind CSS**を使用したレスポンシブデザイン
- **Framer Motion**によるスムーズなローディングアニメーション
- **摂氏（Celsius）と華氏（Fahrenheit）** の切り替え
- **モバイル含むさまざまな画面サイズ**への対応

✅ **天気検索機能**

- **都市名や国名**での天気検索に対応
- **ロンドン・パリ・ホノルル**など人気都市へのクイックアクセスボタン
- **現在の天気**とその日の**3 時間ごと**の予報を表示

✅ **セキュリティ & バックエンド統合**

- **Node.js + Express** による**バックエンド**での API リクエスト処理
- フロントエンド上での API キーの**漏洩を防止**
- **Render**を使ってフロントとバックを**別々にデプロイ**

✅ **パフォーマンスと最適化**

- **API の並列リクエスト**による初回読み込み速度の改善
- コードの**リファクタリング**で可読性・保守性向上
- 今後の拡張に向けた**メモ化・キャッシュの導入準備**
  <br />
  <br />

## What's Improved? 🧐 (2025/05)

**(EN)**

Originally, this project was a frontend-only application built entirely with React, which fetched weather data directly from the OpenWeather API. However, in order to improve security, scalability, and maintainability, I made several key improvements:

<br />

🔐 **Security Enhancement with Backend**

- Added a lightweight **Node.js + Express** backend to handle API requests securely
- Prevented exposure of **API keys** by moving API calls from the frontend to the backend
- Maintained the original frontend structure with **minimal impact**, enabling a clean separation of concerns

⚙️ **Performance Optimization**

- Refactored API calls to run **in parallel**, significantly reducing loading time
- Improved **loading animation behavior** to remain active during real network delay scenarios
- Reduced unnecessary re-renders in React components (plan to add `memo`, `useCallback` optimization in future)

🎯 **Project Structure & Scalability**

- Restructured the folder architecture for **clearer separation between frontend and backend**
- Improved **readability and maintainability** of core logic and data handling
  <br />
  <br />

**(JP)**

開発当時は、**React のみで構築されたフロントエンド専用のアプリケーション**として、OpenWeather API から直接データを取得していました。しかし、**セキュリティの強化、スケーラビリティの向上、保守性の改善**を目的に、以下のような大きな改善を行いました：

<br />

🔐 **セキュリティ強化のためのバックエンド導入**

- 軽量な**Node.js + Express**のバックエンドを追加し、安全に API リクエストを処理
- **API キーの漏洩リスク**を排除するため、API 呼び出しをフロントからバックに移行
- 元の React 構成をできるだけ保持しつつ、データ取得の処理をフロントから切り離して明確に管理

⚙️ **パフォーマンスの最適化**

- **API リクエストの並列処理**により読み込み時間を短縮(Render のコールドスタート対応)
- 実際のネットワーク遅延でも**ローディングアニメーションが正しく表示されるよう調整**
- 不要な再レンダリングを抑える構成にリファクタ（将来的に `memo` や `useCallback` も導入予定）

🎯 **プロジェクト構成と拡張性の向上**

- フロントエンドとバックエンドを明確に分けた**フォルダ構成**へ整理
- ロジックとデータ処理の**可読性・保守性**を向上
  <br />
  <br />

## Usage 🚀

### Prerequisites

- Node.js and npm installed on your machine
- OpenWeatherMap API key

### Setup

### 1. 📌 Required Accounts

- **OpenWeatherMap**: Create an account and get your API key →&nbsp; [Sign up](https://openweathermap.org/)

<br />

### 2. 🔧 Environment Variables

Rename the `example.env` file in the frontend directory and weather-api-proxy(backend) to `.env` and update it with your credentials:

**weather-api-proxy (backend)**

```
PORT=5000
OPEN_WEATHER_API_KEY=ADD_YOUR_OPEN_WEATHER_API_KEY
OPEN_WEATHER_APP_BASE_URL='https://api.openweathermap.org/data/2.5'
```

**frontend**

```
# Update this after deployment
REACT_APP_API_BASE_URL=http://localhost:5000
```

**Note**: Update the above URL to match your deployment environment when deploying (e.g., Render or other hosting service).

<br />

### 3. 🧩 Key Dependencies

- [React:](https://react.dev/)
  JavaScript library for building the frontend.
- [React Icons:](https://react-icons.github.io/react-icons/)
  Include popular icons as components.
- [Tailwind CSS:](https://tailwindcss.com)
  Utility-first CSS framework used for layout and styling.
- [Framer Motion:](https://motion.dev/)
  Library for smooth animations.
- [Luxon:](https://moment.github.io/luxon/#/)
  Powerful library for date and time formatting.
- [Express:](https://expressjs.com/)
  Lightweight Node.js framework for creating the proxy server.
- [Axios:](https://axios-http.com/)
  Promise-based HTTP client used for making API requests from both frontend and backend.

  ➡️ No sign-up required for the frontend app.

<br />

### 4. ▶️ Run the Application

In **two separate terminals**:

**Backend**

```
cd weather-api-proxy
npm install
npm run dev
```

**Frontend**

```
cd react-weatherApp-3hourly
npm install
npm start
```

<br />

### 5. 🚀 Build & Deploy

You can deploy the frontend to [Render](https://render.com/), [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/home), and the **backend** (proxy server) to [Render](https://render.com/) or [Railway](https://railway.com/).

<br />

## 📘 Development Notes

**(EN)**

This project was originally developed as a **Single Page Application (SPA)** built solely with React. During the recent refactoring, I added a backend using **Node.js** and **Express** to improve **security** and **data management**, evolving the app into a **full-stack application based on an SPA structure**.

Typically, refactoring focuses on improving code readability or UI consistency. However, this time, it involved a much larger change **—building a backend from scratch**.

When I first created this project, I had just started learning React. I didn’t yet have the knowledge or experience to handle security properly or to deploy apps with those concerns in mind. But over the years, as I picked up new languages and technologies, I was finally able to revisit this project and transform it into a **safer, more practical application**—while still preserving the spirit of the original.

This experience was a valuable opportunity to apply my skills in a real-world context, and I feel proud of how far I’ve come. 💪✨

<br />

**(JP)**

このプロジェクトは当初、React のみで構築された SPA（シングルページアプリケーション）として開発されました。今回のリファクタリングでは、**セキュリティ強化とデータ管理の明確化**を目的に、Node.js + Express によるバックエンドを新たに追加し、**SPA ベースのフルスタックアプリケーション**へと進化させました。

通常、リファクタリングはコードの可読性やデザインの改善が中心になりますが、今回は**バックエンドの新規実装**という、より大規模かつ実践的な変更となりました。

開発当初は、React を学び始めたばかりで、セキュリティ面まで十分に考慮することも、それを踏まえてアプリをデプロイする力も備わっていませんでした。しかし数年の経験を経て、他の言語や技術を習得したことで、当時のプロジェクトを活かしつつ、**より安全で実用的なアプリケーション**へとブラッシュアップすることができました。

今回の取り組みは、実践的な開発力を鍛える上で非常に有意義で、自分の成長を実感できた貴重な経験となりました。💪✨
