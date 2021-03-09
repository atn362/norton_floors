var time;
var date;
var update = function () {
    date = moment()
    time.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
$(document).ready(function(){
    time = $('#a1');
    update();
    setInterval(update, 1000);
});

// var nameInput = document.getElementById('name');

// document.querySelector('input.input-group').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(nameInput.value);    
// });

var firstName = "Alex";
localStorage.setItem('titles', firstName);


