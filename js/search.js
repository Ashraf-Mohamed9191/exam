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

// displayData after search------------------------

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
                <div class="image-div" onclick = "getDetails(${result[i].idMeal})">
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


// Details------------------------------------


function getDetails(index){
    let currentIdMeal = index;
    
    let result;
        async function getApiDetails(){
            const api =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentIdMeal}`);
    
            let finalApi =await api.json();
    
            result = finalApi.meals;
    
            
            
            display()
        }
    
        getApiDetails();
    
    
        function display(){
    
            let cartona ="" ;
            cartona =`
            <div class="container py-2">
            <div  class="row">
                <div class="col-md-4 ">
                    <div>
                        <img src="${result[0].strMealThumb}" class="w-100" alt="">
                    </div>
                    <h2 class="text-white">${result[0].strMeal}</h2>
                </div>
    
                <div class="col-md-8">
                    <div class="text-white">
                        <h2>Instructions</h2>
                        <p>${result[0].strInstructions}</p>
                        <h3>Area : ${result[0].strArea}</h3>
                        <h3>Category : ${result[0].strCategory}</h3>
                        <h3>Recipes :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strMeasure1} ${result[0].strIngredient1}</li>
                            <li class="btn btn-light">${result[0].strMeasure2} ${result[0].strIngredient2}</li>
                            <li class="btn btn-light">${result[0].strMeasure3} ${result[0].strIngredient3}</li>
                            <li class="btn btn-light">${result[0].strMeasure4} ${result[0].strIngredient4}</li>
                            <li class="btn btn-light">${result[0].strMeasure5} ${result[0].strIngredient5}</li>
                            <li class="btn btn-light">${result[0].strMeasure6} ${result[0].strIngredient6}</li>
                            <li class="btn btn-light">${result[0].strMeasure7} ${result[0].strIngredient7}</li>
                            <li class="btn btn-light">${result[0].strMeasure8} ${result[0].strIngredient8}</li>
                            <li class="btn btn-light">${result[0].strMeasure9} ${result[0].strIngredient9}</li>
                            <li class="btn btn-light">${result[0].strMeasure10} ${result[0].strIngredient10}</li>
                            <li class="btn btn-light">${result[0].strMeasure11} ${result[0].strIngredient11}</li>
                            <li class="btn btn-light">${result[0].strMeasure12} ${result[0].strIngredient12}</li>
                            <li class="btn btn-light">${result[0].strMeasure13} ${result[0].strIngredient13}</li>
                            <li class="btn btn-light">${result[0].strMeasure14} ${result[0].strIngredient14}</li>
                            <li class="btn btn-light">${result[0].strMeasure15} ${result[0].strIngredient15}</li>
                            <li class="btn btn-light">${result[0].strMeasure16} ${result[0].strIngredient16}</li>
                            <li class="btn btn-light">${result[0].strMeasure17} ${result[0].strIngredient17}</li>
                            <li class="btn btn-light">${result[0].strMeasure18} ${result[0].strIngredient18}</li>
                            <li class="btn btn-light">${result[0].strMeasure19} ${result[0].strIngredient19}</li>
                            <li class="btn btn-light">${result[0].strMeasure20} ${result[0].strIngredient20}</li>
    
                        </ul>
                        <h3>Tags :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strTags}</li>
                        </ul>
                        <button class="btn btn-success"><a href="${result[0].strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a href="${result[0].strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
            `
            document.getElementById('details-section').innerHTML = cartona
    
        }
    
        document.getElementById('meal').classList.add('d-none');
        searchInputLetter.classList.add('d-none');
        searchInputName.classList.add('d-none');
    }







// SearchByName------------------------------------------


let searchInputName = document.getElementById('searchByName');

function getName(){
    let currentName = searchInputName.value;

    async function getApi(){
        const api =await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${currentName}`);
    
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
                    <div class="image-div" onclick = "getDetails(${result[i].idMeal})">
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

}


// Details------------------------------------


