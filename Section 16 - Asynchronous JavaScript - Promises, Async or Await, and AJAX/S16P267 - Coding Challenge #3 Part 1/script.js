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

const loadNPause = async function() {
    try {
        const img1 = await createImage('img/img-1.jpg');
        console.log("Image 1 loaded.");
        await wait(2);
        img1.style.display = 'none';
        console.log('Image 1 is hidden.');
        const img2 = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded.');
        await wait(2);
        img2.style.display = 'none';
        console.log('Image 2 is hidden.');
    }
    catch(err) {
        console.log(err);
    }
}

loadNPause();