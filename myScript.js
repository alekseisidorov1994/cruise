(function (){
    mainFUNCTION();

    async function fetchJSON(){
        const requiest = await fetch('./fakeData.json')
        return requiest.json()
    }
    
    async function mainFUNCTION(){
        const data = await fetchJSON();
        const backend = new MyBackend();
            backend.setData(data.cards)
        const templateComponent = new MyComponent();
        const template  = document.querySelector('.templateCard')
            templateComponent.getTemplateComponent(template)
            templateComponent.getElementsTemplateByAttributeName('data-name')
            templateComponent.changeElementsForDataBind()
    }
  



})()

class MyBackend{
    constructor(state = []){
        this.state = state
    }
    getData(){
        return this.state;
    }
    setData(value){
        this.state = value
    }
    getElementById(id){
        return this.getData().filter(element => element.id === id)
    }
    removeElementById(id){
        this.getData().splice(id,1)
    }
    addElement(element){
        if(Array.isArray(element) && element.length){
            this.state.push(element)
        }
    }
}

class MyComponent{
    constructor(){
        this.template = null;
        this.elements = null;
    }
    getTemplateComponent(templateComponent){
        this.template = templateComponent.content
        
    }
    getElementsTemplateByAttributeName(attribute){
        this.elements = this.template.querySelectorAll(`[${attribute}]`)
    }
    changeElementsForDataBind(){
        console.log(this.elements);
    }
    
}

class MyRouting{

}