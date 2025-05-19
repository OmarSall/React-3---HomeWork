import { useEffect, useState } from "react";

export default function HourlyForecast() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [temperatures, setTemperatures] = useState([]);
    const [manualMode, setManualMode] = useState(false);

    // Trying to get GeoLocation on Mount
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                () => {
                    setManualMode(true);  // if user denies permission
                }
            );
        } else {
            setManualMode(true);    // if geolocation is not supported
        }
    }, []);

    // Fetch temperature when coords available
    useEffect(() => {
        const fetchTemperature = async () => {
            if (!latitude || !longitude) {
                return;
            }
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature&forecast_days=1`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (data.hourly?.apparent_temperature) {
                    setTemperatures(data.hourly.apparent_temperature);
                }
            } catch (error) {
                console.error("Error fetching forecast:", error);
            }
        };

        fetchTemperature();
    }, [latitude, longitude]);

    return (
        <div>
            <h2>🌡 Hourly Forecast</h2>
            {manualMode && (
                <div>
                    <p>Please enable location services to see the weather forecast.</p>
                    <input
                        type="number"
                        placeholder="Latitude"
                        onChange={(event) => setLatitude(event.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Longitude"
                        onChange={(event) => setLongitude(event.target.value)}
                    />
                </div>
            )}
            <ul>
                {temperatures.map((temperature, id) => (
                    <li key={id}>Hour {id}: {temperature}°C</li>
                ))}
            </ul>
        </div>
    );
}

