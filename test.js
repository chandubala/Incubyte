try{
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
        console.log(numberList)
    }
console.log(add(1,2,3,4,5));
} catch (e) {
    console.error(e.message);
}