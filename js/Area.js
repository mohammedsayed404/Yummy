import { Gui } from "./Gui.js";
import {FilterArea} from "./FilterByArea.js";

let mealsArea = [];
export class Area {
   
    async getArea(){
      $('.my-loader').removeClass('d-none');
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader').addClass('d-none');
            mealsArea = meals
            let showData = new Gui(meals);
            showData.drawArea();
            console.log(meals);
          } catch (error) {
            console.error(error);
          }
      
     $('#home-screen-meals .container .row .area-box').each(function(index){
        $(this).click(function(e) {
          // console.log(mealsArea[index].strArea);
          let filter = new FilterArea(mealsArea[index].strArea)
              filter.getAreayByFilter()
        })
      })
          
    }
}
