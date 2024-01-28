// import {MealDetail} from './MealDetail.js';
import * as animationNavbar from './animationNavbar.js';
import { Gui } from './Gui.js';
import {Categories} from './Categories.js';
import {Area} from './Area.js';
import {Ingredients} from './Ingredients.js';
import { MealDetail } from "./MealDetails.js";
let allMeals = [];
export class Meals {
   
    async getMeals(){
        $('.my-loader').removeClass('d-none');
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        try {
            const API = await fetch(url);
            const {meals} = await API.json();
            $('.my-loader').addClass('d-none');
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

// ! to show details of meals 

export function showDetails(list) {
    $('#home-screen-meals .container .row .meal-box').each(function (index) {
        $(this).click(function (e) {
            // console.log(list[index].idMeal);
            let details = new MealDetail(list[index].idMeal)
            details.getMealDetails();
        })
    })
         
}
// ? default call to show randow data 

let mealOne = new Meals();
mealOne.getMeals();

// TODO SHOW MEALS BY LINKS IN NAV BAR 

$('.nav-meals .links ul li').click(function(e){
    animationNavbar.closeNavAnimation()
    switch (e.target.innerHTML) {
        case 'Search':
            let draw = new Gui();
            draw.drawSearchInputs();
            break;
        case 'Categories':
            let cato = new Categories();
            cato.getCategories();
            break;
        case 'Area':
            let areas = new Area();
            areas.getArea();
            break;
        case 'Ingredients':
            let ingr = new Ingredients();
            ingr.getIngredients();
            break;
        case 'Contact Us':
            let g = new Gui();
            g.drawContact();
            break;
            
        }
    })
