import { useState } from "react"
import { Card } from "../noteCard/noteCard";


export function InputForm(){
    const [inp,setInp] = useState('');
    const [text,setText] = useState('');

    const [print,setPrint] = useState([]);

    const noteSubmit = (e)=>{
        e.preventDefault();

        if(!(inp==''&&text=='')){
            setPrint([...print,{inp,text}]); 
        }
              

        setInp('');
        setText('');
    }

    const inpWrite = (e)=>{
        setInp(e.target.value);
        
    }

    const textWrite = (e)=>{
        setText(e.target.value);
    }

    return (
        <div className=" d-flex justify-content-center gap-4 w-100  px-4 big-box " style={{height:"60vh"}}>
            <form action="" onSubmit={noteSubmit} className="d-flex flex-column justify-content-evenly h-75 gap-2  f-div-top" style={{width:"40%"}}>
                <input type="text" placeholder="Enter Heading" className="h-25 rounded p-2 bg-dark" value={inp} onChange={inpWrite}/>
                <textarea name="" id="" placeholder="Enter About" className="h-75 rounded p-2 bg-dark" value={text} onChange={textWrite}></textarea>
                <button className="rounded bg-light text-dark">Add Note</button>
            </form>
             <div className="d-flex px-3 gap-3 overflow-auto f-div-dn mw-50" >
            
            {
                print.map((ele,idx)=>{
                    console.log(ele);
                    return <Card key={idx} heading={ele.inp} content={ele.text}/>
                })
            }
             
            </div>
        </div>
    )
}   