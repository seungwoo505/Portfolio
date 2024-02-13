import CopyToClipboard from 'react-copy-to-clipboard';
import './Introduction.css';
import './mIntroduction.css';
import Star from '../Background/Star';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Introduction = () =>{
    const BrowserCheck = useSelector((State:RootState) => State.DiviceCheck.value);
    const information:String[] = ["person", "calendar", "map", "phone", "email", "school"];
    const introduction:String[] = ["이승우", "1999.05.05", "경기도 파주시", "010-9172-1302", `seungwoo505 \n @naver.com`, "동양미래대학교\n정보통신공학과 학사"];

    return(
        <>
            <Star index={1}/>
            <div className={`${BrowserCheck.Browser ? "about" : `${BrowserCheck.Mobile ? "mabout" : ""}`}`}>
                <div className={`${BrowserCheck.Browser ? "Information" : `${BrowserCheck.Mobile ? "mInformation" : ""}`}`}>
                    INFORMATION
                </div>
                {information.map((e:String, i:number)=>{
                    return(
                        <div className={`${BrowserCheck.Browser ? "Introductions" : `${BrowserCheck.Mobile ? "mIntroductions" : ""}`}`} key={i}>
                            <div className={`${BrowserCheck.Browser ? "Intro" : `${BrowserCheck.Mobile ? "mIntro" : ""}`}`}>
                                <div className={`${BrowserCheck.Browser ? "IntroductionImg" : `${BrowserCheck.Mobile ? "mIntroductionImg" : ""}`}`}>
                                    <CopyToClipboard text={`${introduction[i]}`} onCopy={()=>alert("복사되었습니다.")}>
                                        <img 
                                            style={{width: "100%"}}
                                            src={`./image/${e}.png`}/>
                                    </CopyToClipboard>
                                </div>
                                <div className={`${BrowserCheck.Browser ? "IntroductionEx" : `${BrowserCheck.Mobile ? "mIntroductionEx" : ""}`}`}>
                                    <CopyToClipboard text={`${introduction[i]}`} onCopy={()=>alert("복사되었습니다.")}>
                                        <div className={`${BrowserCheck.Browser ? "Introduction" : `${BrowserCheck.Mobile ? "mIntroduction" : ""}`}`}>{`${introduction[i]}`}</div>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Introduction;
