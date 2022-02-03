import React from 'react'
import PropTypes from 'prop-types'
import { BsFillStarFill } from 'react-icons/bs'

import './local.css'

const WeatherDetail = ({details, keyItem, addFavorite}) => {
    const detail = [{
        id: details.id,
        temperature: {
            value: details.main?.temp,
            max: details.main?.temp_max,
            min: details.main?.temp_min
        },
        description: details.weather[0].description,
        icon: details.weather[0].icon,
        city: details.name,
        country: details.sys.country,
    }]

    return (
        <>
            <li className="item animate__bounceIn" key={keyItem}>
                <img src={`http://openweathermap.org/img/wn/${detail[0].icon}@2x.png`} />
                <span>{detail[0].description}</span>
                <span><strong>{detail[0].city}</strong>, <strong>{detail[0].country}</strong></span>
                <span><p>{detail[0].temperature.value} °C</p><p>Max: {detail[0].temperature.max}°C    Min: {detail[0].temperature.min}°C</p></span>
                <button onClick={addFavorite}><BsFillStarFill /></button>
            </li>
        </>
    )
}

WeatherDetail.propTypes = {
    details: PropTypes.array.isRequired
}

export default WeatherDetail
