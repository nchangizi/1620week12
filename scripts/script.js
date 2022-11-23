const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);

function clickHandler ()
{
    alert("You clicked me!");
    // clickMeButton.removeEventListener("click", clickHandler)
}

clickMeButton.addEventListener("click", clickHandler,{once:true});

function changeBGPink()
{
    // document.body.style.backgroundColor = "pink";
    
    document.body.classList.add("pink-bg");
}
clickMeButton.addEventListener("click", changeBGPink);