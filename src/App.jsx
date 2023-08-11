import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import PokemonListPage from "./Pages/PokemonsListPage";
import TypesListPage from "./Pages/TypesListPage";
import PokemonPage from "./Pages/PokemonPage";
import TypePokemonPage from "./Pages/TypePokemonPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemonsList" element={<PokemonListPage />} />
          <Route path="/typesPokemons" element={<TypesListPage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
          <Route path="/typePokemon/:element" element={<TypePokemonPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
