const React =()=> {
    const name = "vinoothna";
    const age= 23;
return(
    <>
    <h1 className="hey"> halooo, {name}</h1>
    <p> {`My age is ${age} years old`}</p>
    </>
  
);
};
export const React1=()=>{
  const isLoggedIn = {
    status: false,
  };
  return(<>
  {isLoggedIn?.status ? <h1> Welcome back!</h1>:<h1> plse sign in</h1>}
  </>
  );
};
export const React2=()=>{
    const fruits = ["Apple","Jerry","Grapes"];
    return(
        <>
        <h1> Fruit List</h1>
        {fruits.map((fruit,id)=>(
            <li key={id}>{fruit}</li>
        ))}
        </>
    );
};
export default React;