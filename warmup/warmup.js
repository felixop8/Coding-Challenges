// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example: there are n = 7 socks with colors ar = [1, 2, 1, 2 ,1, 3, 2] There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
    var res = 0;
    // Sorting is key, it allows us to compare items side by side and when a match is found it skip one element and
    // move to the next one.
    ar.sort();
  
    for( let i = 0; i < n; i++ ){
      // if item to compare is equal to the next item increment the counter and increment the index to skip the match.
      if( ar[i] === ar[i+1] ){
          i++;
          res++;
      }
    }
    
    return res;
  }
  
  sockMerchant(7, [1, 2, 3, 4, 3, 3, 1]);
  
  
  
  
  
  // Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
  // During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U , or a downhill, 
  // D step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:
  
  // A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
  // A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
  // Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
  
  // For example, if Gary's path is s =[DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up onto a mountain 2 units high. 
  // Finally, he returns to sea level and ends his hike.
  
  // Function Description
  
  // Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
  
  // countingValleys has the following parameter(s):
  
  // n: the number of steps Gary takes
  // s: a string describing his path
  
  const path = 'DDUUUUDDDU';
  
  function countingValleys(steps, path) {
  
    let valleys = 0;
  
    path.split('').reduce((accumulator, currentValue) => {
      const level = currentValue === 'D' ? accumulator -1 : accumulator + 1
      if (accumulator >= 0 && level < 0) valleys++
      return level;
    }, 0);
  
    return valleys;
  }
  
  
  // Palindrome
  const palindrome = str => {
    if(typeof str !== 'string') throw new Error('The value must be of the type integer');
    lowerCaseValue = str.toLowerCase();
    const reversedValue = lowerCaseValue.split('').reverse().join('');
    return reversedValue === lowerCaseValue ? true : false;
  }
  
  // Fizzbuzz
  // console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
  // logs fizz instead of the number for multiples of 3
  // logs buzz instead of the number for multiples of 5
  // logs fizzbuzz for numbers that are multiples of both 3 and 5
  const fizzbuzz = num => {
    if(typeof num !== 'number') throw new Error('The value must be of the type number');
    for ( i = 1; i <= num; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } else if(i % 3 === 0) {
        console.log('fizz')
      } else if(i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
  
      // OR
  
      console.log(i % 3 === 0 ? i % 5 === 0 ? 'fizzbuzz' : 'fizz' : i % 5 === 0 ? 'buzz' : i )
    }
  }
  
  // write a function that checks if two provided strings are anagrams of each other; 
  // letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:
  const anagram = (word1, word2) => {
    const word1Sorted = word1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const word2Sorted = word2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return word1Sorted === word2Sorted;
  }
  
  
  // write a function that takes a string as argument and returns the number of vowels contained in that string.
  const findVowels = str => {
    const vowels = ['a','e','i','o','u'];
  
    const vowelsInString = str.toLowerCase().split('').filter(character => vowels.includes(character))
    return vowelsInString.length;
  }
  
  // OR
  const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matches.length : 0
  }
  
  
  // Fibonacci
  // Write a function that returns the nth entry in the Fibonacci sequence, 
  // where n is a number you pass in as argument to the function.
  // A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. 
  // For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
  
  const fibonacci = nth => {
    const result = [0, 1];
    for (let i = 0; i < nth - 1; i++) {
      const sum = result[i] + result[i + 1];
      result.push(sum);
    }
    console.log(result);
  
    return result[nth];
  }
  
  // OR Recursive
  
  const fibonacci = num => {
    // if num is either 0 or 1 return num
    if(num < 2) {
      return num
    }
    // recursion here
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
  


// Emma is playing a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
// She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. 
// It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  0 if they are safe or 1 if they must be avoided. 
// For example, c=[0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . 
// She could follow the following two paths: 0 -> 2 -> 4 -> 6  or 0 -> 2 -> 3 -> 4 -> 6 . The first path takes  jumps while the second takes 4.


//Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
  const jumpingOnClouds = arrayOfClouds => {
    let jumps = 0;
    for (let i = 2; i <= arrayOfClouds.length; i += 2) {
      if(arrayOfClouds[i] === 1) i -= 1;
      jumps++;
    } 
    return jumps;
}




// Lilah has a string, s , of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
// For example, if the string s='abcac  and n = 10 , the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

// Function Description
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider


function repeatedString(s, n) {
  const stringLength = s.length;
  const stringOcurrences = (s.match(/a/g) || []).length;
  // All the characters === a? return n;
  if(stringLength === stringOcurrences) return n;

  // Integer is less than string length? get that portion and retun the occurrences
  if (n < stringLength) {
    const portion = s.slice(0, n);
    return (portion.match(/a/g) || []).length;
  }

  // Integer === string length? return the occurences;
  if (n === stringLength) return stringOcurrences;

  // Integer > string length and not all the characters are === a ? Calculate the number of times
  // the same sequence of characters are repetead in n. If remainder, get the portion and get the occurrences
  // then add all of them and return.
  const remainder = n % stringLength;
  let portionOcurrences = 0;
  if (remainder > 0) {
    const portion = s.slice(0, remainder);
    portionOcurrences = (portion.match(/a/g) || []).length
  }
  

  const division = n / stringLength;
  const roundDown = Math.floor(division) * stringOcurrences;

  return roundDown + portionOcurrences;
}

// OR 

function repeatedString(s, n) {
  let c = 0,
      ca = 0,
      r = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c

      if (i < r)
        ++ca
    }
  }

  return ((n - r) / s.length * c) + ca
}