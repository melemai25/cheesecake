eventHandler = function (event) {
	var text = document.getElementById("message").value;
	var thankYou = document.getElementById("thankYou");
	var myForm = document.getElementById("myForm");
	if (text.includes("vegan")) {//if vegan alert
		alert("Our cheesecakes have dairy.");
	}
	else {//else use form data in p string
		$("#myForm").hide();
		var msg = document.getElementById('message').value;
		var amount = document.getElementById('quantities').value;
		var flavor = document.querySelector('input[name="topping"]:checked')?.value;
		$('#orderSum').html("Amount:" + amount + "<br>" + "Flavor:" + flavor + "<br>" + "Notes:" + msg);
		$("#thankYou").show();
	}
}
$(function () {
	$("#myForm").submit(eventHandler);
});