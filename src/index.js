// // function checkGender(){
//     let user=prompt("what is your gender?");
//     user=user.toLowerCase();
//     if (user == "male"){
//         alert(you are a ${user}!🧔‍♂);
//     }
// else if(user=="female"){
//     alert(you are a ${user}!👩‍🦱);
// }
// else{
//     alert(invalid input,refresh and try again);
// }

function checkGender() { 
    let user = prompt("What is your gender?"); 
    user = user.toLowerCase(); if (user == "male") { 
        alert(`You are a ${user}! 🧔‍♂`); 
} else if (user == "female") {
     alert(`You are a ${user}! 👩‍🦱`); 
} else { 
    alert("Invalid input, refresh and try again."); 

} } // Call the function to prompt the user 
checkGender();