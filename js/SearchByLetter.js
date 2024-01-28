import {Gui} from './Gui.js';
import {showDetails} from "./main.js";
let allMeals = [];
export class SearchMealsLetter {
   constructor(letter){
    this.letter = letter;
   }
    async getMealsByLetter(){
      $('.my-loader-search').removeClass('d-none');
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.letter ? this.letter: 'a'}`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader-search').addClass('d-none');
            allMeals = meals;
            let showData = new Gui(meals);
            showData.drawMeals();
            console.log(meals);
          } catch (error) {
            console.error(error);
          }
          showDetails(allMeals);
    }
}