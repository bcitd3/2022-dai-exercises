//MUST HAVE - CREATE A TEMPLATE TAG
var template_menu = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_menu.innerHTML = `
    <style>
      .menu{
        color: white;
        background-color: grey;
        border-radius: 2px;
        display: inline-flex;
        padding: 2px;
      }
    </style>

<div class='menu'>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class GameMenu extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_menu.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".menu").innerText=this.getAttribute("text");
        }

        if(this.getAttribute("text")==="start"){
            this.shadowRoot.querySelector(".menu").onclick = () => this.startGame()

        } else{
            this.shadowRoot.querySelector(".menu").onclick = () => {
                document.querySelector("#gamebg").changeBG(`./imgs/${this.getAttribute("text")}.svg`);
                document.querySelector(".color").changeParticle(this.getAttribute("text"));   
                document.querySelector(".gamehealth").resetHealth();
                document.querySelector(".color").moveParticles(this.getAttribute("text"));  
            } 
        }
    }  
    startGame(){
        document.querySelector(".color").moveParticles();
    }
}
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    

//MUST HAVE - define the tag for the custom elements
customElements.define("game-menu", GameMenu)


