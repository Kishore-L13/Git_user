import React,{useState} from "react";
const Searchbar = ()=>{
    const [input,setInput] = useState("")
    return(
        <>
        <input type="Text" onChange={(e)=>e.target.value} />
        <button>Search</button>
        </>
    )
}
export default Searchbar