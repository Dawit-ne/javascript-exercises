const repeatString = function(str, num) {
    if(num<0){
        return 'ERROR';
    }
    var output = '';
for(let i=0; i<num; i++){
    
    if (num>0){
        output = output+ str;
    }
   
}
if(num=0){
    output = '';
}
return output;
};

// Do not edit below this line
module.exports = repeatString;
