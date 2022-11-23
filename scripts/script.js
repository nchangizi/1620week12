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

function changeText()
{
    if( clickMeButton.textContent === 'Click Me!' )
    {
        clickMeButton.textContent = "clicked";
    }
    else if (clickMeButton.textContent === "clicked")
    {
        clickMeButton.textContent = "Click Me!";
    }
}
clickMeButton.addEventListener("click", changeText);

function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    // console.log(image);
    image.src = "images/263142.png";
    image.width=100;
    image.height=100;
}
clickMeButton.addEventListener("click", updateImage);