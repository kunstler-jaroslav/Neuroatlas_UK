let texts = [
    "<h1></h1>", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "", 
    
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae reiciendis aperiam, corrupti mollitia consectetur, error atque molestiae delectus sit numquam perferendis aspernatur? Nulla quis sapiente sequi, voluptates maiores beatae?"];

const params = new URLSearchParams(window.location.search);



function load()
{
    let chapter = params.get('chapter');
    loadText(parseInt(chapter));
}


function loadText(id)
{
    let textcode = texts[id];
    var txtElement = document.getElementById("text");
    console.log(txtElement);
    txtElement.innerHTML = textcode;
    let currentId = "chapter".concat((id).toString());
    var element = document.getElementById(currentId);
    element.className = "chapteractive";
}




