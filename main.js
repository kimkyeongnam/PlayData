var result = 0;

function getRandomInt(){
    console.log(Math.floor(Math.random()*4) + 1);
    return Math.floor(Math.random()*4) + 1;
}

function recommendFood(){
    cleaning();
    result = getRandomInt();
    document.getElementById("food_"+result).style.backgroundColor = "lightyellow";
}

function cleaning(){
    document.getElementById("food_1").style.backgroundColor = "white";
    document.getElementById("food_2").style.backgroundColor = "white";
    document.getElementById("food_3").style.backgroundColor = "white";
    document.getElementById("food_4").style.backgroundColor = "white";
}