




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    let taxRate = 0.1;
    let taxvalue = amount * taxRate;
    return taxvalue;
}
calculateTax(100);
console.log(calculateTax(100));

function convertToUpperCase(text) {
    return text.toUpperCase();
}
convertToUpperCase("hello");
console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2) {
    
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximum(30,90));

function isPalindrome(word) {
    let anyword = word.toLowerCase();
    let reversedWord = anyword.split('').reverse().join('');
    return anyword === reversedWord;
}
isPalindrome("Racecar");
console.log(isPalindrome("Racecar"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}
calculateDiscountedPrice(100, 20);
console.log(calculateDiscountedPrice(100, 20));




