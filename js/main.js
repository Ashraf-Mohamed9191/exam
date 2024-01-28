/// <reference types="../@types/jquery" /> 


document.getElementById('categories').addEventListener('click' , function(){

    window.location = './categories.html'
})

document.getElementById('area').addEventListener('click' , function(){

    window.location = './area.html'
})

document.getElementById('ingredients').addEventListener('click' , function(){

    window.location = './ingredients.html'
})

document.getElementById('search').addEventListener('click' , function(){

    window.location = './search.html'
})

document.getElementById('contact').addEventListener('click' , function(){

    window.location = './contact.html'
})


$('#close-icon').on('click', function(){
    $('#side-bar').animate( {width:'toggle'} , 500);
    $('#close-icon').toggleClass('fa-solid open-close-icon fa-2x fa-align-justify');
    $('#close-icon').toggleClass('fa-solid open-close-icon fa-2x fa-x');
    
})

$(function(){
    $('.loader').fadeOut(1000 , function(){
        $('.loading').fadeOut(1000 , function(){
            $('body').css('overflow' , 'auto');
            $('loading').remove();
        });
    });

})



let result = [];

async function getApi(){
    const api =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

    let finalApi =await api.json();

    result = finalApi.meals;
    
    displayData()
}

getApi();



function displayData(){
    let cartona ="" ;
    for(let i=0 ; i<result.length ; i++ ){
        cartona+=`
            <div class="col-md-3 ">
                <div class="image-div" onclick="details(${i})">
                    <img src="${result[i].strMealThumb}" class="w-100" alt="">
                    <div class="cover-div d-flex flex-column justify-content-center px-2 text-center">
                        <h3>${result[i].strMeal}</h3>
                    </div>
                </div>
                
            </div>    
        `
    }

    document.getElementById("meal").innerHTML = cartona;
}


function details(index){
    function displayData(){
        let cartona ="" ;
        cartona =`
        <div class="container py-3">
        <div  class="row">
            <div class="col-md-4 ">
                <div>
                    <img src="${result[index].strMealThumb}" class="w-100" alt="">
                </div>
                <h2 class="text-white">${result[index].strMeal}</h2>
            </div>

            <div class="col-md-8">
                <div class="text-white">
                    <h2>Instructions</h2>
                    <p>${result[index].strInstructions}</p>
                    <h3>Area : ${result[index].strArea}</h3>
                    <h3>Category : ${result[index].strCategory}</h3>
                    <h3>Recipes :</h3>
                    <ul>
                        <li class="btn btn-light">${result[index].strMeasure1} ${result[index].strIngredient1}</li>
                        <li class="btn btn-light">${result[index].strMeasure2} ${result[index].strIngredient2}</li>
                        <li class="btn btn-light">${result[index].strMeasure3} ${result[index].strIngredient3}</li>
                        <li class="btn btn-light">${result[index].strMeasure4} ${result[index].strIngredient4}</li>
                        <li class="btn btn-light">${result[index].strMeasure5} ${result[index].strIngredient5}</li>
                        <li class="btn btn-light">${result[index].strMeasure6} ${result[index].strIngredient6}</li>
                        <li class="btn btn-light">${result[index].strMeasure7} ${result[index].strIngredient7}</li>
                        <li class="btn btn-light">${result[index].strMeasure8} ${result[index].strIngredient8}</li>
                        <li class="btn btn-light">${result[index].strMeasure9} ${result[index].strIngredient9}</li>
                        <li class="btn btn-light">${result[index].strMeasure10} ${result[index].strIngredient10}</li>
                        <li class="btn btn-light">${result[index].strMeasure11} ${result[index].strIngredient11}</li>
                        <li class="btn btn-light">${result[index].strMeasure12} ${result[index].strIngredient12}</li>
                        <li class="btn btn-light">${result[index].strMeasure13} ${result[index].strIngredient13}</li>
                        <li class="btn btn-light">${result[index].strMeasure14} ${result[index].strIngredient14}</li>
                        <li class="btn btn-light">${result[index].strMeasure15} ${result[index].strIngredient15}</li>
                        <li class="btn btn-light">${result[index].strMeasure16} ${result[index].strIngredient16}</li>
                        <li class="btn btn-light">${result[index].strMeasure17} ${result[index].strIngredient17}</li>
                        <li class="btn btn-light">${result[index].strMeasure18} ${result[index].strIngredient18}</li>
                        <li class="btn btn-light">${result[index].strMeasure19} ${result[index].strIngredient19}</li>
                        <li class="btn btn-light">${result[index].strMeasure20} ${result[index].strIngredient20}</li>

                    </ul>
                    <h3>Tags :</h3>
                    <ul>
                        <li class="btn btn-light">${result[index].strTags}</li>
                    </ul>
                    <button class="btn btn-success"><a href="${result[index].strSource}" target="_blank">Source</a></button>
                    <button class="btn btn-danger"><a href="${result[index].strYoutube}" target="_blank">Youtube</a></button>
                </div>
            </div>
        </div>
    </div>
        `
    
        document.getElementById("details-section").innerHTML = cartona;
    }

    document.getElementById('meal').classList.add('d-none');
    displayData()

}

