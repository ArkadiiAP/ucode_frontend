function displayHeroes(team, universe, race, eyeColor, hairColor) {
    if((team == "Avengers")||(team == "S.H.I.E.L.D.")&&(universe == "Marvel")&&(race == "human")&&(eyeColor == "green")
    &&(hairColor == "lightBrown/green")){
        alert("This is Black Widow!");
    } else if(((team == "Justice League Of America")||(team == "Teen Titans"))&&(universe == "DC Comics")&&
        ((race == "human")||(race == "kryptonian"))&&(eyeColor == "blue")&&(hairColor == "black")){
        alert("This is a Superman or Robin!");
    } else alert("Didn't recognize!");
}
displayHeroes("Avengers", "Marvel", "human", "green", "lightBrown/green");
displayHeroes("Teen Titans", "DC Comics", "kryptonian", "blue", "black");
displayHeroes("asd", "zvx", "vhnh", "sdgdgn", "adg");