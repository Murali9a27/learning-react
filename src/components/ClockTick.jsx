import React, { useEffect, useState } from 'react'

function ClockTick() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(true)
    useEffect(()=>{

        let timer 
        if(running){
            timer=setInterval(()=>{
                setCounter(prev=> prev + 1);
            }, 1000);

        }
        
        return ()=>{
            clearInterval(timer);
        }
    }, [counter, running])
    
  return (
    <>
        <p>Timer: {counter >= 60? Math.floor(counter / 60)+ 'Min '+ counter % 60 : counter} sec</p>
        <button onClick={()=> setRunning(!running)}>{running ? 'Stop': 'Start'}</button>
        <button onClick={()=> setCounter(0)}>Reset</button>
    </>
  )
}

export default ClockTick