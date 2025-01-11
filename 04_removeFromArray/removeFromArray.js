const removeFromArray = function(removeFromArray, ...args) {
    return removeFromArray.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
