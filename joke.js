const btnEl =document.getElementById("btn");
const jokeEl =document.getElementById("joke");
const apiKey ="vPO2FZ9GAOXHQ+e7nba6Ug==KTKbqQoZ0VOiH7Ej";

const option ={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};
const apiURL ="https://api.api-ninjas.com/v1/jokes";

async function getJoke(){
 try{
    jokeEl.innerText ="updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response =await fetch(apiURL, option);
   const data = await response.json();

   btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
   jokeEl.innerText =data[0].joke;
} catch (error) {
    jokeEl.innerText = "An error happened,try again later";
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";  
}
}

btnEl.addEventListener("click", getJoke);