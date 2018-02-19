let guitar0 = {
    product:"Acoustic Guitar",
    description:"A great sounding acoustic guitar!",
    price:"500",
    image:"img/gitarr1.png"
};
let guitar1= {
    product:"Standart electric guitar",
    description:"A standard electric guitar for beginners.",
    price:"300",
    image:"img/gitarr2.png"
};
let guitar2 = {
    product:"Advanced electric guitar",
    description:"This is an advanced electric guitar for good players, and has a rich sound!",
    price:"700",
    image:"img/gitarr3.png"
};



let products = [guitar0, guitar1, guitar2];
let images = document.querySelectorAll("img");
let h2info = document.getElementsByClassName("h2info");
let description = document.getElementsByClassName("pinfo");
let price = document.getElementsByClassName("price");




for (let i =0; i < images.length; i++) {
    images[i].setAttribute("src", products[i].image);
}


for (let i =0; i < h2info.length; i++) {
    h2info[i].innerHTML = products[i].product;
}


for (let i =0; i < description.length; i++) {
    description[i].innerHTML = products[i].description;
}


for (let i =0; i < price.length; i++) {
    price[i].innerHTML = products[i].price;
}




