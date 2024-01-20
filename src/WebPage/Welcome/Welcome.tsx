import React, {useEffect, useRef, useState} from 'react';
import { useInView } from 'framer-motion';
import Star from '../Background/Star';
import './Welcome.css';
import './mWelcome.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Welcome = () =>{
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const BrowserCheck = useSelector((State:RootState) => State.DiviceCheck.value);
    const tutorial:string[] = ["Mouse Control (Swipe & Wheel)", "", "Keyboard Control (Arrow)", ""];
    const [count, setCount] = useState<number>(0);
    const [animation, setAnimation] = useState("all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 1.9s");

    useEffect(() => {
      if(BrowserCheck.Browser){
        const timer = setInterval(() => {
          if(count == 3){
            setCount(0);
          }else{
            setCount((e)=> e+1);
          }
        }, [0, 2].includes(count) ? 3000 : 10);
    
        return () => {
          clearInterval(timer);
        }
      }
      }, [count]);

      useEffect(() =>{
        if(BrowserCheck.Browser) setAnimation("all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s")
      }, []);

    return(
      <>
        <Star index={0}/>
        <section ref={ref}>
          <span
            className={`${BrowserCheck.Browser ? "welcome" : `${BrowserCheck.Mobile ? "mwelcome" : ""}`}`}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}>
            LeeSeungWoo
          </span>
          <span
            className={`${BrowserCheck.Browser ? "popol" : `${BrowserCheck.Mobile ? "mpopol" : ""}`}`}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
            }}>
            Portfolio
          </span>
          <span
            className={`${BrowserCheck.Browser ? "tutorial" : `${BrowserCheck.Mobile ? "mtutorial" : ""}`}`}
            style={[0, 2].includes(count) ? {
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: animation
            } : {}}>
            {
             BrowserCheck.Browser ? tutorial[count] : "Left & Right Swipe"
            }
          </span>
        </section>
      </>
    );
};

export default Welcome;