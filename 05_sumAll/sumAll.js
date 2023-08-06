const sumAll = function(min, max) {
    sum = 0;
    if(min<0 || max<0){
        return "ERROR";
    }
    if(typeof min !== "number" ||typeof max !== "number"){
        return "ERROR";
    }
    if (min>max){
        var intermediate = max;
        max=min;
        min=intermediate;
    }
    for(let i=min; i<=max;i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
