import "./Modal.css"

export default function Modal({active,setActive,isValid}){
    return(
        <div className={active ? "modal active":"modal"} onClick={()=> setActive(false)}>
            <div className={active ? "modal__content active":"modal__content"} onClick={e => e.stopPropagation()}>
                <i onClick={()=>setActive(false)} className="fa fa-close"></i>
                {isValid ? <Success/>:<Error/>}
                <div onClick={()=>setActive(false)} className="button">close</div>
            </div>
        </div>
    )
}

function Success(){
    return(
        <>
            <h1>SUCCESS!</h1>
            <p>You have successfully subscribed to the email newsletter</p>
        </>
    )
}

function Error(){
    return(
        <>
            <h1>ERROR!</h1>
            <p>Pleas check your email</p>
        </>
    )
}