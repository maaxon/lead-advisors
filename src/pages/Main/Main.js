import './main.css';
import logo from '../../misc/Group.svg'
import vec1 from '../../misc/Vector.svg'
import vec2 from '../../misc/Vector2.svg'

import {Link} from "react-scroll";
import {useState} from "react";
import Timer from "../../components/Timer/Timer";
import Modal from "../../components/Modal/Modal";


function Main() {

    const [email,setEmail] = useState("")

    //activates modal window
    const [active,setActive] = useState(false)

    //set email when input changes
    const onInputChange = (e) => {
        setEmail(e.target.value)
    }

    //validate email
    const isValidEmail= ()=>{
        const regExp = new RegExp("[a-zA-Z0-9.-_]+@[a-zA-Z.-]{2,}[.][a-zA-Z]{2,}");
        return regExp.test(email)
    }

    //sets scroll mode(move to bottom or top)
    const [scrollBottom,setScroll] = useState(true)

    return (
            <div className="Main" id={"section1"}>
                <img className="vect1" src={vec1} alt="vector1"/>
                <img className="vect2" src={vec2} alt="vector2"/>
                <img className="logo" src={logo}  alt="logo"/>

                <div className="moto">
                    <h1>Under Construction</h1>
                    <p>We're making lots of improvements and will be back soon</p>
                </div>

                <Timer/>

                <div className="eventLink">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <a href={"https://yandex.by/"}><div><span>go to event</span>
                        <i aria-hidden="true" className="fa fa-arrow-right"></i></div></a>
                </div>


                <footer>
                    <input id={"footerInput"} onChange={onInputChange} value={email} placeholder={"Enter your Email and get notified"}  type="text"/>

                    <label htmlFor={"footerInput"}>
                        <div className={"send"} onClick={()=>setActive(true)}>
                            <i aria-hidden="true"  className="fa fa-light fa-arrow-right"></i>
                        </div>
                    </label>
                    <Link
                        className={`scroll ${!scrollBottom && "active"}`}
                        to={scrollBottom ? "section2":"section1"}
                        smooth={true}
                        duration= {1000}
                        onClick={()=>setScroll(!scrollBottom)}
                    >Other events  <i aria-hidden="true"  className="fa fa-light fa-arrow-right"></i></Link>
                </footer>
                <Modal isValid={isValidEmail()} active={active} setActive={setActive}><p>text</p></Modal>

            </div>
    );
}


export default Main;
