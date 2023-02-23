import './contact.css';
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import address from '../../img/address.png';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
    const formRef = useRef()
    const [sent, setSent] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        emailjs.sendForm('service_9veotyh', 'template_9bk1xzs', formRef.current, 'user_7uoX3rBQAcczgv1dudRnu')
        .then((result) => {
            console.log(result.text);
            setSent(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <section id='contact'>
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contact Me</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} alt="Phone" className="c-icon-p" />
                                <p className='phone'>480-526-2044</p>
                            </div>
                            <div className="c-info-item">
                                <img src={email} alt="Email" className="c-icon-e" />
                                <p className="email">bryceslade@gmail.com</p>
                            </div>
                            <div className="c-info-item">
                                <img src={address} alt="Address" className="c-icon-a" />
                                <p className="address">Arizona, Remote</p>
                            </div>
                        </div>
                    </div>

                    <div className="c-right">
                        <div className="card">
                            <div className="container">
                                <p className="c-desc">
                                    <b>Interested?</b> Send me an email!
                                </p>
                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        name='user_name'
                                    />
                                    <input
                                        type='text'
                                        placeholder='Subject'
                                        name='user_subject'
                                    />
                                    <input
                                        type='text'
                                        placeholder='Email'
                                        name='user_email'
                                    />
                                    <textarea
                                        rows={5}
                                        placeholder='Type message!'
                                        name='message'
                                    />
                                    <button>Submit</button>
                                    {sent && <p>Thank you!</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;