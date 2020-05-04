$(document).ready(function(){

    // This tab is open by default
    document.getElementById("AboutPage").click();
});


// this function is called when a tab is clicked
function openTab(evt, tabName){

    // Hide all elements with class="tabcontent"
    var tabcontent = document.getElementsByClassName("tabcontent");
    for(var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // Remove the class "active" from all elements with class="tablinks"
    var tablinks = document.getElementsByClassName("tablinks");
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the current tab, and add the class "active" to the tab button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
