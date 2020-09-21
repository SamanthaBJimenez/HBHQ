import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Flip } from 'react-toastify';
import './../css/toast.css';
// import contactBackDrop from './../ImgFiles/IMG_1418.JPG';

const Contact = () => {

    const notify = () => toast.success('Sent!', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_xbi0go8', e.target, 'user_qaH6o853v8lCkatTfJl5W')
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
            {/* <img class="backdrop" src={contactBackDrop}/> */}
            <div class='container contact-container'>
                <div class="align-items-stretch">
                    <h1 class='contact-header'>Contact</h1>
                    <form onSubmit={handleSubmit} role="form" class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" id="name" required/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" required/>
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control text-area" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-dark btn-block" type="submit">Send Message</button>
                        </div>
                    </form>
                    <ToastContainer
                        class="toast"
                        position="bottom-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        transition={Flip}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;