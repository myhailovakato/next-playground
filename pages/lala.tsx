// create a next component with a timer
import { useState, useEffect } from 'react'

function Timer({defaultTime = 0}) {
    const [time, setTime] = useState(defaultTime)

    useEffect(() => {
        if (time % 2 === 0) {
            console.log('time is even')
        }
    }, [time])

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [time])


    return (
        <div>
            <h1>Timer</h1>
            <p>{time}</p>
            <button onClick={() => setTime(0)}>Reset</button>            
        </div>
    )
}


export default function Lala() {
    return (
        <div>
            <h1>lala</h1>
            <Timer />
        </div>
    )
}