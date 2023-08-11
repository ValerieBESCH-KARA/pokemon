import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TypePokemonPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { element } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${element}`
        );
        console.log("data TypePokemonPage>>>", response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error catch TypePokemonPage>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En chargement...</div>
  ) : (
    <main>
      <h1>Type : {data.name}</h1>
      <div>
        {data.pokemon.map((pokemon, index) => {
          console.log("pokemonTypePage>>>", pokemon);
          const url = pokemon.pokemon.url.split("/")[6];
          return (
            <Link to={`/pokemon/${pokemon.pokemon.name}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                alt=""
              />
              <div>{pokemon.pokemon.name}</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default TypePokemonPage;
