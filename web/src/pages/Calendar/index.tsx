import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "../../Assets/calendar2.svg";
import plus from "../../Assets/plus.svg";
import moment from "moment";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"


const Calendar = () => {
    const [year, setYear] = useState(moment(new Date()).year())
    const [month, setMonth] = useState(moment(new Date()).month())
    const [message, setMessage] = useState("") 
    const name = localStorage.getItem("name");
    
    // const email = localStorage.getItem("email");

    // array para mostrar o nome dos meses
    const monthNames = ["january",
                        "february",
                        "march",
                        "april",
                        "may",
                        "june",
                        "july",
                        "august",
                        "september",
                        "october",
                        "november",
                        "december"
                    ];
                    
    useEffect(() => {
        const messages = ["Bom dia", "Boa tarde", "Boa noite"]
        const hour = moment(new Date()).hour()

        if (hour >= 6 && hour <= 12) {
            setMessage(messages[0]);
        } else if (hour >= 12 && hour <= 18) {
            setMessage(messages[1]);
        } else {
            setMessage(messages[2]);
        }
    }, [])

    useEffect(() => {
        const numbers = []
        for (let index = 0; index <= 35; index++) {
            numbers.push(index)
            
        }
        
        numbers.map(number => {
            ReactDOM.render(<h3 id={String(number)}></h3>, document.getElementById("days"))
            return 1;
        })

        
    }, [])

    function handleSubtractMonth() {
        if(month === 0) {
            setYear(year - 1);
            setMonth(11)
        } else {
            setMonth(month - 1);
        }
        
    }
    
    function handleAddMonth() {
        if(month === 11) {
            setYear(year + 1);
            setMonth(0);
        } else {
            setMonth(month + 1);
        }
    }

    return (
        <div id="calendar-page">


            <header>
                <div id="salute">
                    <iframe className="logo" src={logo} title="MyCalendar"></iframe>
                    <h3>{message} {name}!</h3>
                </div>
                
                <span id="plus-button">
                    <iframe id="plus" src={plus} title="AddItem"></iframe>
                </span>
                
            </header>


            <main>
                <div id="calendar">
                    <header id="calendar-header">
                        <span>
                            <MdKeyboardArrowLeft  
                            onClick={() => {handleSubtractMonth()}}
                            className="arrow"/>
                        </span>
                        <h3>{monthNames[month]}, {year}</h3>
                        <span >
                            <MdKeyboardArrowRight
                            onClick={() => {handleAddMonth()}} 
                            className="arrow"/>
                        </span>
                    </header>
                    <main id="calendar-body">
                        <div id="weekdays">
                            <h3>S</h3>
                            <h3>M</h3>
                            <h3>T</h3>
                            <h3>W</h3>
                            <h3>T</h3>
                            <h3>F</h3>
                            <h3>S</h3>
                        </div>
                        <div id="days">

                        </div>
                        
                    </main>
                </div>
            </main>
        </div>
    )
}

export default Calendar