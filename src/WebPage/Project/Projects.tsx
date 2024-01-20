import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Card, CardList, Project } from '../../types';
import { CardSlice } from '../../app/store';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import Star from '../Background/Star';
import './Projects.css';
import './mProjects.css';

const Projects = (props:any) =>{
    const dispatch = useDispatch();
    const CardLists = useSelector((state:RootState) => state.cards.value);
    const BrowserCheck = useSelector((State:RootState) => State.DiviceCheck.value);
    const Skills:string[] = ["HTML", "CSS", "JavaScript", "Jquery", "TypeScript", "React", "Next.js", "ReactNative", "Redux", "Python", "Flask", "MariaDB", "docker", "Heroku", "git", "ZEPLIN", "정보처리기사", "SQLD"];

    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:String){
            return `<span class="${className}"></span>`;
        }
    };

    return(
        <>
            <Star index={2}/>
            <div className={`${BrowserCheck.Browser ? "project" : `${BrowserCheck.Mobile ? "mproject" : ""}`}`}>
                <div className={`${BrowserCheck.Browser ? "ProjectSide" : `${BrowserCheck.Mobile ? "mProjectSide" : ""}`}`}>
                    PROJECT
                </div>
                {CardList.map((e:Card) =>(
                    <motion.div
                        key={`${e.title}`}
                        layoutId={`${e.title}`}
                        className={`${BrowserCheck.Browser ? e.title : `${BrowserCheck.Mobile ? `m${e.title}` : ""}`}`}>
                            <img
                                className={`${BrowserCheck.Browser ? `${e.title}Image` : `${BrowserCheck.Mobile ?`m${e.title}Image` : ""}`}`}
                                src={`${e.image}`}
                                alt={`${BrowserCheck.Browser ? "MainSwiper" : `${BrowserCheck.Mobile ? "mMainSwiper" : ""}`}`}
                                onClick={() =>{
                                    dispatch(CardSlice.actions.change(e));
                                    props.MainSwiper.mousewheel.disable();
                                    props.MainSwiper.keyboard.disable();
                                    props.MainSwiper.allowTouchMove = false;
                                }}/>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {CardLists.title && (
                <motion.div 
                    layoutId={`${CardLists.title}`}
                    className={`${BrowserCheck.Browser ? "modal" : `${BrowserCheck.Mobile ? "mmodal" : ""}`}`}
                    >
                        <Swiper 
                            navigation={true}
                            pagination={pagination}
                            mousewheel={true}
                            keyboard={{enabled:true}}
                            allowTouchMove={true}
                            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                            className={`mySwipe2 ${BrowserCheck.Browser ? "SecondSwiper" : `${BrowserCheck.Mobile ? "mSecondSwiper" : ""}`}`}
                            onKeyPress={(swiper:any, keyCode:String)=> {
                                if(`${keyCode}`==="27"){
                                    dispatch(CardSlice.actions.change({title: "", project: [{title:"", exposition: "", image: "", github:""}], image:""}));
                                    props.MainSwiper.mousewheel.enable();
                                    props.MainSwiper.keyboard.enable();
                                    props.MainSwiper.allowTouchMove = true;
                                }
                            }}>
                            {CardLists.title !== "Document" && CardLists.title !== "Android" && (
                            CardLists.project.map((item:Project)=>(
                                <SwiperSlide key={`${item.title}`}>
                                    <div className={`${BrowserCheck.Browser ? "swiper_Total" : `${BrowserCheck.Mobile ? "mswiper_Total" : ""}`}`}>
                                        <div className={`${BrowserCheck.Browser ? "swiper_left" : `${BrowserCheck.Mobile ? "mswiper_top" : ""}`}`}>
                                            <img 
                                                src={`${item.image}`}
                                                className={`${BrowserCheck.Browser ? "other" : `${BrowserCheck.Mobile ? "mother" : ""}`}`}/>
                                        </div>
                                        <div className={`${BrowserCheck.Browser ? "swiper_right" : `${BrowserCheck.Mobile ? "mswiper_bottom" : ""}`}`}>
                                            <div className={`${BrowserCheck.Browser ? "project_title" : `${BrowserCheck.Mobile ? "mproject_title" : ""}`}`}>
                                                {item.title}
                                            </div>
                                            <div className={`${BrowserCheck.Browser ? "project_exposition" : `${BrowserCheck.Mobile ? "mproject_exposition" : ""}`}`}>
                                                {item.exposition}
                                            </div>
                                            <div className={`${BrowserCheck.Browser ? "project_url" : `${BrowserCheck.Mobile ? "mproject_url" : ""}`}`}>
                                                {
                                                    (item.title === "회사 홈페이지" || item.title === "회사 홈페이지 수정" || item.title === "포트폴리오") && (
                                                        <div className={`${BrowserCheck.Browser ? "project_link" : `${BrowserCheck.Mobile ? "mproject_link" : ""}`}`}>
                                                            <a href={`${item.title === "포트폴리오" ? "https://seungwoo.i234.me/" : "http://ecgm.co.kr/"}`} target='_blank'>
                                                                <img src='./image/url.png' style={{width:"100%"}}/>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                                <div className={`${BrowserCheck.Browser ? "project_github" : `${BrowserCheck.Mobile ? "mproject_github" : ""}`}`}>
                                                    <a href={`${item.github}`} target='_blank'>
                                                        <img src='./image/github.png' style={{width:"100%"}}/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )))}
                            {CardLists.title !== "Document" && CardLists.title === "Android" && (
                            CardLists.project.map((item:Project)=>(
                                <SwiperSlide key={`${item.title}`}>
                                    <div className={`${BrowserCheck.Browser ? "swiper_Total" : `${BrowserCheck.Mobile ? "mswiper_Total" : ""}`}`}>
                                        <div className={`${BrowserCheck.Browser ? "swiper_left2" : `${BrowserCheck.Mobile ? "mswiper_top2" : ""}`}`}>
                                            <img 
                                                src={`${item.image}`}
                                                className={`${BrowserCheck.Browser ? "android" : `${BrowserCheck.Mobile ? "mandroid" : ""}`}`}/>
                                        </div>
                                        <div className={`${BrowserCheck.Browser ? "swiper_right2" : `${BrowserCheck.Mobile ? "mswiper_bottom2" : ""}`}`}>
                                            <div className={`${BrowserCheck.Browser ? "project_right2" : `${BrowserCheck.Mobile ? "mproject_bottom2" : ""}`}`}>
                                                <div className={`${BrowserCheck.Browser ? "project_title2" : `${BrowserCheck.Mobile ? "mproject_title2" : ""}`}`}>
                                                    {item.title}
                                                </div>
                                                <div className={`${BrowserCheck.Browser ? "project_exposition2" : `${BrowserCheck.Mobile ? "mproject_exposition2" : ""}`}`}>
                                                    {item.exposition}
                                                </div>
                                                <div className={`${BrowserCheck.Browser ? "project_url2" : `${BrowserCheck.Mobile ? "mproject_url2" : ""}`}`}>
                                                    <div className={`${BrowserCheck.Browser ? "project_github2" : `${BrowserCheck.Mobile ? "mproject_github2" : ""}`}`}>
                                                        <a href={`${item.github}`} target='_blank'>
                                                            <img src='./image/github.png' style={{width:"100%"}}/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )))}
                            {CardLists.title === "Document" &&
                                <SwiperSlide>
                                    <div className={`${BrowserCheck.Browser ? "swiper_docs" : `${BrowserCheck.Mobile ? "mswiper_docs" : ""}`}`}>
                                        <div className={`${BrowserCheck.Browser ? "project_skill_title" : `${BrowserCheck.Mobile ? "mproject_skill_title" : ""}`}`}>Total Skills</div>
                                        <div className={`${BrowserCheck.Browser ? "project_skills" : `${BrowserCheck.Mobile ? "mproject_skills" : ""}`}`}>
                                            {Skills.map(e=>{
                                                return(
                                                    <div className={`${BrowserCheck.Browser ? "project_skill" : `${BrowserCheck.Mobile ? "mproject_skill" : ""}`}`}>
                                                        {e}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }
                            <motion.svg 
                                xmlns={"http://www.w3.org/2000/svg"}
                                viewBox={"0 0 20 20"}
                                className={`${BrowserCheck.Browser ? "Xbutton" : `${BrowserCheck.Mobile ? "mXbutton" : ""}`}`}
                                onClick={()=>{
                                    dispatch(CardSlice.actions.change({title: "", project: [{title:"", exposition: "", image: "", github:""}], image:""}));
                                    props.MainSwiper.mousewheel.enable();
                                    props.MainSwiper.keyboard.enable();
                                    props.MainSwiper.allowTouchMove = true;
                                }}>
                                <motion.path d={"M15 5L5 15M5 5l5.03 5.03L15 15"} fill={"transparent"} strokeWidth={2} stroke={"currentColor"} strokeLinecap={"round"}></motion.path>
                            </motion.svg>
                        </Swiper>
                </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;