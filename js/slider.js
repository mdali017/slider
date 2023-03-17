

const allImage = [
    "img/pic01.jpg",
    "img/pic02.jpg",
    "img/pic03.jpg",
    "img/pic04.jpg"
]

let imgIndex = 0;
const imgElement = document.getElementById('slider-img')
setInterval(()=>{
    // console.log("tik tik tik")
    // console.log(imgIndex)
    const imgUrl = allImage[imgIndex];
    // console.log(imgUrl);
    imgIndex++;
    imgElement.setAttribute('src', imgUrl)
    if(imgIndex === allImage.length){
        imgIndex = 0;
    }
},1000)