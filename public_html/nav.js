
function printNavBar() {
    var navigation = '<a href="index.html" class="nav-bar-item">Home</a>\
                <a href="training.html" class="nav-bar-item">Personal Training</a>\
                <a href="recipes.html" class="nav-bar-item">Recipes!</a>\
                <a href="coaching.html" class="nav-bar-item">Online Coaching & Nutrition</a>\
                <a href="bulking.html" class="nav-bar-item">Bulking</a>\
                <a href="cutting.html" class="nav-bar-item">Cutting</a>';
                
    document.getElementById('nav').innerHTML = navigation;
}

function printFooter() {
    var footer = "<a href='http://www.instagram.com'><i class='fa fa-instagram'></i></a>\
                <a href='http://www.facebook.com'><i class='fa fa-facebook-official'></i></a>\
                <a href='http://www.snapchat.com'><i class='fa fa-snapchat'></i></a>\
                <a href='http://www.pinterest.com'><i class='fa fa-pinterest-p'></i></a>\
                <a href='http://www.linkedin.com'><i class='fa fa-linkedin'></i></a>\
                <br>\
                <a href='/email' target='_blank'>Email Me!</a>";
    document.getElementById("myFooter").innerHTML = footer;

}