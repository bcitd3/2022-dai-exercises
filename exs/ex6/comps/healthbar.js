//MUST HAVE - CREATE A TEMPLATE TAG
var template_healthbar = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_healthbar.innerHTML = `
<style>
  .healthbar{
    display: flex;
    position: fixed;
    top: 0px;
    right: 0px;
}
  .healthbar > div{
    background-color: blue;
    width: 25px;
    height: 25px;
    margin: 5px;
  }
</style>

<div class = "healthbar">
  <div></div>
  <div></div>
  <div></div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHealthBar extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        
        //To-do - CREATE THE STATES FOR THE UI HERE!
   
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_healthbar.content.cloneNode(true)); //use the template to make a clone
        this.health = 3; //variable health 
        
     
    
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}
updateHealthUI(){
     if (this.health===3){
            this.shadowRoot.querySelector(".healthbar").innerHTML=`
            <div></div>
            <div></div>
            <div></div>
            `
        }
    if (this.health===2){
            this.shadowRoot.querySelector(".healthbar").innerHTML=`
            <div></div>
            <div></div>
            `
        }
    
    if (this.health===1){
            this.shadowRoot.querySelector(".healthbar").innerHTML=`
            <div></div>
            `
        }
    
    if (this.health===0){
            this.shadowRoot.querySelector(".healthbar").innerHTML=`
            `
        }
    }
    decreaseHealth(){
        this.health = this.health -1;
        this.updateHealthUI();
    }
    increaseHealth(){
        this.health = this.health +1;
        this.updateHealthUI();
    }
    resetHealth(){
        this.shadowRoot.querySelector(".healthbar").innerHTML=`
            <div></div>
            <div></div>
            <div></div>
            `
    }

}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-healthbar", TheHealthBar)