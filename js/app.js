/* 
1. Easy Going
    1. Write a for loop that will log the numbers 1 through 20.

*/

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

/* 
2. Get Even
    1. Write a for loop that will log only the even numbers in 0 through 200.
        Hint: Think about the increment expression.
*/

for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* 
3. Excited Kitten
    1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

    2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

        Hint: You will need to use Math.random()
*/

const regOutput = 'Love me, pet me! HSSSSSS!';
const randOutput = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, randOutput[Math.floor(Math.random() * 3)]);
    } else {
        console.log(i, regOutput);
    }
}

/*

Fizz Buzz
NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

Write a javascript application that logs all numbers from 1 - 100 AND:

1. If a number is divisible by 3 log "Fizz" instead of the number.

2. If a number is divisible by 5 log "Buzz" instead of the number.

3. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i, 'Fizz');
    } else if (i % 5 === 0) {
        console.log(i, 'Buzz');
    } else {
        console.log(i);
    }
}

/* 

Getting to Know You
Use the following arrays to answer the questions below (name, age, hometown):

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".

2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()

*/

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Answer #1
kenny.shift();
kenny.unshift('Gameboy');

console.log(kenny);

// Answer #2
jimClark[1] += 1;

console.log(jimClark);

// Answer #3

ryan[2] = 'Gotham City';

console.log(ryan);

// Answer #4

reuben.pop();
reuben.push('Chicago');

console.log(reuben);

// Answer #5

jimHaff.pop();
jimHaff.push('Tokyo', 'Santiago', 'Paris');

console.log(jimHaff);

// Answer #6

jimHaff.splice(2, 1);

console.log(jimHaff);

/* 

Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a for loop to call .toUpperCase() on each of them and print out the result.

3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

*/

const ninjaTurtles = [
    'Donatello',
    'Leonardo',
    'Raphael',
    'Michaelangelo'
];

for (let i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}

for (let i = 0; i < ninjaTurtles.length; i++) {
    const newArr = ninjaTurtles[i].split('');
    for (let j = 0; j < newArr.length; j++) {
        if (j % 2 === 0) {
            newArr[j] = newArr[j].toUpperCase();
        } else {
            newArr[j] = newArr[j].toLowerCase();
        }
    }
    ninjaTurtles[i] = newArr.join('');
}

console.log(ninjaTurtles);

/* 

Return of the Closets

Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

Dress 'em Up
1. Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!


*/

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Alien Attire
  const kristynsShoe = kristynsCloset.shift();

  thomsCloset[2].push(kristynsShoe);

  console.log(thomsCloset[2]);

//   Dress 'em up

const kOutfit1 = [
    kristynsCloset[0],
    kristynsCloset[1],
    kristynsCloset[2],
];
const kOutfit2 = [
    kristynsCloset[1],
    kristynsCloset[2],
    kristynsCloset[3],
];
const kOutfit3 = [
    kristynsCloset[2],
    kristynsCloset[3],
    kristynsCloset[4],
];

const tOutfit1 = [
    thomsCloset[0][0],
    thomsCloset[1][0],
    thomsCloset[2][0],
];
const tOutfit2 = [
    thomsCloset[0][1],
    thomsCloset[1][1],
    thomsCloset[2][1],
];
const tOutfit3 = [
    thomsCloset[0][2],
    thomsCloset[1][2],
    thomsCloset[2][2],
];

function outfits(arr) {
    console.log(`This outfit has a ${arr[0]}, a ${arr[1]}, and a ${arr[2]} for Thom or Kristyn to wear because they share.`);
}

outfits(tOutfit2);

/* 

Dirty Laundry
Continue looking at the closet arrays:

1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.


*/

for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

/* 

Inventory

2. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.


*/

console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);

/* 

Multiples of 3 and 5

Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

👏 You just solved Project Euler problem 1! 👏

Tip: Get used to thinking about how to solve problems now. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems

*/

let sum = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    } 
}

console.log(sum);