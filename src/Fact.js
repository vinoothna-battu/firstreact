import React ,{useState,useEffect}from 'react'

function Fact() {
    let [fact,setFact]=useState('')
    const fetchFacts=()=>{
        fetch('https://catfact.ninja/fact').then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            setFact(data.fact);
        })
    }
    useEffect(()=>{
fetchFacts();
    },[])
  return (
    <div className="area">
    <h5>{fact}

    </h5>
    <button> 
    <span onClick={fetchFacts}> Show more</span>
    </button>
    
    </div>
  )
}

export default Fact