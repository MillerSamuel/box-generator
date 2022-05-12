import React,{useState} from "react";

const Form=()=>{
    let[color,setColor]=useState("")
    let[width,setWidth]=useState(20)
    let[height,setHeight]=useState(20)
    let[boxList,setBoxList]=useState([])

    const submitBox=(e)=>{
        e.preventDefault();
        let box={color,width,height}
        setBoxList([...boxList,box])
    }

    return(
        <>
            <form onSubmit={submitBox}>
                <label htmlFor="colorInput">Color:</label>
                <input onChange={(e)=>(setColor(e.target.value))} className="m-2" type="text" name="colorInput" /> 
                <label htmlFor="widthInput">Width(px):</label>
                <input onChange={(e)=>(setWidth(e.target.value))} className="m-2" type="number" name="widthInput" /> 
                <label htmlFor="heightInput">Height(px):</label>
                <input onChange={(e)=>(setHeight(e.target.value))} className="m-2" type="number" name="heightInput" /> 
                <input  type="submit" value="Add" />
            </form>
            <hr />
            {boxList.map((box,i)=>{
                return(
                    <div style={{backgroundColor: box.color, width:box.width+"px",height:box.height+"px",margin:20}}></div>
                )
            })}
        </>
    )
}

export default Form