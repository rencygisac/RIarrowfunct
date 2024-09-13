const formatString = (str) => {
    let str1 = '';  
    for (let i = 0; i < str.length; i++) {
        str1 += i + str[i].toUpperCase();  
    }
    return str1;
};

let userInput = prompt("Enter a string:");
let result = formatString(userInput);

document.write(`Your revised string is ${result}`);st