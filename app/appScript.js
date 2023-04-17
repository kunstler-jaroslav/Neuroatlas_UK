
let zeroNames = ["One", "Caldatus","Three", "Opticus",  "Ventriculus Lateralis", "Test", "One", "Caldatus","Three", "Opticus",  "Ventriculus Lateralis", "Test", "One", "Caldatus","Three", "Opticus",  "Ventriculus Lateralis", "Test", "One", "Caldatus","Three", "Opticus",  "Ventriculus Lateralis", "Test"];
let zeroTexts = ["<h3>Header</h3> Lorem ipsum random text", "<h1>Random txt</h1>", "<h1>Random txt</h1><img src='../white.png'>", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
let zeroLinks = ["data/ventriculuslateralis.png", "data/nucleuscaldatus.png", "data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/tractusopticus.png","data/putamen.png", "data/nucleuscaldatus.png", "data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/ventriculuslateralis.png", "data/putamen.png", "data/nucleuscaldatus.png", "data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/tractusopticus.png","data/putamen.png", "data/nucleuscaldatus.png", "data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/ventriculuslateralis.png"];

let oneNames = ["Capsula interna", "Nucleus Caldatus","Putamen", "Tractus Opticus",  "Ventriculus Lateralis", "Test"];
let oneTexts = ["0", "0", "0", "0", "0", "0"];
let oneLinks = ["data/putamen.png", "data/nucleuscaldatus.png", "data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/tractusopticus.png"];

let twoNames = ["1", "Num","PTMN", "o",  "Ventriculus", "TEST"];
let twoTexts = ["0", "0", "0", "0", "0", "0"];
let twoLinks = ["data/putamen.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/tractusopticus.png", "data/ventriculuslateralis.png", "data/tractusopticus.png"];

let NameData = [zeroNames, oneNames, twoNames];
let TextData = [zeroTexts, oneTexts ,twoTexts];
let LinksData = [zeroLinks, oneLinks ,twoLinks];

let arrNames = twoNames;
let arrTexts = twoTexts;
let arrLinks = twoLinks;

let numberOnNum = 0;
let buttonOn = "btn0";
let numberOn = "number0";
let numberOfCuts = 0;

// start function (called on open)
function startup()
{
    for(let Names in NameData)
        numberOfCuts = numberOfCuts + 1;
    for(let i = numberOfCuts; i <= 30; ++i)
    {
        let currentId = "number".concat((i).toString());
        element = document.getElementById(currentId);
        element.className = "cutNumberButtonInvissible";
    }
    btnClick(0);
}

// reacts to number click
function btnClick(number)
{
    
    arrNames = NameData[number];
    arrTexts = TextData[number];
    arrLinks = LinksData[number];
    load();

    var element = document.getElementById(numberOn);
    element.className = "cutNumberButton";
    
    numberOn = "number".concat((number).toString());
    element = document.getElementById(numberOn);
    element.className = "cutNumberButtonOn";
    numberOnNum = number;

    show(0);
}

// loads data of the cut to pick area
function load()
{
    let count = 0;
    for(let name in arrNames)
    {
        let currentId = "btn".concat((count).toString());
        var element = document.getElementById(currentId);
        element.textContent = arrNames[count];
        if(currentId == "btn0")
        {
            element.className = "showButtonOn";
            buttonOn = "btn0";
        }
        else
            element.className = "showButton";
        count = count + 1;
    }
    while(count <= 30)
    {
        let currentId = "btn".concat((count).toString());
        var element = document.getElementById(currentId);
        element.className = "showButtonInvissible";
        count = count + 1;
    }
}

// changes image source on click
function show(id)
{
    var element = document.getElementById(buttonOn);
    element.className = "showButton";
    buttonOn = "btn".concat((id).toString());
    var element = document.getElementById(buttonOn);
    element.className = "showButtonOn";
    var element = document.getElementById("imageid");
    element.src = arrLinks[id];
    loadText(id);
}

// splits the text from array code form and displays it
function loadText(id)
{
    let textcode = arrTexts[id];
    var element = document.getElementById("text");
    element.innerHTML = textcode;
}

// moves to another number according to arrow clicked
function arrowClick(arrow)
{
    if(arrow == 0)
    {
        if(numberOnNum > 0)
        {
            btnClick(numberOnNum - 1);
        }
    }
    else
    {
        if((numberOnNum + 1) < NameData.length)
        {
            btnClick(numberOnNum + 1);
        }
    }
}