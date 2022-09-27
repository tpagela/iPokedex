import React, { useEffect, useState } from 'react';





const url = "https://pokeapi.co/api/v2/pokemon/machamp"

const SpriteFetch = () => {
    const [pokemon, setPokemon] = useState("")

    useEffect(() => {
        getList()
    }, []);

    const getList = () => {
        fetch(url)
            .then((res) => res.json())
            .then((list) => {
                console.log(list.sprites)
                setPokemon(list.sprites.front_default);
            })
            .catch((err) => {
                alert("ERROR")
            });
    }

    return (
        <div className="Container">
            <img src={pokemon}></img>
        </div>
    )
}

export default SpriteFetch