var aname = prompt("What animal is the superhero most similar to?", '');
var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.", '');
var age = prompt("How old is the superhero?", '');
const male = /male/i;
const female = /female/i;
const aniname = /\d/;

if ((!aname.match(aniname))&&(aname.length <= 20)&&(!aname.match(/\s/))&&(!age.match(/\D/))&&
  (age.length <= 5)&&(!age[0].match(/0/))&&((gender.match(male))||(gender.match(female))||(gender === ""))) {
  if (gender.match(female)&&(age < 18)) {
    alert(aname + '-' + "girl");
  } else if (gender.match(male)&&(age < 18)){
    alert(aname + '-' + "boy");
  } else if (gender.match(female)&&(age >= 18)){
    alert(aname + '-' + "woman");
  } else if (gender.match(male)&&(age >= 18)){
    alert(aname + '-' + "man");
  } else if ((gender === "")&&(age < 18)){
    alert(aname + '-' + "kid");
  } else if ((gender === "")&&(age >= 18)){
    alert(aname + '-' + "hero");
  }
} else alert("wrong input");


