window.onload = () => {

// FUNCOES


// load um ficheiro json em array
const loadData = async (url)  => {

    let request = await fetch(url);
    let result = await request.json();
    return result;

}

// criar elementos html em funcao does dados de um array
const DataArrayToHTML = (arr) => {
    let rightSection = document.querySelector("#right-section") 
for (i in arr) {
    if (i === "image") {
        let imageWrapper = document.createElement("span");
        let imageElement = document.createElement("img");
        imageElement.innerHTML(i);
        imageWrapper.appendChild(imageElement);
        rightSection.appendChild(imageWrapper);
}
}
}


















    
}