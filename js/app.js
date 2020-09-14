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
        console.log(regOutput);
    } else {
        console.log(randOutput[Math.floor(Math.random() * 3)]);
    }
}