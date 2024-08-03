const jokes = document.querySelector('#joke');
const button = document.querySelector('#joke-btn');

const getData = async function (){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    const joke = data.value;
    jokes.innerHTML = `${joke}`;
}
getData()


function newJoke (){
    getData()
}


button.addEventListener("click", newJoke);