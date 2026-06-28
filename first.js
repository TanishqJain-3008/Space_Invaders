let num = prompt("Enter your marks: ");

if(80 <= num && num <= 100){
    console.log("A");
} else if(70 <= num && num < 80){
    console.log("B");
} else if(60 <= num && num < 70){
    console.log("C");
}else if(50 <= num && num < 60){
    console.log("D");
}else if(0 <= num && num < 50){
    console.log("F");
}