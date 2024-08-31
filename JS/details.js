"use strict"

let detailsContent = document.getElementById('detailsContent');
export let card = document.querySelectorAll('.card');
let details = document.querySelector('.details');



export async function getDetails(id){

    console.log('hello');
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '060b02a1dfmsh091946f275f83e3p1567c3jsn3f09de236e55',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const api = await fetch(url, options);
    const response = await api.json();
    console.log(response);
    displayDetails(response);
}


function displayDetails(response){
    detailsContent.innerHTML = `<div class="col-md-4">
          <img src="${response.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
          <h3>Title: ${response.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
          <p class="small">${response.description}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${response.game_url}">Show
            Game</a>
        </div>`
}