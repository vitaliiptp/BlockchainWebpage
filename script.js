//links in the navigation with onclick-event
document.body.addEventListener('click', (event)=>{
     
    const logoImg = document.querySelector("#logo-img");
    const home = document.querySelector("#home");
    const defi = document.querySelector('#defi');
    const blockchain = document.querySelector("#blockchain");
    const calculator = document.querySelector("#calculator");
    const contact = document.querySelector("#contact");
          
        switch (event.target){   //with event.target we can check on which element the user clicked
            
            case logoImg:
                window.location = "index.html";
                break;

            case home:
                window.location = 'index.html';
                break;
                
            case defi:
                window.location = 'defi.html';
                break;

            case blockchain:
                window.location = 'blockchain.html';
                break;

            case calculator: 
                window.location = 'calculator.html';
                break;

            case contact:
                window.location = 'contact.html';
                break;
            
        }
    })