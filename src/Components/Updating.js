import React from 'react'

export default function Updating () {
  return (
    <div>
      <h1 className="display-3">Updating</h1>
 
      <h4>
      It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself. Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods.
      <ul><br/>
        <li>
          <h4> 
          <b>componentWillRecieveProps()</b>: It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method.
          </h4>
        </li>
        <li>
          <h4> 
         <b>  shouldComponentUpdate() </b> : It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.
          </h4>
        </li>
        <li>
          <h4> 
         <b>componentWillUpdate() </b>: It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.
          </h4>
        </li>
        <li>
          <h4> 
         <b>render() </b>: It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.
          </h4>
        </li>
      </ul>
      </h4>

      </div>
  )
}
