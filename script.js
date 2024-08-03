const jokes = document.querySelector('#joke');
const button = document.querySelector('#joke-btn');


// XHR way to do it:
// const generateJoke = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // console.log(JSON.parse(this.responseText).value) // it will show me the joke
//             jokes.innerHTML = JSON.parse(this.responseText).value;
//         } else {
//             jokes.innerHTML = `SOmething went wrong, not funny!`;
//         }
//     }
//     xhr.send();
// }
// button.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke)


const getData = async function (){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    const joke = data.value;
    jokes.innerHTML = `${joke}`;
}
getData()

button.addEventListener("click", getData);