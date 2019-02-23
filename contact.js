var chrisAge = document.getElementById('bg-year');
var chrisPhone = document.getElementById('bg-phone');
var chrisMail = document.getElementById('bg-mail');
function Contact(age, phone, mail) {
  this.age = age;
  this.phone = phone;
  this.mail = mail;
}

var chris = new Contact('17', '505709535', 'zlvsky@icloud.com');

var details = 'My age is: ' + chris.age;
var email =  chris.mail;

chrisMail.textContent = email;
