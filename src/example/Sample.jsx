import React from 'react'
// nested component example
const Mango=()=>{
    return(
        <h2> Mangoes are sweet</h2>
    )
}
const Grapes=()=>{
    return(
        <h2> Grapes are good for health</h2>
    )
}
function Sample() {
  return (
    <div>Sample
        <Mango/>
        <Grapes/>
    </div>
  )
}

export default Sample 