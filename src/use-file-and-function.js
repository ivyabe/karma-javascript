function testSuffix(str, suffix) {
    if (str.indexOf(suffix, str.length - suffix.length) !== -1) {
        return true;
    } else {
        return false;
    }
};

function isMatching(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
};

callOtherFunction = function(str1, str2) {
    if (testSuffix(str1, str2) === true) {
        isMatching(str1, str2);
    } else {
        return;
    }
};

funcWithLoop = function() {
    var color = ["White", "Black", "Gray", "Yellow"];
    for (var i = 0; i < color.length; i++) {
        console.log(color[i]);
    }
};