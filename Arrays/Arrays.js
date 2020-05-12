// Given a 6 x 6 2D array, calculate the hourglass sum for every hourglass in the array, then print the maximum hourglass sum.
// Hourglass example:
// a b c
//   d
// e f g


const twoDimensialArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function testing(twoD) {
    // Since we know X and Y limit is 3.
    const maxHourGlassY = 3;
    const maxHourGlassX = 3;
    let totalSum = -Infinity; // It cannot be 0 since the result can be a negative number.
    

    for (let y = 0; y <= maxHourGlassY; y++) {
      for (let x = 0; x <= maxHourGlassX; x++) {
        let maxHourGlassSum = 0;
        // Get top
        maxHourGlassSum += twoDimensialArray[y][x] + twoDimensialArray[y][x + 1] + twoDimensialArray[y][x + 2];
        // Get center
        maxHourGlassSum += twoDimensialArray[y + 1][x + 1];
        // Get bottom
        maxHourGlassSum += twoDimensialArray[y + 2][x] + twoDimensialArray[y + 2][x + 1] + twoDimensialArray[y + 2][x + 2];
        
        // Not save the value, just compare and assign highest sum.
        if(totalSum < maxHourGlassSum) {
            totalSum = maxHourGlassSum
        }
      }
    }
    return totalSum;
}

testing(twoDimensialArray);
