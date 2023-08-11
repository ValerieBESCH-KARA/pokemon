import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        console.log("data pokemonPage>>>", response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(" pokemonPage>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En chargement...</div>
  ) : (
    <main>
      <h1>Pokemon</h1>

      <div className="pokemon">
        <div className="pokemon-card">
          <div>
            <img src={data.sprites.front_default} alt="picture pokemon" />
            <p>{name}</p>
          </div>
        </div>

        <div>Types :</div>
        <div className="pokemon-type">
          {data.types.map((typesTab) => {
            return (
              <div>
                <Link to={`/typePokemon/${typesTab.type.name}`}>
                  {typesTab.type.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PokemonPage;
