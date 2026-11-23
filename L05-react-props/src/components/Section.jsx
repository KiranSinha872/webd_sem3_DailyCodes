import React from 'react'
import Button from './Button';

function Section(props) {
    console.log(props);


  return (
    <div>
      <h1>{props.myage}</h1>
        <Button myage={props.myage}/>
    </div>
  )
}

export default Section