import { Gui } from "./Gui.js";
import { FilterCategory } from "./FilterByCategory.js";
import { MealDetail } from "./MealDetails.js";
let mealsCategory = [];
export class Categories {
  async getCategories() {
    $(".my-loader").removeClass("d-none");
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    try {
      const API = await fetch(url);
      const { categories } = await API.json();
      $(".my-loader").addClass("d-none");
      mealsCategory = categories;
      let showData = new Gui(categories);
      showData.drawCategories();
      console.log(categories);
    } catch (error) {
      console.error(error);
    }

    $("#home-screen-meals .container .row .category-box").each(function (
      index
    ) {
      $(this).click(function (e) {
        // console.log(mealsCategory[index].strCategory);
        let filter = new FilterCategory(mealsCategory[index].strCategory);
        filter.getCategoryByFilter();
      });
    });
  }
}
