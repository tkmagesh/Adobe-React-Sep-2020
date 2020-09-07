var spinner = (function () {
    var counter = 0;

    function up() {
        return ++counter;
    }

    function down() {
        return --counter;
    }

    return {
        up: up,
        down: down
    }
})();

function spinnerFactory() {
    var counter = 0;

    function up() {
        return ++counter;
    }

    function down() {
        return --counter;
    }

    return {
        up: up,
        down: down
    }
}

var s1 = spinnerFactory();
var s2 = spinnerFactory();