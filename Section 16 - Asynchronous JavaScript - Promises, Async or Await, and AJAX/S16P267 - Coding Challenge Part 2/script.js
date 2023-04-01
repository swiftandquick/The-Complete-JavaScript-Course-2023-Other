'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const imgContainer = document.querySelector('.images');

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

const loadAll = async function(imgArr) {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs); // Array of Promises.  
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl); // Array of responses (<img> elements) from Promises.   
    imgsEl.forEach(img => img.classList.add('parallel'));
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);