import "./App.css";
import RecipeTile from "./RecipeTile";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");
  const YOUR_APP_ID = "3caed4b8";
  const YOUR_APP_KEY = "1b79b5c4a14d3878da2d516a3aebfde0";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${healthLabels}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="App">
      <h1>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app_healthLabels">
          <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
