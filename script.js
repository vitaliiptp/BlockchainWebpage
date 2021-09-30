//links in the navigation with onclick-event
function whichButton(event){       
     
    const logoImg = document.querySelector("#logo-img");
    const home = document.querySelector("#home");
    const defi = document.querySelector('#defi');
    const blockchain = document.querySelector("#blockchain");
    const calculator = document.querySelector("#calculator");
    const contact = document.querySelector("#contact");
          
        switch (event.target){   //with event.target we can check on which element the user clicked/moved
            
            case logoImg:
                return "index.html";
                
            case home:
                return 'index.html';
                                
            case defi:
                return 'defi.html';
                
            case blockchain:
                return 'blockchain.html';
                
            case calculator: 
                return 'calculator.html';
                
            case contact:
                return  'contact.html';
            
             
        }
}

document.body.addEventListener('click', (event) => {       
    if (whichButton(event) != undefined){                   //if the pointer is not outside of the button
        window.location = whichButton(event)}               // check which button was pressed and go to name.html
})



document.body.addEventListener('mouseover',(event) => {       
    if (whichButton(event) != undefined){                 //if the pointer is not outside of the button
        
        event.target.style.backgroundColor ='#485460';   //change the color
         
        setTimeout(() => {event.target.style.backgroundColor = "";}, 500);  //and change the color after a short time back
    }
})