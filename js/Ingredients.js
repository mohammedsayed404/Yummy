import { Gui } from "./Gui.js";
import { FilterIngredients } from "./FilterByIngredients.js";
let mealsingredients = [];
export class Ingredients {
  async getIngredients() {
    $('.my-loader').removeClass('d-none');
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    try {
      const API = await fetch(url);
      const { meals } = await API.json();
      $('.my-loader').addClass('d-none');
      mealsingredients = meals;
      let showData = new Gui(meals);
      showData.drawIngredients();
      console.log(meals);
    } catch (error) {
      console.error(error);
    }
    
    $("#home-screen-meals .container .row .ingredients-box").each(function(index){
      $(this).click(function (e) {
        // console.log(mealsingredients[index].strIngredient);
        let filter = new FilterIngredients(mealsingredients[index].strIngredient);
        filter.getIngredientsByFilter();
      })
    })
   
  }
}
