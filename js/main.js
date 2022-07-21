//  Close the dropdown menu if the user clicks outside of it
window.onclick = function (event)
{
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function gridDisplay()
{
    document.getElementById("ulList").classList.add("gridstyle");
    document.getElementById("ulList").classList.remove("liststyle");
    document.getElementById("btn1").classList.add("active");
    document.getElementById("btn2").classList.remove("active");
}

function listDisplay()
{
    document.getElementById("ulList").classList.add("liststyle");
    document.getElementById("ulList").classList.remove("gridstyle");
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.add("active");
}

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function ()
    {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}