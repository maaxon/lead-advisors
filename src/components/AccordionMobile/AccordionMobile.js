import {useEffect, useRef, useState} from "react";
import './accordionMobile.css'

function AccordionMobile({data}){

    // setting active accordion slide index
    const [selected,setSelected] = useState(0)

    const setIdx = (idx) => {setSelected(idx)}

    return(
        <>
            {
                data.map((item,idx)=><Accordion title={item.title} date={item.date} key={idx} setIdx={setIdx} idx={idx} isActive={selected === idx}/>)
            }
        </>

    )
}

function Accordion({idx,setIdx,isActive,title,date}) {
    //sets current accordion slide active
    const [setActive, setActiveState] = useState("");
    //controls height of current accordion slide
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    // activates accordion slide
    useEffect(()=>{
        setActiveState(isActive === "" ? "active" : "");
        setHeightState(
            !isActive ? "0px" : `60vh`
        );
    },[isActive])

    return (
        <div className="accordion__section">

            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content">
                <div className="accordion__text">
                <h2>{title}</h2>
                <p>{date}</p>
                    <div className={"moreInfo"}>
                        More information
                    </div>
            </div>
            </div>
            <button className={`accordion ${setActive}`} onClick={()=>setIdx(idx)}>
                <span>{idx+1 < 10 ? `0${idx+1}`:idx+1}</span>
                <h3 className="accordion__title">{title}</h3>
            </button>
        </div>
    );
}

export default AccordionMobile;
