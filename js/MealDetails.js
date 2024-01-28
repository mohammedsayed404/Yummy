import { Gui } from "./Gui.js";
export class MealDetail {
constructor(id){
    this.id = id;
}
  async getMealDetails() {
    $('.my-loader').removeClass('d-none');
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader').addClass('d-none');
            let showDetails = new Gui(meals[0]);
            showDetails.drawMealDetials();
            // console.log(meals[0].strMeal);
          } catch (error) {
            console.error(error);
          }
}
}

