function memoize(fn){
    var results = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof results[key] === 'undefined')
            results[key] = fn.apply(this, arguments);
        return results[key];
    }
}

//usage :

var add = memoize(function (x, y) {
    console.log('add function is invoked');
    return x + y;
})

add(10,20)
add(100, 20)
add(10, 200)
add(100, 200)

//try the above function calls again