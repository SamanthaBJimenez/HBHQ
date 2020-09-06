import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Flip } from 'react-toastify';
// import './../css/Toast.css';

const Contact = () => {

    const notify = () => toast.success('Sent!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_o8FUfYii', e.target, 'user_O3tRVjUa8qiKKAuGdRJBS')
            .then((result) => {
                console.log(result.text);
                notify();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div class='contact-main'>
            <form onSubmit={handleSubmit} role="form" class="php-email-form">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" class="form-control" id="name" required/>
                        <div class="validate"></div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" required/>
                        <div class="validate"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                    <div class="validate"></div>
                </div>
                <div class="text-center">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;