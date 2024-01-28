import { Gui } from "./Gui.js";
import {showDetails} from "./main.js";
let allMeals = [];
export class FilterIngredients {
constructor(ingredients){
    this.ingredients = ingredients;
}
  async getIngredientsByFilter() {
    $('.my-loader').removeClass('d-none');
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.ingredients}`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader').addClass('d-none');
            allMeals = meals
            let showData = new Gui(meals);
            showData.drawMeals();
            console.log(meals);
          } catch (error) {
            console.error(error);
          }

          showDetails(allMeals)
}
}

