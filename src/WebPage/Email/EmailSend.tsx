import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Star from '../Background/Star';
import './EmailSend.css';
import './mEmailSend.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const EmailSend = () => {
    const form = useRef<any>();
    const BrowserCheck = useSelector((State:RootState) => State.DiviceCheck.value);

    const sendEmail = (e:any) =>{
        e.preventDefault();

        emailjs.sendForm('service_9p2o8db', 'template_kpyfgrb', form.current, 'GqUBV3e71MMMcbqii')
            .then((result) =>{
                console.log(result.text);
            }, (error) =>{
                console.log(error.text);
            });
    };

    return(
        <>
            <Star index={3}/>
            <div className={`${BrowserCheck.Browser ? "contact_email" : `${BrowserCheck.Mobile ? "mcontact_email" : ""}`}`}>
                <div className={`${BrowserCheck.Browser ? "contact" : `${BrowserCheck.Mobile ? "mcontact" : ""}`}`}>
                    {"CONTACT"}
                </div>
                <form ref={form} onSubmit={sendEmail} className={`${BrowserCheck.Browser ? "input_send" : `${BrowserCheck.Mobile ? "minput_send" : ""}`}`}>
                    <input type='text' name="user_name" placeholder='Name' className={`${BrowserCheck.Browser ? "name" : `${BrowserCheck.Mobile ? "mname" : ""}`}`}/>
                    <input type='email' name="user_email" placeholder='Email' className={`${BrowserCheck.Browser ? "email" : `${BrowserCheck.Mobile ? "memail" : ""}`}`}/>
                    <input type='tel' name="user_Phone" placeholder='Phone Number' className={`${BrowserCheck.Browser ? "phone" : `${BrowserCheck.Mobile ? "mphone" : ""}`}`}/>
                    <textarea name='message' placeholder='Your Message' rows={1} className={`${BrowserCheck.Browser ? "message" : `${BrowserCheck.Mobile ? "mmessage" : ""}`}`}/>
                    <input type='submit' value="SEND" onClick={()=>alert("전송되었습니다.")} className={`${BrowserCheck.Browser ? "send" : `${BrowserCheck.Mobile ? "msend" : ""}`}`}/>
                </form>
            </div>
        </>
    );
}

export default EmailSend;