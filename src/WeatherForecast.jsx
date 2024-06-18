
import './WeatherForecast.css';
import WeatherIcon from './components/WeatherIcon/WeatherIcon.jsx';
import WeatherData from './components/WeatherData/WeatherData.jsx';

const WeatherForecast = ({forecast}) => {
    return (
        <div className="weather">
            <WeatherIcon key={forecast.id} forecast = {forecast}/>
            <WeatherData key={forecast.id} forecast = {forecast}/>
        </div>
    )
}

export default WeatherForecast;
