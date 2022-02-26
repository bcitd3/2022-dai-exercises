//MUST HAVE - CREATE A TEMPLATE TAG
var template_particle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_particle.innerHTML = `
<style>
  .particle {
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 10px;
    position: absolute;
    transition: left 10s, top 10s;
    left:0px;
    top:-25px;
    right: 0px;
    bottom: 0px;
  }
  #decrease{
      background: teal
  }
  #increase{
      background: white
  }
</style>
<div class="particle" id ="increase"></div>
<div class="particle" id ="decrease"></div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheParticle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_particle.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#decrease").onclick = () => this.handleParticleClick("decrease")
        this.shadowRoot.querySelector("#increase").onclick = () => this.handleParticleClick("increase")
        this.game_env="snow"
    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

    changeParticle(type="snow"){
        this.game_env="type"
        if(type === "snow"){ 
            this.shadowRoot.querySelector("#increase").style.cssText= `
            background-color: grey;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText= `
            background-color: white;
            `
        }
        if(type ==="desert"){
            this.shadowRoot.querySelector("#increase").style.cssText= `
            background-color: brown;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText= `
            background-color: yellow;
            `
        }
        if (type ==="valley"){
            this.shadowRoot.querySelector("#increase").style.cssText= `
            background-color: pink;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText= `
            background-color: blue;
            `
        }
        if (type ==="forest"){
            this.shadowRoot.querySelector("#increase").style.cssText= `
            background-color: lightgreen;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText= `
            background-color: green;
            `
        }
        
    }
    handleParticleClick(type="increase"){
        if(type==="increase"){
            document.querySelector(".gamehealth").increaseHealth();
        }

        if(type==="decrease"){
            document.querySelector(".gamehealth").decreaseHealth();
        }
    }

    moveParticles(type="snow"){
        this.game_env="type"
        console.log("move it!");
        if(type==="snow"){
            this.shadowRoot.querySelector("#increase").style.cssText=`
            bottom: 400px;
            top:100vh;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText=`
            bottom: 600px;
            top:200vh;
            `
        }
        if(type==="desert"){
            this.shadowRoot.querySelector("#increase").style.cssText=`
            transition: left 10s, right 10s;
            left:400px;
            right: 200px;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText=`
            left:300px;
            right: 200px;
            `
        }
        if(type==="forest"){
            this.shadowRoot.querySelector("#increase").style.cssText=`
            left: 800px;
            top:100vh;
            `
            this.shadowRoot.querySelector("#decrease").style.cssText=`
            left: 1000px;
            top:100vh;
            `
        }
        if(type==="valley"){
            this.shadowRoot.querySelector("#increase").style.cssText=`
            right: 100px;
            top:100vh;
            
            `
            this.shadowRoot.querySelector("#decrease").style.cssText=`
            right: 100px;
            top:100vh;
            `
        }

    }
    
    resetParticles(){
        // this.shadowRoot.querySelector("#increase").onclick = () => this.getAttribute(".color").style.cssText=``
        
    }
}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-particle", TheParticle)