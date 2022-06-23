import React, { useEffect, useState } from 'react';
import { Progress } from 'react-sweet-progress';

function ProgressComp(props) {
    const [percent,setPercant]=useState(0);

    useEffect(()=>{
      const timer = setInterval(() => {
        setPercant(val => {
          if (val >= props.range) {
            clearInterval(timer)
            return props.range;
          }
          return val + 1
        })
      }, 70);
    },[])
    return (
        <>
        <label for={props.value} class="labelcss">{props.value}</label>
        <Progress
          id={props.value}
          percent={percent}
          theme={
              {
                active: {
                  symbol:`${percent}%`,
                  color: '#735d89'
                },
              }
            }
        />
        </>
    );
}

export default ProgressComp;