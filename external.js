
window.onload = () =>{ 
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 200);  
        const childContainer = document.createElement('div');
        const id =  childContainer.id = `container-${autoID}`;
        const externalStyleSheet = document.createElement('style');
        externalStyleSheet.innerText = `#${id}{background-color:red; padding:1%; margin:10px}`;
        document.body.append(childContainer);
        document.head.appendChild(externalStyleSheet);
    }
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 400) + 200;  
        const childContainer = document.createElement('button');
        const id =  childContainer.id = `btn-${autoID}`;
        childContainer.innerText = "Button";
        const externalStyleSheet = document.createElement('style');
        externalStyleSheet.innerText = `#${id}{background-color:blue; padding:1%; margin:10px}`;
        document.body.append(childContainer);
        document.head.appendChild(externalStyleSheet);
    }
    for(let a = 0; a <= 100; a++){
        let autoID = Math.floor(Math.random() * 600) + 300;  
        const childContainer = document.createElement('input');
        const id =  childContainer.id = `input-${autoID}`;
        childContainer.placeholder = "Enter a text";
        const externalStyleSheet = document.createElement('style');
        externalStyleSheet.innerText = `#${id}{padding:1%; margin:10px}`;
        document.body.append(childContainer);
        document.head.appendChild(externalStyleSheet);
    }
   
}