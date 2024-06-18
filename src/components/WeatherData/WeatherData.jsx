

const WeatherData = ({forecast}) => {
    return (
        <div>
            <h2>{forecast.day}</h2>
            <p><span>conditions: </span>{forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </div>
    )
}

export default WeatherData;