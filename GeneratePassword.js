const passwordBox= document.getElementById("password");
const length=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const specialKey="!@#$%^&*()_+/\|{}[]";

const allCharac= upperCase+lowerCase+number+specialKey;

function createPassword(){

  let password='';
  password += upperCase[Math.floor(Math.random()*upperCase.length)];
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password += number[Math.floor(Math.random()*number.length)];
  password += specialKey[Math.floor(Math.random()*specialKey.length)];

  while(length > password.length){
    password += allCharac[Math.floor(Math.random()*allCharac.length)];
  }
  passwordBox.value = password;
}

function copyToClip(){
  passwordBox.select();
document.execCommand("copy");
}
  