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
        
        let total = 0;
        let negatives = [];
        numberList.forEach(item => {
            if (item) {
                const num = parseInt(item, 10);
                if (num < 0) {
                    negatives.push(num);
                } else {
                    total += num;
                }
            }
        });

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
        }

        return total;
    }
console.log(add(1,2,3,4,5));
console.log(add(-1,-2))
} catch (e) {
    console.error(e.message);
}