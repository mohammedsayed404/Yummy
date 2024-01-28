import { vaild } from "./Valid-form.js";
import { SearchMealsName } from "./SearchByName.js";
import { SearchMealsLetter } from "./SearchByLetter.js";
export class Gui {
  constructor(list) {
    this.list = list;
  }

  drawMeals() {
    const row = $("#row-data");
    row.html(" ");
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      row.append(
        `<div class="col-sm-6 col-md-4 col-lg-3">
                <div class="rounded meal-box">
                  <figure class="position-relative  rounded">
                    <img
                      src="${element.strMealThumb}"
                      class="rounded w-100 d-block"
                      alt=""
                    />
                    <figcaption class="rounded d-flex align-items-center">
                      <h3 class="text-black">${element.strMeal}</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
                `
      );
    }
  }
  drawCategories() {
    const row = $("#row-data");
    const div = $("#search-container");
    div.html(" ");
    row.html(" ");
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      row.append(`
            
         <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="category-box rounded">
              <figure class="position-relative  rounded">
                <img
                  src="${element.strCategoryThumb}"
                  class="rounded w-100 d-block"
                  alt="${element.strCategory}"
                />
                <figcaption class="rounded text-center text-black">
                  <h3>${element.strCategory}</h3>
                  <p>
                    ${element.strCategoryDescription}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
         
         `);
    }
  }
  drawArea() {
    const row = $("#row-data");
    const div = $("#search-container");
    div.html(" ");
    row.html(" ");
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      row.append(`
            
         <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="area-box text-center">
              <i class="fa-solid fa-house-laptop fa-4x mb-2"></i>
              <h3>${element.strArea}</h3>
            </div>
          </div>
         
         `);
    }
  }
  drawIngredients() {
    const row = $("#row-data");
    const div = $("#search-container");
    div.html(" ");
    row.html(" ");
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      row.append(`
            
         <div class="col-sm-6 col-md-4 col-lg-3">
         <div class="ingredients-box text-center ps-5">
           <i class="fa-solid fa-drumstick-bite fa-4x"></i>
           <h3>${element.strIngredient}</h3>
           <p>
             ${element.strDescription.split(" ", 20).join(" ")}
           </p>
         </div>
       </div>
         
         `);
    }
  }

  drawSearchInputs() {
    const row = $("#row-data");
    const div = $("#search-container");
    row.html(" ");
    div.html(`
          <div class="row py-4">
          <div class="col-md-6">
            <div class="search-meal">
              <input
                type="text"
                name="searchMealByName"
                id="searchMealByName"
                class="form-control mb-5"
                placeholder="Search Meals By Name.."
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="search-meal">
              <input
                type="text"
                name="searchMealByLetter"
                id="searchMealByFirstLetter"
                maxlength="1"
                class="form-control"
                placeholder="Search Meals By First Letter.."
              />
            </div>
          </div>
         
      
      `);

    $("#searchMealByName").on("keyup", function (e) {
      let mealsName = new SearchMealsName($("#searchMealByName").val());
      mealsName.getMealsByName();
    });
    $("#searchMealByFirstLetter").on("keyup", function (e) {
      console.log($("#searchMealByFirstLetter").val());
      let mealsLetter = new SearchMealsLetter(
        $("#searchMealByFirstLetter").val()
      );
      mealsLetter.getMealsByLetter();
    });
  }

  drawContact() {
    const row = $("#row-data");
    const div = $("#search-container");
    div.html(" ");
    row.html(" ");
    row.html(`
      <section
      class="min-vh-100 Contact-Us py-5 d-flex justify-content-center align-items-center"
      id="Contact-Us"
    >
      <div class="container">
        <div class="justify-content-center align-items-center">
          <div class="container w-75">
            <div class="row g-3">
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Enter Your Name"
                />
                <div class="nameAlert alert alert-danger d-none w-100 mt-2">
                  Special characters and numbers not allowed
                </div>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Enter Your Email"
                />
                <div class="emailAlert alert alert-danger d-none w-100 mt-2">
                  Email not valid *exemple@yyy.zzz
                </div>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="text"
                  name="phone"
                  id="Phone"
                  placeholder="Enter your Phone Number"
                />
                <div class="phoneAlert alert alert-danger d-none w-100 mt-2">
                  Enter valid Phone Number
                </div>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="number"
                  name="age"
                  id="Age"
                  placeholder="Enter your Age"
                />
                <div class="ageAlert alert alert-danger d-none w-100 mt-2">
                  Enter valid age
                </div>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <div class="passwordAlert alert alert-danger d-none w-100 mt-2">
                  Enter valid password *Minimum eight characters, at least one
                  letter and one number:*
                </div>
              </div>
              <div class="col-md-6">
                <input
                  class="form-control"
                  type="password"
                  name="re-password"
                  id="re-password"
                  placeholder="Repassword"
                />
                <div
                  class="re-passwordAlert alert alert-danger d-none w-100 mt-2"
                >
                  Enter valid repassword
                </div>
              </div>
              <button
                class="sumbitBtn btn btn-outline-danger px-2 mt-3 m-auto w-25 disabled"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      `);
    vaild();
  }
  drawMealDetials() {
    const row = $("#row-data");
    const div = $("#search-container");
    div.html(" ");
    row.html(`
      <section class="text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="photo-box">
              <img
                src="${this.list.strMealThumb}"
                class="img-fluid w-100 rounded"
                alt=""
              />
              <h2>${this.list.strMeal}</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="content-box">
              <h2>Instructions</h2>
              <p>
                ${this.list.strInstructions}
              </p>
              <h3><span class="fw-bolder">Area : </span>${this.list.strArea}</h3>
              <h3><span class="fw-bolder">Category : </span>${this.list.strCategory}</h3>
              <h3>Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure1}${this.list.strIngredient1}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure2}${this.list.strIngredient2}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure3}${this.list.strIngredient3}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure4}${this.list.strIngredient4}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure5}${this.list.strIngredient5}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure6}${this.list.strIngredient6}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure7}${this.list.strIngredient7}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure8}${this.list.strIngredient8}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure9}${this.list.strIngredient9}</li>
                <li class="alert alert-info m-2 p-1 sekaTest  ">${this.list.strMeasure10}${this.list.strIngredient10}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure11}${this.list.strIngredient11}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure12}${this.list.strIngredient12}</li>
                <li class="alert alert-info m-2 p-1 sekaTest ">${this.list.strMeasure13}${this.list.strIngredient13}</li>
              </ul>
              <h3 class="my-1">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap my-1 Tags"></ul>
              <div>
                <a href="${this.list.strSource}" class="btn btn-success me-2" target="_blank">Source</a>
                <a href="${this.list.strYoutube}}" class="btn btn-danger " target="_blank">Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `);

    $(".content-box ul .sekaTest").each(function (index) {
      // console.log($(this).text().length);
      if ($(this).text().length <= 1) {
        $(this).css("display", "none");
      }
    });

    const { strTags } = this.list;
    if(strTags){
      let arrTags = strTags.split(",");
      // console.log(arrTags);
      if (arrTags.length >= 1) {
        arrTags.forEach((element) => {
          $(".content-box .Tags").each(function (index) {
            $(this).append(`
                <li class="alert alert-danger m-1 p-1 demo">${element}</li>
                `);
          });
        });
      } else {
        $(".content-box .Tags li").css("display", "none");
      }
    }else{
      $(".content-box .Tags li").css("display", "none");
    }
   

   
  }
}
