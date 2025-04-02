

//const getImagenPromesa =
// () => new Promise(resolve => resolve("https://sagsfdygsugcukdsgcukdsb.com"))

//getImagenPromesa().then(console.log);

const getImagen = async () => {

    try {
        const apiKey = "x46LTUXJ8GmWXvcYwx44EGL9P4c5Yr1F";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);

    } catch (error) {
        //manejo del error

    }






}
getImagen();






//peticion
//.then(resp => resp.json())
//.then(({ data }) => {
//   const { url } = data.images.original;

//   const img = document.createElement("img");
//   img.src = url;

//  document.body.append(img);

// })
//   .catch(console.warn);