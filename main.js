const URL = "https://api.thecatapi.com/v1/images/search"



function getNewCat() {
    fetch(URL)
    .then(res=>res.json())
    .then(data=> {
        const img = document.querySelector("img");
        img.src =  data[0].url;
    });
  
}