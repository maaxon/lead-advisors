import './timer.css'
import {useEffect, useState} from "react";
import days from '../../misc/days.svg'
import hours from '../../misc/hours.svg'
import minutes from '../../misc/minutes.svg'
import seconds from '../../misc/seconds.svg'

export default function Timer() {
    const deadline = new Date(2023, 7, 24);
    let timerId = null

    const [timer, setTimer] = useState({})

    useEffect(() => {
        countdownTimer();
        //calls function countdownTimer every second
        timerId = setInterval(countdownTimer, 1000);
    }, [])

    function countdownTimer() {
        // getting difference between current day and deadline
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        //converting from ms to dd:hh:mm:ss format
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        setTimer({days, hours, minutes, seconds})
    }


    return (
        <div className="timer">
            <div className="timer__items">
                <div className="timer__item timer__days">
                    {timer.days < 10 ? '0' + timer.days : timer.days}
                </div>
                <div className="timer__item timer__hours">
                    {timer.hours < 10 ? '0' + timer.hours : timer.hours}
                </div>
                <div
                    className="timer__item timer__minutes">
                    {timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}
                </div>
                <div
                    className="timer__item timer__seconds">
                    {timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}
                </div>
            </div>

            <div className="labels">
                <img className="timer__label" src={days} alt={"days"}/>
                <img className="timer__label" src={hours} alt={"hours"}/>
                <img className="timer__label" src={minutes} alt={"minutes"}/>
                <img className="timer__label" src={seconds} alt={"seconds"}/>
            </div>

        </div>
    )
}