function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
  this.cost;
}

// var movieCosts = {
//   madmax: 8,
//   avenger:
// }

Ticket.prototype.calculateCost = function() {
  this.cost = 0;
  if (this.movie === "madmax" || this.movie === "avengers") {
    this.cost += 8;
  } else {
    this.cost += 10;
  }
  if (this.time === "matinee") {
    return this.cost;
  } else {
    this.cost += 5;
  }
  if (this.age === "adult") {
    this.cost += 5;
  } else if (this.age === "senior") {
    this.cost += 2;
  } else {
    return this.cost;
  }
}

$(function (){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputMovie = $("#movie").val();
    var inputTime = $("#time").val();
    var inputAge = $("#age").val();

    var newTicket = new Ticket(inputMovie, inputTime, inputAge)
    newTicket.calculateCost();
    $(".result").text(newTicket.cost);
    // alert(newTicket.cost);
  })
})
