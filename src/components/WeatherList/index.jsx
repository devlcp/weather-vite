import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './local.css';
import WeatherDetail from '../WeatherDetail';

import { API_KEY, COORDS, COUNT, LANG, UNITS } from '../../constants'

const WeatherList = () => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const arrayTemp = [];

    const dataGet = async () => {
        try {
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${COORDS[0]}&lon=${COORDS[1]}&cnt=${COUNT}&units=${UNITS}&lang=${LANG}&appid=${API_KEY}`);

            console.log(res.data.list)
            setList(res.data.list)
        } catch (err) {
            console.error(err)
        }
    }

    const addFavorite = () => (data) => {
        let tempStorage = localStorage.getItem('localFavorites');
        tempStorage = JSON.parse(tempStorage);

        if (tempStorage == null) {
            arrayTemp.push(data);
            localStorage.setItem('localFavorites', JSON.stringify(arrayTemp));
        } else {
            arrayTemp.push(data);
            localStorage.setItem('localFavorites', JSON.stringify(arrayTemp));
        }
    }

    useEffect(() => {
        dataGet()
    }, []);

    const filtered = list.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <hr />
            <input type="text" className="search" placeholder="Search your city..." onChange={ (e) => setSearch(e.target.value) } />
            <ul className="item-container">
                {
                    filtered.length > 0 ? 
                        filtered.map((item) => 
                            <WeatherDetail 
                                details={item ? item: []} 
                                keyItem={item.id} 
                                addFavorite={addFavorite({id: item.id, name: item.name, temp: item.main.temp})} 
                            />
                        ) 
                    :
                        <h3>No hay datos para mostrar.</h3>
                }
            </ul>
        </>
    )
}

export default WeatherList
