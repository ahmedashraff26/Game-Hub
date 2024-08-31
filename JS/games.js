"use strict"

let mmorpg = document.getElementById('mmorpg');
let shooter = document.getElementById('shooter');
let sailing = document.getElementById('sailing');
let permadeath = document.getElementById('permadeath');
let superhero = document.getElementById('superhero');
let pixel = document.getElementById('pixel');
let cardsContainer = document.getElementById('cardsContainer');


export let IDs = [];

import { cardClicked } from "./ui.js"; 

export function getCards(){
    let cards= document.querySelectorAll('.card');
    console.log(cards);
    cardClicked(cards);
    return cards;
}


function displayCards(response){
    IDs = []
    let cartoona = "";
    for(let i = 0; i < response.length; i++){
        cartoona += `<div class="col">
                  <div id="${response[i].id}" class="card h-100 bg-transparent" role="button">
                     <div class="card-body">
                        <div class="position-relative mb-3">
                           <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}">
                        <div class="img-layer position-absolute">

                        </div>
                        </div>

                        <div>
            
                           <div class="hstack justify-content-between">
                              <h3 class="h6 small text-white">${response[i].title}</h3>
                              <span class="badge text-bg-primary p-2">Free</span>
                           </div>
            
                           <p class="card-text small text-center opacity-50">
                              ${response[i].short_description}
                           </p>
            
                        </div>
                     </div>
            
                     <footer class="card-footer small hstack justify-content-between">
            
                        <span class="badge badge-color">${response[i].genre}</span>
                        <span class="badge badge-color">${response[i].platform}</span>
            
                     </footer>
                  </div>
               </div>`;
               IDs.push(response[i].id);
               console.log(IDs);
    }
    cardsContainer.innerHTML = cartoona;
    getCards();
}


export async function getGames(category){

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '060b02a1dfmsh091946f275f83e3p1567c3jsn3f09de236e55',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const api = await fetch(url, options);
    let response = await api.json();
    console.log(response);

    displayCards(response);
}



export function displayGames(){
    if (mmorpg.classList.contains('active')) {
        getGames('mmorpg');
    }
    else if(shooter.classList.contains('active')){
        getGames('shooter');
    }
    else if(sailing.classList.contains('active')){
        getGames('sailing');
    }
    else if(permadeath.classList.contains('active')){
        getGames('permadeath');
    }
    else if(superhero.classList.contains('active')){
        getGames('superhero');
    }
    else if(pixel.classList.contains('active')){
        getGames('pixel');
    }
}
