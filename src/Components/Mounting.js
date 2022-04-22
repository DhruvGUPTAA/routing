import React from 'react'

export default function Mounting () {
  return (
    <div className="container"> 
      <h1 className="display-3">Mounting</h1> 

      <h4>
      In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.
      <ul><br/>
        <li>
          <h4> 
          <b>componentWillMount() </b>: This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.
          </h4>
        </li>
        <li>
          <h4> 
         <b>  render()  </b> : This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.
          </h4>
        </li>
        <li>
          <h4> 
         <b> componentWillMount() </b>: This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.
          </h4>
        </li>
      </ul>
      </h4>

      </div>
  )
}
