import Logo from "../assets/logoPokemon.png";
import { Link } from "react-router-dom";

import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={Logo} alt="logo pokemon" />
          </Link>

          <div className="button-bloc">
            <Link to="/pokemonsList">Pokemons</Link>
            <Link to="/typesPokemons">Types</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
