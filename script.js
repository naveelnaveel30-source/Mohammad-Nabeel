function filterRecipe(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all" || card.dataset.category === category){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });
}

function searchRecipe(){

    const value = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const name = card.dataset.name.toLowerCase();

        if(name.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });
}

function favorite(button){

    if(button.innerHTML === "♡"){
        button.innerHTML = "♥";
        button.style.color = "red";
    }else{
        button.innerHTML = "♡";
    }

}