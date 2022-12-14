const inputvalue = document.getElementById("search_box");
const add = document.getElementById("profiles_container");


 init();

function init(){
    inputvalue.addEventListener("keyup", (event) =>{
        if(event.key === "Enter"){
            getApi()
        }
    })
}

async function getApi(){
    const value = inputvalue.value
    //console.log(value);
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const convertvalue = await api.text();
    const jason = JSON.parse(convertvalue) ;
    console.log(jason);
    let html = ''
    for(let i=0; i<jason.meals.length; i++){
        html  += `<img class="image_container" src="${jason.meals[i].strMealThumb}"  heigh="200px" width="200px"  alt="fooditems"  />` 
    }
    add.innerHTML = html;


}