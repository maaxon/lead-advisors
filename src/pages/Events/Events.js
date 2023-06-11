import AccordionMobile from "../../components/AccordionMobile/AccordionMobile";
import './events.css'
import {useState} from "react";
import Accordion from "../../components/Accordion/Accordion";

export default function Events(){

    //information that contains accordion
    const accordionData = [
        {
        title:"Hawaiian Party",
        date:"13.08.2023",
        },
        {
            title:"Mafia Party",
            date:"23.08.2023",
        },
        {
            title:"Meeting",
            date:"13.08.2023",
        },
        {
            title:"Hawaiian Party",
            date:"13.08.2023",
        },
        {
            title:"Mafia Party",
            date:"23.08.2023",
        },
        {
            title:"Meeting",
            date:"13.08.2023",
        }
    ]


    //tracks window resize
    const [width,setWidth] = useState(window.screen.width)

    window.onresize = function(event) {
            setWidth(window.screen.width)
    };

    return(
        <div className={"events"} id={"section2"}>
            <h1>ALL EVENTS</h1>
            {width < 1024 ? <AccordionMobile data={accordionData}/>:<Accordion data={accordionData}/>}
        </div>
    )
}