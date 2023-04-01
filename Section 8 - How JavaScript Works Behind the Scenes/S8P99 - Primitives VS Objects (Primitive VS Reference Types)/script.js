// oldAge is set to age when age is 30, so oldAge is 30, but age changes to 31.  Both age and oldAge are primitive types.  
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Here, I set the friend object equal to the me object, if I change a property (in this case, age) in friend, it will change in me as well.  
const me = {
    name: 'Jonas',
    age: 30
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);