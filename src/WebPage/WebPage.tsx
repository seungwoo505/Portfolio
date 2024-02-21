import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Main.css';
import './mMain.css';

import {EffectCards, Mousewheel, Keyboard} from 'swiper/modules';
import EmailSend from './Email/EmailSend';
import Projects from './Project/Projects';
import Welcome from './Welcome/Welcome';
import Introduction from './Introduction/Introduction';
import { useDispatch, useSelector } from 'react-redux';
import { IndexSlice, RootState } from '../app/store';

const WebPage = () =>{
    const [MainSwiper, SetMainSwiper] = useState<any>();
    const BrowserCheck = useSelector((State:RootState) => State.DiviceCheck.value);
    const dispatch = useDispatch();
    const SwiperSlides:any = [<Welcome/>, <Introduction/>, <Projects MainSwiper={MainSwiper}/>, <EmailSend/>];

    useEffect(() =>{
        window.scrollTo({left: 0});
    },[]);

    return(
        <Swiper
            effect={"cards"}
            grabCursor={true}
            mousewheel={true}
            keyboard={{enabled:true}}
            allowTouchMove={true}
            modules={[ EffectCards, Mousewheel, Keyboard]}
            className={`mySwiper ${BrowserCheck.Browser ? "MainSwiper" : `${BrowserCheck.Mobile ? "mMainSwiper" : ""}`}`}
            onSlideChange={(e:any)=> dispatch(IndexSlice.actions.IndexChange(e.activeIndex))}
            onSwiper={(swiper:any)=>SetMainSwiper(swiper)}>
                {SwiperSlides.map((e:any, i:number)=>{
                    return(
                        <SwiperSlide 
                            className={`${BrowserCheck.Browser ? `MainSwiperSlide` : `${BrowserCheck.Mobile ? "mMainSwiperSlide" : ""}`}`}
                            key={i}
                            >
                            {e}
                        </SwiperSlide>
                    )
                })}
      </Swiper>
    )
};

export default WebPage;
