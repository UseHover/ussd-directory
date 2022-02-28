// 
// Handling the menu toggle
// 

function launchModalOnLoad()
{
    setTimeout(() =>
    {
        UIkit.modal("#modal-example").show();
    }, 2000)
}

launchModalOnLoad();

document.getElementById("myAnchor").addEventListener("click", function (event)
{
    event.preventDefault()
});




function readingTime()
{
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
}
readingTime();