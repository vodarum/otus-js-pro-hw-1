function sum(val) {
    if (typeof val === "undefined") {
        return 0;
    }

    return function fn(newVal) {
        if (typeof newVal === "undefined") {
            return val;
        }

        val += newVal;
        return fn;
    }
}