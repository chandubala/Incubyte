try{
console.log(add(1,2,3,4,5));
console.log(add(-1,-2))
} catch (e) {
    console.error(e.message);
}

function add(...nums) {
    let numbers = nums.toString();
    if (numbers === '') {
        return 0;
    }

    let delimiter = /,|\n/;
    let numbersString = numbers;

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex).replace(/[\[\]]/g, ''), 'g');
        numbersString = numbers.substring(delimiterEndIndex + 1);
    }

    const numberList = numbersString.split(delimiter);
    
    let negatives = [];
    const sum = numberList.reduce((acc, num) => {
        const n = parseInt(num, 10);
        if (isNaN(n)) return acc;
        if (n < 0) negatives.push(n);
        return acc + n;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }

    return sum;
}

module.exports = {
    add
}