"use strict";
{
    const addAllNumber = (...num) => {
        return num.reduce((a, b) => a + b);
    };
    console.log(addAllNumber(1, 2, 3, 4));
}
