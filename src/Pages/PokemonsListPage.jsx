import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pokemonPage.css";

const PokemonListPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

        console.log("data PokemonListPage >>>", response.data);

        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("error CharactersPage catch>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>En chargement...</p>
  ) : (
    <main>
      <h1>Liste des Pokemons</h1>

      <div className="pokemons-list">
        {data.map((pokemon, index) => {
          const url = pokemon.url.split("/")[6];
          return (
            <Link
              className="pokemon-card"
              to={`/pokemon/${pokemon.name}`}
              key={index}
            >
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                  alt=""
                />

                <p>{pokemon.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default PokemonListPage;
