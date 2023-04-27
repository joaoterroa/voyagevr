const fetchWeatherData = async (latitude, longitude, apiKey) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );

    if (response.ok) {
      const weatherData = await response.json();
      return weatherData;
    } else {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchWeatherData };
