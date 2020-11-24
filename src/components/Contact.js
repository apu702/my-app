import React, { useState } from 'react';



const Contact = () => {


    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });
    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
           e.preventDefault();
           alert(
               `My name is ${data.fullname}. My mobile no is ${data.phone}. Email is ${data.email}. Message is ${data.message}`
           );
            
    };


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} /*-Form er value excess er jonno--*/>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input 
                                    type="name" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="fullname"/*--Form er value excess er jonno--*/
                                    value={data.fullname}/*--Form er value excess er jonno--*/
                                    onChange={InputEvent}/*--Form er value excess er jonno--*/
                                    placeholder="Write Your Full Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile number" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}                                    
                                    placeholder="name@example.com" />
                            </div>
                        
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}   
                                    rows="3">     
                                </textarea>
                            </div>

                            <div class="col-12 mt-2">
                                 <button 
                                    type="submit" 
                                    class="btn btn-outline-primary ">Submit Form</button>
                            </div>
                    </form>
                </div>
            </div>
            </div>
        </>


    );
};

export default Contact;
