var readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter your city', function (city){
    if (city === "colombo") {
        console.log("Low Risk Area");
    }
    else if (city === "galle") {
        console.log("Low Risk Area")
    }
    else if (city === "gampaha") {
        console.log("High Risk Area");
    }
    else {
        console.log("City is incorrect");
    }
    console.log("Stay safe");
    readline.close();
});
