try{
    function add(...nums) {
        let numbers = nums.toString();
        if (numbers === '') {
            return 0;
        }
    }
console.log(add(1,2,3,4,5));
} catch (e) {
    console.error(e.message);
}