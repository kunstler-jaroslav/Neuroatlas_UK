var numberr = 0;
var scroolspeed = 10;
var height = 4000;
function chnageScroolSpeed(newspeed)
{
    var box = document.getElementById("scrollHeight");
    var newheight = height * newspeed;
    box.style.height = newheight
    height = newheight;
    scroolspeed = scroolspeed * newspeed;
}

function scroll(number)
{
    numberr = number;
    var img = document.getElementById("imageid");
    var txt = document.getElementById("text");
    var num = Math.round(number/scroolspeed)
    var str = num.toString();
    if(num < 336)
    {
        if(str.length == 1)
        str = "00" + str;
            
        else if(str.length == 2)
            str = "0" + str;

        txt.innerHTML = name;
        var name = "data/image" + str + ".png";
        txt.innerHTML = name;
        img.src = name;
    } 
}

function left()
{
    if(numberr > 10)
        scroll(numberr-10)
}

function right()
{
    if(numberr < 3350)
        scroll(numberr+10)
}



    