let age = 20;
let hasID = true;
let isMember = false;

console.log(age >= 18 && hasID); 

console.log(hasID || isMember);      

console.log(!isMember);              

if ((age >= 18 && hasID) || isMember) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


