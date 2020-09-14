let fname = String(prompt("Enter your first name")).toLowerCase();
if (/^[a-z]+$/g.test(fname)){
    fname = fname.charAt(0).toUpperCase() + fname.slice(1);
} else fname = false;
let lname = String(prompt("Enter your last name")).toLowerCase();
if (/^[a-z]+$/g.test(lname)){
    lname = lname.charAt(0).toUpperCase() + lname.slice(1);
} else lname = false;
if (fname == false||lname == false){
    alert("Wrong input")
} else {
    alert("Hello, " + fname + " " + lname);
    console.log("Hello, " + fname + " " + lname);
}