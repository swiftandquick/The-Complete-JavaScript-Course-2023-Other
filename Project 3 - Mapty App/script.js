'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Declare map and mapEvent as a global variable, which means its value can change.  
let map, mapEvent;


class Workout {

    // date represents when the object is created.  
    date = new Date();

    // Normally, id is generated using a package, but here, I just set it to last 10 characters of current date.  
    id = (Date.now() + '').slice(-10);

    // Add a property clicks for Workout-type objects.  
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    // setDescriptions() sets the object's description method, which includes the type, and the date (month and day) the object is created.  
    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    // Increment clicks by 1 every time click() is invoked.  
    click() {
        this.clicks++;
    }

}


// Running is a subclass of Workout.  
class Running extends Workout {

    type = 'running';

    // When constructor is invoked, use the current object to call calcPace().  
    // When the constructor is invoked, invoke the _setDescription() method with the current method.  
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.type = 'running';
        this.calcPace();
        this._setDescription();
    }

    // Get the pace in min / km.  
    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }

}


// Cycling is a subclass of Workout.  
class Cycling extends Workout {

    type = 'cycling';

    // When constructor is invoked, use the current object to call calcSpeed().  
    // When the constructor is invoked, invoke the _setDescription() method with the current method.  
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.type = 'cycling';
        this.calcSpeed();
        this._setDescription();
    }


    // Get the pace in km / hr.  
    calcSpeed() {
        this.speed = this.distance / this.duration;
        return this.speed;
    }

}


class App {

    // #map and #mapEvent are private fields which are only accessible by instances of the App class.
    // Initialize #workouts as a private field and empty array.  
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    // Use the current object to invoke _getPosition().  
    // Use the current object to invoke _getLocalStorage() to get data from local storage.  
    // For form event:  
    // Invoke _newWorkout() using the current object.  
    // For inputType event:      
    // When the value of inputType drop list is changed, invoke _toggleElevationField().  
    // Add an event listener to containerWorkouts element, and invoke the moveToPopup() method on that element if clicked.  
    constructor() {
        this._getPosition();
        this._getLocalStorage();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }

    // If failed to get the position, prompt an alert.  
    // If I get the position, invoke _loadMap().  
    _getPosition() {
        if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
            this._loadMap.bind(this),
            function () {
                alert('Could not get your position');
            }
        )
    }

    // Get the latitude and longitude from position.  
    // <div> element has the id of map, so the map() method will display on the element with the id 'map'.  
    // Use setView() method to set the views with the coordinates (latitude and longitude values).  
    // Use marker() method to place the market on the map based on coordinates (latitude and longitude values).  
    // map is an object that an event can fire on once action performed upon it.  
    // Set the private field #map to the retrieved object via map() method.  
    // Click on the map element will return an event object (mapEvent2), mapEvent contains properties such as latlng, which contains coordinates.  
    // For each workout element in the #workouts array, display marker on the map via _renderWorkoutMarker(). 
    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        const coords = [ latitude, longitude ];
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        L.marker(coords).addTo(this.#map);
        this.#map.on('click', this._showForm.bind(this));
        this.#workouts.forEach(workout => {
            this._renderWorkoutMarker(workout);
        });
    }

    // Set private field #mapEvent to mapEvent2, which is the event object returned by clicking on the map.  
    // Reveal the form element as 'hidden' class is removed.  
    _showForm(mapEvent2) {
        this.#mapEvent = mapEvent2;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    // Hide form and clear the input fields.  
    _hideForm() {
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.classList.add('hidden');
        setTimeout(() => form.getElementsByClassName.display = 'grid', 1000);
    }

    // Toggle whether form__row that contains inputElevation or inputCadence should be hidden.  
    // Initially, type is Running and form__row containing inputElevation is hidden via class 'form__row--hidden'.  
    // When the value of the drop list is changed to Cycling, form__row containing inputElevation will have its 'form__row--hidden' class removed, 
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    // Use preventDefault() to stop the default behavior on submitting the form.  
    // Get data from form (type, distance, duration, etc.).  
    // Use validInputs and allPositive functions to check if data is valid, input fields have to be numbers and they have to be positive.   
    // Check the value of inputType to get the type of object we want to create.  
    // If workout is Running, create Running object.  
    // If Workout is Cycling, create Cycling object. 
    // Add new object to the workout array.  
    // When the form is submitted via enter key, the marker will pop up via renderWorkoutMarker() method.  
    // Render workout on list.  
    // Hide the form via _hideForm() method.  
    // Set local storage for all Workout-type objects with _setLocalStorage() method.  
    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(input => Number(isFinite(input)));
        const allPositive = (...inputs) => inputs.every(input => input > 0);
        e.preventDefault();
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = Number(inputDuration.value);
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        if(type === 'running') {
            const cadence = Number(inputCadence.value);
            if(!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) {
                alert('Input have to be a positive number!');
                return;
            }
            else {
                workout = new Running([lat, lng], distance, duration, cadence);
            }
        }
        if(type === 'cycling') {
            const elevation = Number(inputElevation.value);
            if(!validInputs(distance, duration, elevation) || !allPositive(distance, duration, elevation)) {
                alert('Input have to be a positive number!');
                return;
            }
            else {
                workout = new Cycling([lat, lng], distance, duration, elevation);
            }
        }
        this.#workouts.push(workout);
        this._renderWorkoutMarker(workout);
        this._renderWorkout(workout);
        this._hideForm();
        this._setLocalStorage();
    }

    // Add a marker via marker() method base on workout coords value.  
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWith: 250, 
                minWidth: 100, 
                autoClose: false, 
                closeOnClick: false, 
                className: `${workout.type}-popup`
            }))
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
            .openPopup();
    }

    // html is a string represents the codes that should be generated when the form is submitted.  
    // Insert the html value as an html element right after the form element.   
    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>`;
        if(workout.type === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>`;
        }
        if(workout.type === 'cycling') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>`;
        }
        form.insertAdjacentHTML('afterend', html);
    }

    // Click on the workout element on the container will zoom to the workout element on the map.  
    // Get the workout element that I clicked on.  
    // If workoutEl is not undefined, find the element by its id in the #workouts array.  
    // Increment clicks property of the object by 1.  
    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        if(!workoutEl) { 
            return;
        }
        else {
            const workout = this.#workouts.find(workout => workout.id === workoutEl.dataset.id);
            this.#map.setView(workout.coords, this.#mapZoomLevel, {
                animate: true, 
                pan: {
                    duration: 1
                }
            });
            workout.click();
        }
    }

    // Set all the elements in #workouts array as workouts in the localStorage.  
    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    // Get the items from localStorage using the key, which is 'workout'.  
    // Set the #workouts array to data (retrieved item from localStorage).  
    // For each workout element in the #workouts array, render a workout display via _renderWorkout().  
    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));
        if(!data) {
            return;
        }
        this.#workouts = data;
        this.#workouts.forEach(workout => {
            this._renderWorkout(workout);
        })
    }

    // reset() is a method can be called in the browser console via app.reset().  
    // Remove the 'workouts' item from the storage and reload the page.  
    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }

}

// Create a new object using App class, and the constructor will use the object to invoke _getPosition() to start the app.  
const app = new App();