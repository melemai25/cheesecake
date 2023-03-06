//Alexander Melemai
$(document).ready(function () {

  //dropdown
  var dpDn = $('.dropdown'),
    button1 = dpDn.find($('.dropbtn')),
    list = dpDn.find($('.dropdown-content').children());

  //on click sets text of dropdown's button to value of button selected in dropdown (if that makes sense)
  $(list).on('click', function (e) {
    var btn = e.target;
    button1.text(btn.text).val(btn.text);

    // req selected month from server
    $.post("http://localhost:3000/orders", { month: btn.text }, function(data) {
      try {
        // Parse the JSON string into a JavaScript object
        console.log("data:", data);
        var orders = JSON.parse(data);

        // Initialize the topping counts
        var plainCount = 0;
        var cherryCount = 0;
        var chocolateCount = 0;

        // Loop through the orders and count the number of occurrences of each topping
        orders.data.forEach(function(order) {
          if (order.topping === 'plain') {
            plainCount += order.quantity;
          } else if (order.topping === 'cherry') {
            cherryCount += order.quantity;
          } else if (order.topping === 'chocolate') {
            chocolateCount += order.quantity;
          }
        });

        // Append the topping counts to the list (anylist, but my webpage only has one)
        $("ul").empty();
        $("ul").append("<li>Plain: " + plainCount + "</li>");
        $("ul").append("<li>Cherry: " + cherryCount + "</li>");
        $("ul").append("<li>Chocolate: " + chocolateCount + "</li>");
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    });
  });

});
