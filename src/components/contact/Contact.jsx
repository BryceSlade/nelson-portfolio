import './contact.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

const Contact = () => {
    const formRef = useRef()
    const [inputs, setInputs] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        emailjs.sendForm('service_9veotyh', 'template_9bk1xzs', formRef.current, 'user_7uoX3rBQAcczgv1dudRnu')
        .then((result) => {
            console.log(result.text);
            setSent(true)
            setInputs('')
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <secion id='contact'>
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

                    {/* <div className="c-right">
                        <Grid>
                            <Paper elevation={24} style={paperStyle} className='paper'>
                                <p className="c-desc">
                                    <b>Interested?</b> Send me an email!
                                </p>
                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <TextField
                                        style={textboxStyle}
                                        fullWidth
                                        variant='outlined'
                                        label='name'
                                        // value={inputs.name}
                                        // onChange={(e)=>setInputs(e.target.inputs)}
                                        type='text'
                                        placeholder='enter name'
                                        name='user_name'
                                    />
                                    <TextField
                                        style={textboxStyle}
                                        fullWidth
                                        variant='outlined'
                                        label='subject'
                                        // value={inputs}
                                        // onChange={(e)=>setInputs(e.target.inputs)}
                                        type='text'
                                        placeholder='subject'
                                        name='user_subject'
                                    />
                                    <TextField
                                        style={textboxStyle}
                                        fullWidth
                                        variant='outlined'
                                        label='email'
                                        // value={inputs}
                                        // onChange={(e)=>setInputs(e.target.inputs)}
                                        type='text'
                                        placeholder='enter email'
                                        name='user_email'
                                    />
                                    <TextField
                                        style={textboxStyle}
                                        fullWidth
                                        label='message'
                                        variant='outlined'
                                        multiline
                                        rows={5}
                                        // value={inputs}
                                        // onChange={(e)=>setInputs(e.target.inputs)}
                                        placeholder='Type message!'
                                        name='message'
                                    />
                                    <Button 
                                        variant='contained' 
                                        type='submit' 
                                        style={buttonStyle} 
                                        fullWidth
                                    >
                                        Submit
                                    </Button>
                                    {sent && <p>Thank you!</p>}
                                </form>
                            </Paper>
                        </Grid>
                    </div> */}
                    

                </div>
            </div>
        </secion>
    )
}

const paperStyle = {padding: 20, height: '60vh', width: 400}
const textboxStyle = {margin: '0.8rem 0'}
const buttonStyle = {margin: '0.8rem auto', backgroundColor: '#ff8317', width: '50%'}

export default Contact
