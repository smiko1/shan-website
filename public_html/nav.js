
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
	"<a href='http://www.instagram.com'><i class='fa fa-instagram'></i></a>\
                <a href='http://www.facebook.com'><i class='fa fa-facebook-official'></i></a>\
                <a href='http://www.snapchat.com'><i class='fa fa-snapchat'></i></a>\
                <a href='http://www.pinterest.com'><i class='fa fa-pinterest-p'></i></a>\
                <a href='http://www.linkedin.com'><i class='fa fa-linkedin'></i></a>\
                <br>\
                <a href='/email' target='_blank'>Email Me!</a>";
    });
}