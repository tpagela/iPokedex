import React, { useEffect, useState } from 'react';
import "../Fetch.css"
const url = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0&"

const Fetch = () => {
    const [pokemon, setPokemon] = useState([])
    const [sprite, setSprite] = useState("")
    useEffect(() => {
        getList()
        getSprite();
    }, []);

    const getList = () => {
        fetch(url)
            .then((res) => res.json())
            .then((list) => {
                // console.log(list)
                setPokemon(list.results);
                console.log(list.results)

            })
            .catch((err) => {
                alert("ERROR")
            });

    }


    const getSprite = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + 2)
            .then((res) => res.json())
            .then((list) => {
                setSprite(list.sprites.front_default)

            })
            .catch((err) => {
                alert("ERROR")
            });
    }



    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="Container">
            <ul>
                {pokemon.map((item, index) =>
                    <li key={index} className="pokemonName">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}></img>{capitalizeFirstLetter(item.name)}
                    </li>

                )}
            </ul>
        </div >
    )
}



export default Fetch