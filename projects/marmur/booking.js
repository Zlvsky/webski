let pelneB = document.getElementById('id')

let pelne = {
  rooms: 50,
  booked: 0,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
var standard = {
  rooms: 120,
  booked: 0,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

function rezerwacjaL() {
  pelne.booked ++;
  e1Rooms.textContent = pelne.checkAvailability();
}
function rezerwacjaP() {
  standard.booked ++;
  e2Rooms.textContent = standard.checkAvailability();
}


var e1Rooms = document.getElementById('pelne-miejsca');
e1Rooms.textContent = pelne.checkAvailability();

var e2Rooms = document.getElementById('standard-miejsca');
e2Rooms.textContent = standard.checkAvailability();

console.log(pelne.booked);
