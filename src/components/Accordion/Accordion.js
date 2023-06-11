import {useState} from "react";
import './Accordion.css'

export default function Accordion({data}){

    // setting active accordion slide index
    const [selected,setSelected] = useState(0)

    return(
        <div className="container">
            <div className="container-slides">
                <ul className="slides">
                    {
                        data.map((item,idx)=>
                            <>
                                <div onClick={()=>setSelected(idx)}  className={selected === idx ? "action active":"action"}>
                                    <span className="title">{item.title}</span>
                                    <span className="index">{idx + 1 < 10 ? `0${idx+1}`:idx+1}</span>
                                </div>
                            <li className={selected === idx ? "slide active":"slide"}>
                                <div className={selected === idx ? "slide__content active":"slide__content"}>
                                    <h3>{item.title}</h3>
                                    <p>{item.date}</p>
                                    <div className={"moreInfo"}>
                                        More information
                                    </div>
                                </div>
                            </li>
                            </>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}