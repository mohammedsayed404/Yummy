import { Gui } from "./Gui.js";
import {showDetails} from "./main.js";
let allMeals = [];
export class FilterArea {
constructor(area){
    this.area = area;
}
  async getAreayByFilter() {
    $('.my-loader').removeClass('d-none');
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.area}`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader').addClass('d-none');
            allMeals = meals ; 
            let showData = new Gui(meals);
            showData.drawMeals();
            console.log(meals);
          } catch (error) {
            console.error(error);
          }
          showDetails(allMeals)
}
}

