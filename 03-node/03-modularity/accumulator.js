console.log('accumulator.js loaded');

function accumulatorFactory(defaultResult = 0){
    var result = defaultResult;

    var accumulator = {
        add(x){
            result += x;
        },
        subtract(x){
            result -= x;
        },
        divide(x){
            result /= x;
        },
        multiply(x){
            result *= x;
        },
        getResult(){
            return result;
        }
    };
    return accumulator;
}

module.exports = accumulatorFactory;