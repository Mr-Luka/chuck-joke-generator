const joke = document.querySelector('#joke');
const button = document.querySelector('#joke-btn');

const getData = async function (){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    console.log(data)
}
getData()





button.addEventListener("click", newJoke);