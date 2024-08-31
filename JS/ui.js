"use strict"

let navLinks = document.querySelectorAll('.nav-link');
let details = document.querySelector('.details');
let games = document.querySelector('.games');
let btnClose = document.querySelector('#btnClose');
import { displayGames , IDs} from "./games.js";
import { getDetails } from "./details.js";

console.log(IDs);

export function linkClicked(){
    displayGames();
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            activeLink(i);
            displayGames();
        })
    }
}
function activeLink(index) {
    navLinks[index].classList.add('active');
    for (let i = 0; i < navLinks.length; i++) {
        if (i == index)
            continue;
        navLinks[i].classList.remove('active');
    }
}

export function cardClicked(cards){
    for(let i = 0 ;i < cards.length; i++){
        cards[i].addEventListener('click', function (e){
            getDetails(IDs[i]);
            detailsSection();
        })
    }
}

function gamesSection(){
    details.classList.add('d-none')
    games.classList.remove('d-none')
}

function detailsSection(){
    details.classList.remove('d-none')
    games.classList.add('d-none')
}

btnClose.addEventListener('click', function(){
    gamesSection();
})