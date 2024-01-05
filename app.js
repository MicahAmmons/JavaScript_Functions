console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

// Exercise 2 Section
function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

function triangleType(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        return "Invalid triangle: All sides must have positive lengths.";
    } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle: The sum of any two sides must be greater than the length of the third side.";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle: All sides are equal.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle: Only two sides are equal.";
    } else {
        return "Scalene triangle: All sides are different.";
    }
}