// business logic
var ticketArray = [];
var Ticket = function(movieName, age, time, price) {
  this.movieName = movieName;
  this.age = age;
  this.time = time;
  this.price = price;
}

var priceCalculation = function(inputtedMovie, inputtedAge, inputtedTime, inputtedType) {
  var price = 10;
  if (inputtedMovie === "Ocean's Eleven") {
    price -= 2;
  }
  if (inputtedMovie === "The Incredibles 2") {
    price += 2;
  }

  if (inputtedAge === "60+" || inputtedAge === "Under 13") {
    price -= 2;
  }

  if (inputtedTime === "11:00" || inputtedTime === "3:00") {
    price -= 2;
  }

  if (inputtedType === "3D") {
    price += 5;
  }

  if (inputtedType === "IMAX") {
    price += 7;
  }

return price;

}
// user logic
$(document).ready(function() {
  var total = 0;
  $('button#buy').click(function() {
    var inputtedMovie = $("#movie").val();
    var inputtedAge = $("#age").val();
    var inputtedTime = $("#time").val();
    var inputtedType = $("input:radio[name=type]:checked").val();
    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime, priceCalculation(inputtedMovie, inputtedAge, inputtedTime, inputtedType));
    ticketArray.push(newTicket);
    $("#output").text("");
  for (var i = 0; i < ticketArray.length; i++) {
    $("#output").append("Movie: " + ticketArray[i].movieName + "<br>Time Showing: " + ticketArray[i].time + "</hr>");
    total += ticketArray[i].price;
  }
    $("#output").append("Total Price: " + total);

    // select element input grab - for later *
  });
});
