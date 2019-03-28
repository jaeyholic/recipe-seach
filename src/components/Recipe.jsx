import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "1763314211c22c4de226fc03af2be9fd";
class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=&{title}`
    );
    const res = await req.json();
    console.log(res.recipes);
    this.setState({
      activeRecipe: res.recipes[0]
    });
  };

  render() {
    const {
      image_url,
      title,
      publisher,
      publisher_url
    } = this.state.activeRecipe;

    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img src={image_url} alt={title} className="active-recipe__img" />
            <h3 className="active-recipe__title">{title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{publisher}</span>
            </h4>
            <p className="active-recipe__website">
              <span>
                <a href={publisher_url}>{publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
