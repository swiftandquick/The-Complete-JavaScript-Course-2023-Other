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

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function() {
            reject(new Error('image not found!'));
        });
    })
}

let currentImg;

createImage("img/img-1.jpg")
    .then((img) => {
        currentImg = img;
        console.log('Image 1 loaded.');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        console.log('Image 1 is hidden.');
        return createImage("img/img-2.jpg");
    })
    .then((img) => {
        currentImg = img;
        console.log('Image 2 loaded.');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        console.log('Image 2 is hidden.');
    })
    .catch(err => console.log(err));