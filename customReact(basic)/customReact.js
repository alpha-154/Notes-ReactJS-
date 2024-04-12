function customRender(reactElement , container){
  /*  this isn't the optimized method since setAttribute() method should be within loop */
    //creating a element from using `reactElement` function
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    
    //appending `reactElement` to the `container` to render it to 
    //the screen using `root` id
    //container.appendChild(domElement)
 /*   end   */
   
 /* more optimized way  */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(let prop in reactElement.props){
     //to check whether anyone put any children withing the props as a key
      if(prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop])
     }
   container.appendChild(domElement)
 /*    end   */

}

//whenever a element get inject in the react , this how react sees it or 
//more specifically this how react build a tree with it
const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


//simulating the `index.jsx` file tasks
const mainContainer =  document.querySelector("#root")

//rendering the `reactElement` function in the `root` id
customRender(reactElement , mainContainer)



