import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/typesListPage.css";

const TypesListPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        console.log("data TypeListPage>>>", response.data);

        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("error catch TypesListPage>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En chargement...</div>
  ) : (
    <main>
      <h1>Types de pokemons</h1>

      <div className="types-bloc">
        {data.map((types) => {
          return <Link to={`/pokemon/${types.name}`}>{types.name}</Link>;
        })}
      </div>
    </main>
  );
};

export default TypesListPage;
