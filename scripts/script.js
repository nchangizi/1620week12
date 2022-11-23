const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);

function clickHandler ()
{
    alert("You clicked me!");
    // clickMeButton.removeEventListener("click", clickHandler)
}

clickMeButton.addEventListener("click", clickHandler,{once:true});

