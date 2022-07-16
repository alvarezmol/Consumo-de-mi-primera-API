const URL = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=74bb82aa-6f0f-4260-8355-c097c4e075d4"

const URL_fav = "https://api.thecatapi.com/v1/favourites?api_key=74bb82aa-6f0f-4260-8355-c097c4e075d4"

const spanError = document.getElementById("error")



async function getNewCat() {
    const res = await fetch(URL);
    const data = await res.json();
    if (res.status !==200){
      spanError.innerHTML = "Hubo un error: " + res.status;
    }else{
    const input1 = document.getElementById("foto_gatos1");
    const input2 = document.getElementById("foto_gatos2");
    const input3 = document.getElementById("foto_gatos3");
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")

    input1.src =  data[0].url;
    input2.src =  data[1].url;
    input3.src =  data[2].url;

    btn1.onclick = () => saveFavCat(data[0].id);
    btn2.onclick = () => saveFavCat(data[1].id);
    btn3.onclick = () => saveFavCat(data[2].id);
    }
};

async function getFavCat() {
    const res = await fetch(URL_fav); 
    const data = await res.json();

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    } else{
        data.forEach(gato=>{
          const section = document.getElementById("fav_cats")
            const article = document.createElement("article");
          const img = document.createElement("img");
          const btn = document.createElement("button");
          const btnText = document.createTextNode("Sacar de favoritos");
           
          btn.appendChild(btnText);
          img.src = gato.image.url;
          article.appendChild(img);
          article.appendChild(btn);
          section.appendChild(article);

        });
    }
}

async function saveFavCat(id){
    const res = await fetch(URL_fav, {
    method: "POST",
    headers: {
                "Content-Type":"application/json",
    },
    body: JSON.stringify({
        image_id: id
    }),
    });
    const data = await res.json();
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }
}
        
getFavCat();
getNewCat();
