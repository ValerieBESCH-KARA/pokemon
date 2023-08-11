import "../styles/homePage.css";
import affiche from "../assets/affiche.png";

const HomePage = () => {
  return (
    <main>
      <div className="homePage">
        <h1>Bienvenue jeune dresseur !</h1>
        <img src={affiche} alt="pokemons" />
      </div>
    </main>
  );
};

export default HomePage;
