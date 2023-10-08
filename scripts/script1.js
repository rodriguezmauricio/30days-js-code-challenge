console.warn("Média de N números");
function mediaN(...nums) {
    return (
        nums.reduce((total, nums) => {
            return total + nums;
        }, 0) / nums.length
    );
}

console.log(mediaN(10, 7, 9, 9));
