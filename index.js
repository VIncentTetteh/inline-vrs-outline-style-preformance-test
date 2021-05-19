
window.onload = () =>{ 
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 200);  
        const childContainer = document.createElement('div');
        childContainer.id = `container-${autoID}`;
        childContainer.style.backgroundColor = "red";
        childContainer.style.margin = "10px";
        childContainer.style.padding = "1%";
        document.body.append(childContainer);
       
    }
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 400) + 200;  
        const childContainer = document.createElement('button');
        childContainer.id = `btn-${autoID}`;
        childContainer.innerText = "Button";
        childContainer.style.backgroundColor = "blue";
        childContainer.style.margin = "10px";
        childContainer.style.padding = "1%";
        document.body.append(childContainer);
    }
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 600) + 300;  
        const childContainer = document.createElement('input');
        childContainer.id = `input-${autoID}`;
        childContainer.placeholder = "Enter a text";
        childContainer.style.margin = "10px";
        childContainer.style.padding = "1%";
        document.body.append(childContainer);
    }
   
}