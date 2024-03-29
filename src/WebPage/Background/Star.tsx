import { useEffect, useState } from "react";
import './star.css';
import { useDispatch, useSelector } from "react-redux";
import { DiviceCheck, RootState } from "../../app/store";
import { isBrowser, isMobile } from "react-device-detect";

const Star = (prop:{index:number}) =>{
    const style = ["style1", "style2", "style3", "style4"];
    const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    const opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    const [star, setstar] = useState<String[][]>();
    const Index = useSelector((State:RootState) => State.Index.value);

    const dispatch = useDispatch();

    const getRandomArbitrary = (min:number, max:number):number => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(()=>{
        let starList:String[][] = [];
    
        for(let i = 0; i < 250; i++){
          let styleNumber = style[getRandomArbitrary(0, 4)];
          let tamNumber = tam[getRandomArbitrary(0, 5)];
          let opaNumber = opacity[getRandomArbitrary(0, 6)];
          let delay = getRandomArbitrary(0, 9);
          let toLeft = getRandomArbitrary(0, window.innerWidth * 0.9);
          let toTop = getRandomArbitrary(0, window.innerHeight * 0.9);
    
          starList = [...starList, [styleNumber, tamNumber, opaNumber, `${delay}`, `${toTop}`, `${toLeft}`]];
        }
    
        setstar(starList);
    }, [window.innerWidth, window.innerHeight]);

    useEffect(()=>{
      dispatch(DiviceCheck.actions.BrowserChange(isBrowser || window.matchMedia('(orientation:landscape)').matches));
      dispatch(DiviceCheck.actions.MobileChange(isMobile || window.matchMedia('(orientation:portrait)').matches));
    }, [window.matchMedia('(orientation:portrait)').matches, window.matchMedia('(orientation:landscape)').matches]);

    return(
        <div className={`constelacao${prop.index}`}>
          { prop.index == Index &&
            star?.map((e:String[], i:number) =>{
              return(
                <span 
                  className={`estrela ${e[0]} ${e[1]} ${e[2]}`}
                  style={{
                    animationDelay: `.${e[3]}s`,
                    top: Number(e[4]),
                    left: Number(e[5])
                  }}
                  key={i}
                  ></span>
              )
            })
          }
        </div>
    );
}

export default Star;
