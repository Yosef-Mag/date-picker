import React, { useState, useEffect } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const standard = {
    margin: '10px',
    width: '50px',
    height: '50px',
    border: '5px solid #e17628',
    backgroundColor: '#e17628'
};
const overnight = {
    margin: '10px',
    width: '50px',
    height: '50px',
    border: '5px solid #56a2d6',
    backgroundColor: '#56a2d6'
};
const saturday = {
    margin: '10px',
    width: '50px',
    height: '50px',
    border: '5px solid #074375',
    backgroundColor: '#074375'
};
const express = {
    margin: '10px',
    width: '50px',
    height: '50px',
    border: '5px solid #f69147',
    backgroundColor: '#f69147'
};

function CalendarPicker() {
    const [selectedDate, setSelectedDate] = useState()
    const [selectedDay, setSelectedDay] = useState('')
    const [shippingType, setShippingType] = useState('')
    const [price, setPrice] = useState()
    const options = {  month: 'long', day: 'numeric' };
    const days = { weekday: 'long' };

    const modifiers = {
        Tu: { daysOfWeek: [2] },
        We: { daysOfWeek: [3] },
        Th: { daysOfWeek: [4] },
        Fr: { daysOfWeek: [5] },
        Sa: { daysOfWeek: [6] },
    };

    const modifiersStyles = {
        Tu: {
            color: '#ffffff',
            backgroundColor: '#56a2d6',
        },
        We: {
            color: '#ffffff',
            backgroundColor: '#e17628',
        },
        Th: {
            color: '#ffffff',
            backgroundColor: '#e17628',
        },
        Fr: {
            color: '#ffffff',
            backgroundColor: '#e17628',
        },
        Sa: {
            color: '#ffffff',
            backgroundColor: '#074375',
        },
    };



        const handleDayClick = (day) => {
            console.log(day)
            setSelectedDate(day)
            setSelectedDay(day.toLocaleDateString('en-GB', days))
            console.log(selectedDay)
            if (selectedDay === 'Wednesday' || 'Thursday' || 'Friday'){
                setShippingType('Standard')
                setPrice('- $9.99')
            }
            if (selectedDay === 'Tuesday') {
                setShippingType('Overnight')
                setPrice('- $79.99')
            }
            if (selectedDay === 'Saturday') {
                setShippingType('Saturday')
                setPrice('- $0.00 Upgrade Free*')
            }
            console.log(shippingType, price)
        } 

    return (
        <>
        <div>
            <DayPicker 
                initialMonth={new Date()}
                disabledDays={[{ daysOfWeek: [1,0]}]}
                onDayClick={handleDayClick}
                selectedDays={selectedDate}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                fromMonth={new Date()}
            />
            {
                selectedDay ? <p>You have selected {shippingType}  Shipping {price} our package will arrive on {selectedDate.toLocaleDateString(undefined, options)} </p> : null
            }
        </div>
        
        <div style={{margin:'30px'}}>
            <h1>DELIVERY DATE</h1>
            <p>Select the day you wish to receive your order. Our products ship frozen- please make sure you plan ahead and save time for thawing</p>
            <div className="row align-items-start">
                <div style={standard}></div><h6> Standard - $9.99</h6>
            </div>
            <div className="row align-items-start">
                <div style={express}></div><h6>Express - $24.99</h6>
            </div>
            <div className="row align-items-start">
                <div style={overnight}></div><h6>Overnight - $79.99</h6>
            </div>
            <div className="row align-items-start">
                <div style={saturday}></div><h6>Saturday - $0.00 Upgrade Free*</h6>
            </div>
        </div>
        </>
    )
}

export default CalendarPicker
