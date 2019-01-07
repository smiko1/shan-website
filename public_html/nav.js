
function printNavBar() {
    var navigation = '<a href="index.html" class="nav-bar-item">Home</a>\
                <a href="training.html" class="nav-bar-item">Personal Training</a>\
                <a href="recipes.html" class="nav-bar-item">Recipes!</a>\
                <a href="coaching.html" class="nav-bar-item">Online Coaching</a>';
    document.getElementById('nav').innerHTML = navigation;
}

function printFooter() {
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css', function ()
    {
        document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
	+ " rights reserved.</p>"
	+ "<p id='credits'>Layout by You</p>"
	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";
    });
}