function getDetails(index){
    let currentIdMeal = index;
    
    let result;
        async function getApiDetails(){
            const api =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentIdMeal}`);
    
            let finalApi =await api.json();
    
            result = finalApi.meals;
    
            
            
            display()
        }
    
        getApiDetails();
    
    
        function display(){
    
            let cartona ="" ;
            cartona =`
            <div class="container py-2">
            <div  class="row">
                <div class="col-md-4 ">
                    <div>
                        <img src="${result[0].strMealThumb}" class="w-100" alt="">
                    </div>
                    <h2 class="text-white">${result[0].strMeal}</h2>
                </div>
    
                <div class="col-md-8">
                    <div class="text-white">
                        <h2>Instructions</h2>
                        <p>${result[0].strInstructions}</p>
                        <h3>Area : ${result[0].strArea}</h3>
                        <h3>Category : ${result[0].strCategory}</h3>
                        <h3>Recipes :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strMeasure1} ${result[0].strIngredient1}</li>
                            <li class="btn btn-light">${result[0].strMeasure2} ${result[0].strIngredient2}</li>
                            <li class="btn btn-light">${result[0].strMeasure3} ${result[0].strIngredient3}</li>
                            <li class="btn btn-light">${result[0].strMeasure4} ${result[0].strIngredient4}</li>
                            <li class="btn btn-light">${result[0].strMeasure5} ${result[0].strIngredient5}</li>
                            <li class="btn btn-light">${result[0].strMeasure6} ${result[0].strIngredient6}</li>
                            <li class="btn btn-light">${result[0].strMeasure7} ${result[0].strIngredient7}</li>
                            <li class="btn btn-light">${result[0].strMeasure8} ${result[0].strIngredient8}</li>
                            <li class="btn btn-light">${result[0].strMeasure9} ${result[0].strIngredient9}</li>
                            <li class="btn btn-light">${result[0].strMeasure10} ${result[0].strIngredient10}</li>
                            <li class="btn btn-light">${result[0].strMeasure11} ${result[0].strIngredient11}</li>
                            <li class="btn btn-light">${result[0].strMeasure12} ${result[0].strIngredient12}</li>
                            <li class="btn btn-light">${result[0].strMeasure13} ${result[0].strIngredient13}</li>
                            <li class="btn btn-light">${result[0].strMeasure14} ${result[0].strIngredient14}</li>
                            <li class="btn btn-light">${result[0].strMeasure15} ${result[0].strIngredient15}</li>
                            <li class="btn btn-light">${result[0].strMeasure16} ${result[0].strIngredient16}</li>
                            <li class="btn btn-light">${result[0].strMeasure17} ${result[0].strIngredient17}</li>
                            <li class="btn btn-light">${result[0].strMeasure18} ${result[0].strIngredient18}</li>
                            <li class="btn btn-light">${result[0].strMeasure19} ${result[0].strIngredient19}</li>
                            <li class="btn btn-light">${result[0].strMeasure20} ${result[0].strIngredient20}</li>
    
                        </ul>
                        <h3>Tags :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strTags}</li>
                        </ul>
                        <button class="btn btn-success"><a href="${result[0].strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a href="${result[0].strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
            `
            document.getElementById('details-section').innerHTML = cartona
    
        }
    
        document.getElementById('meal').classList.add('d-none');
        searchInputLetter.classList.add('d-none');
        searchInputName.classList.add('d-none');
    }



// searchByLetter-----------------------------------
let searchInputLetter = document.getElementById('searchByLetter');


function getLetter(){
    let currentLetter = searchInputLetter.value;

    if(currentLetter != ""){

        async function getApi(){
        const api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${currentLetter}`);
    
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
                    <div class="image-div" onclick = "getDetails(${result[i].idMeal})">
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

    }


    

}

// Details------------------------------------


function getDetails(index){
    let currentIdMeal = index;
    
    let result;
        async function getApiDetails(){
            const api =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentIdMeal}`);
    
            let finalApi =await api.json();
    
            result = finalApi.meals;
    
            
            
            display()
        }
    
        getApiDetails();
    
    
        function display(){
    
            let cartona ="" ;
            cartona =`
            <div class="container py-2">
            <div  class="row">
                <div class="col-md-4 ">
                    <div>
                        <img src="${result[0].strMealThumb}" class="w-100" alt="">
                    </div>
                    <h2 class="text-white">${result[0].strMeal}</h2>
                </div>
    
                <div class="col-md-8">
                    <div class="text-white">
                        <h2>Instructions</h2>
                        <p>${result[0].strInstructions}</p>
                        <h3>Area : ${result[0].strArea}</h3>
                        <h3>Category : ${result[0].strCategory}</h3>
                        <h3>Recipes :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strMeasure1} ${result[0].strIngredient1}</li>
                            <li class="btn btn-light">${result[0].strMeasure2} ${result[0].strIngredient2}</li>
                            <li class="btn btn-light">${result[0].strMeasure3} ${result[0].strIngredient3}</li>
                            <li class="btn btn-light">${result[0].strMeasure4} ${result[0].strIngredient4}</li>
                            <li class="btn btn-light">${result[0].strMeasure5} ${result[0].strIngredient5}</li>
                            <li class="btn btn-light">${result[0].strMeasure6} ${result[0].strIngredient6}</li>
                            <li class="btn btn-light">${result[0].strMeasure7} ${result[0].strIngredient7}</li>
                            <li class="btn btn-light">${result[0].strMeasure8} ${result[0].strIngredient8}</li>
                            <li class="btn btn-light">${result[0].strMeasure9} ${result[0].strIngredient9}</li>
                            <li class="btn btn-light">${result[0].strMeasure10} ${result[0].strIngredient10}</li>
                            <li class="btn btn-light">${result[0].strMeasure11} ${result[0].strIngredient11}</li>
                            <li class="btn btn-light">${result[0].strMeasure12} ${result[0].strIngredient12}</li>
                            <li class="btn btn-light">${result[0].strMeasure13} ${result[0].strIngredient13}</li>
                            <li class="btn btn-light">${result[0].strMeasure14} ${result[0].strIngredient14}</li>
                            <li class="btn btn-light">${result[0].strMeasure15} ${result[0].strIngredient15}</li>
                            <li class="btn btn-light">${result[0].strMeasure16} ${result[0].strIngredient16}</li>
                            <li class="btn btn-light">${result[0].strMeasure17} ${result[0].strIngredient17}</li>
                            <li class="btn btn-light">${result[0].strMeasure18} ${result[0].strIngredient18}</li>
                            <li class="btn btn-light">${result[0].strMeasure19} ${result[0].strIngredient19}</li>
                            <li class="btn btn-light">${result[0].strMeasure20} ${result[0].strIngredient20}</li>
    
                        </ul>
                        <h3>Tags :</h3>
                        <ul>
                            <li class="btn btn-light">${result[0].strTags}</li>
                        </ul>
                        <button class="btn btn-success"><a href="${result[0].strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a href="${result[0].strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
            `
            document.getElementById('details-section').innerHTML = cartona
    
        }
    
        document.getElementById('meal').classList.add('d-none');
        searchInputLetter.classList.add('d-none');
        searchInputName.classList.add('d-none');
    }