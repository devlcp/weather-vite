import React, { useEffect, useState } from 'react';
import {BsFillTrashFill} from 'react-icons/bs';

import './local.css';

export default function FavoriteList() {
    const [arrTemp, setArrTemp] = useState([]);
    const [search, setSearch] = useState("");

    const getLocalStorageFavorites = () => {
        let data = localStorage.getItem('localFavorites');
        data = JSON.parse(data);

        if(data == null) {
            console.log('No hay datos.')
        }else{
            setArrTemp(data);
        }
    }

    const saveLocalStorage = (arr) => {
        localStorage.setItem('localFavorites', JSON.stringify(arr));

        setArrTemp(arr);
        getLocalStorageFavorites();
    }

    const removeFavorite = () => (index) => {
        arrTemp.splice(index, 1);

        saveLocalStorage(arrTemp); 
    }

    useEffect(() => {
        getLocalStorageFavorites()
    }, [])

    const filtered = arrTemp.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <h1 className="favorite-title">Lista de Favoritos</h1>
            <input
                className="search"
                placeholder="Busca tu ciudad en favoritos..." 
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="favorite-list">
                {
                    filtered.map((item, index) => {
                      return (
                        <li key={item.id}>
                            <strong>{item.name}</strong>
                            <span>{item.temp} °C</span>
                            <button onClick={removeFavorite(index)}><BsFillTrashFill /></button>
                        </li>
                      )
                    })
                }
            </ul>
        </>
    )
}
