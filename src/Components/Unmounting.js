import React from 'react'

export default function Unmounting  (){
  return (
    <div>
       <h1 className="display-3">Unmounting</h1>

       <h4>
       It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.
      <ul><br/>
        <li>
          <h4> 
          <b>componentWillUnmount() </b>: This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.
          </h4>
        </li>
       
      </ul>
      </h4>

      </div>
  )
}
