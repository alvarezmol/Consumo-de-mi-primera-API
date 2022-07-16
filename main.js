const URL = "https://api.thecatapi.com/v1/images/search?limit=3"



function getNewCat() {
    fetch(URL)
    .then(res=>res.json())
    .then(data=> {
        const input1 = document.getElementById("foto_gatos1");
        const input2 = document.getElementById("foto_gatos2");
        const input3 = document.getElementById("foto_gatos3");
        input1.src =  data[0].url;
        input2.src =  data[1].url;
        input3.src =  data[2].url;
    });
}

getNewCat();
