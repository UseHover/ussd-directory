// 
// Handling the menu toggle
// 

// function launchModalOnLoad()
// {
//     setTimeout(() =>
//     {
//         UIkit.modal("#modal-example").show();
//     }, 2000)
// }

// launchModalOnLoad();

// document.getElementById("myAnchor").addEventListener("click", function (event)
// {
//     event.preventDefault()
// });


// function myFunction()
// {
// document.getElementById("countrySearch").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
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
    document.getElementById("ussdList").classList.add("gridstyle");
    document.getElementById("ussdList").classList.remove("liststyle");
    document.getElementById("btn1").classList.add("active");
    document.getElementById("btn2").classList.remove("active");
}

function listDisplay()
{
    document.getElementById("ussdList").classList.add("liststyle");
    document.getElementById("ussdList").classList.remove("gridstyle");
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.add("active");
}

function readingTime()
{
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
}
readingTime();