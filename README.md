Weather App 🌦️

A simple and responsive weather application built using React + Vite that allows users to:

Search weather by city name
Get weather using current location
View temperature, humidity, wind speed, and weather condition
Handle loading and error states

Built with the OpenWeather API
.

🚀 Features
🔍 Search weather by city
📍 Fetch weather using device location
🌡️ Real-time temperature data
💨 Wind speed display
💧 Humidity display
⚡ Fast React + Vite setup
🎨 Clean responsive UI
🛠️ Tech Stack
React
Vite
JavaScript
CSS
OpenWeather API

📂 Project Structure

src/
│
├── App.jsx
├── App.css
└── main.jsx

⚙️ Installation

** Clone the repository:

git clone https://github.com/your-username/weather-app.git

Go to the project folder:

>> cd weather-app

* Install dependencies:

>> npm install

* Start the development server:

>> npm run dev

🔑 Environment Variables

* Create a .env file in the root directory:

>> VITE_WEATHER_API_KEY=your_api_key_here

** Get your API key from:

OpenWeather API Keys

📸 Features Overview

Search Weather by City:
Users can enter a city name and fetch live weather data.

Use Current Location:
Uses the browser Geolocation API to fetch weather based on current coordinates.

📦 API Used
Example endpoint:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

🧠 Learning Concepts

This project covers:

React Hooks (useState)
API Fetching
Async/Await
Conditional Rendering
Geolocation API
Environment Variables in Vite
Basic State Management
🎨 UI

The UI includes:

Dark themed weather card
Responsive layout
Styled buttons and inputs
Loading and error handling
📌 Future Improvements
🌤️ Weather icons
📅 5-day forecast
🌍 Auto-detect location on load
🔎 Search history
📱 Better mobile responsiveness
🌈 Dynamic backgrounds based on weather

📄 Important Files

Main weather logic in:

App.jsx

Styling in:

App.css
👨‍💻 Author

Built by Romel Fernandez