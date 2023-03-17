

const allNewImage = [
    'img/pic01.jpg',
    'img/pic02.jpg',
    'img/pic03.jpg',
    'img/pic04.jpg'
]
let imgOneIndex = 0;
const sliderImage = document.getElementById('slider-img-one');
setInterval(()=>{
    // console.log('tik tik tik')
    // console.log(imgOneIndex)
    
    const imgUrlOne = allNewImage[imgOneIndex];
    imgOneIndex++;
    sliderImage.setAttribute('src', imgUrlOne)
    // console.log(imgUrlOne)
    if(imgOneIndex === allNewImage.length){
        imgOneIndex = 0;
    }


}, 1000)