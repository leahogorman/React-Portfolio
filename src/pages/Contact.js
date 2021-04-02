import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_mcpjuq5uexDA6Dkh3w00d');

const ContactPage = () => {

const [contactNumber, setContactNumber] = useState("000000");
const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substr(numStr.length - 6))
}

const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data => {
    console.log(data);
    generateContactNumber();

    sendForm('contact_form', 'template_06hkzch', 'contact-form')
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            document.getElementById('successMsg').innerHTML = "Sent Successfully!"
            setTimeout(function() {
                document.getElementById("contact-form").reset();
            }, 50);
            
            setTimeout(function() {
                document.location.reload();
            }, 3000);

        }, function(error) {
            console.log('Failed...', error);
            document.getElementById('errorMsg').innerHTML = "Error occured. Please try again."
        });
}

const message = watch('message') || "";
const messageCharsLeft = 3000 - message.length;


  return (
    <div className='contactPage'>
        <div className='contactForm'>
            <h1 className='pageTitle'>Contact</h1>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input type='hidden' name='contact_number' value={contactNumber} />
                {errors.user_name && errors.user_name.type === "required" && (<div className='alert' role="alert"> * Name is required * </div>)}
                    <input type='text' className="input" name='user_name' placeholder='Name' maxLength='30' aria-invalid={errors.user_name ? "true" : "false"} ref={register({ required: true })}/>
                {errors.user_email && errors.user_email.type === "required" && (<div className='alert' role="alert"> * Email is required * </div>)}
                    <input type='email' className="input" name='user_email' placeholder='Email' aria-invalid={errors.user_email ? "true" : "false"} ref={register({ required: true })} />
                {errors.message && errors.message.type === "required" && (<div className='alert' role="alert"> * Message is required * </div>)}
                    <textarea type='text' className="input" name='message' placeholder='Message' rows='5' maxLength='3000' aria-invalid={errors.message ? "true" : "false"} ref={register({ required: true })} />
                <p className='message-chars-left'>{messageCharsLeft} / 3000</p>
                <input type='submit' className='submitBtn' value='Send' />
            </form>
            <p id='successMsg'className='errorMsg'></p>
            <p id='errorMsg'className='errorMsg'></p>
        </div>
                 
        <style jsx>{`
                    .contactPage {
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        height: 80vh;
                    }
                    .pageTitle {
                        font-size: 5rem;
                        font-weight: bolder;
                        padding: 3rem 0;
                    }
                    .contactForm {
                        width: 50vw;
                    }
                    .input {
                        font-size: 1.5rem;
                        width: 100%;
                        margin: .5rem;
                        padding-left: 1rem;
                        border-radius: 10px;
                        border: 1px solid rgba(120, 120, 120, 1);
                    }
                    .input:focus {
                        border: 3px solid rgba(120, 120, 120, 1);
                        border-radius: 10px;
                        outline: none;
                        box-shadow: 1px 1px 5px 5px  rgba(120, 120, 120, .5);
                    }
                    .alert {
                        margin: 1rem 0 0 2rem;
                        padding-bottom: 0;
                        text-align: start;
                        text-transform: uppercase;
                        color: rgba(240, 52, 52);
                        font-size: 1rem;
                        font-weight: bolder;
                    }
                    .message-chars-left {
                        text-align: end;
                    }           
                    .submitBtn {
                        text-align: center;
                        width: 100px;
                        background-color: #757575;
                        padding: 1rem;
                        text-decoration: none;
                        color: white;
                        border-radius: 10px;
                        margin-top: 1rem;
                        border: #757575;
                        outline: #757575;
                    }
                    .submitBtn:hover {
                        text-decoration: none;
                        color: white;
                        background-color: #757575;
                        transform: scale(1.15);
                        border: #757575;
                        outline: #757575;
                    }
                    .successMsg, .errorMsg {
                        font-weight: bold;
                        padding-top: 1rem;
                        display: flex;
                        justify-content: flex-start;
                    }
                    @media only screen and (max-width: 1200px) {
                        .contactForm {
                            width: 90vw;
                        }
                `}</style>
    </div>
  );
}
export default ContactPage;