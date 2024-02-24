import React, { useState } from "react" ;
const Contact = () => {
     const [data , setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
     });
     const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
     };
      
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            ` Yor form is successfully submitted `
        );
        setData((preVal) => {
            return {
                fullname: "",
                phone: "",
                email: "",
                message: "",
               
            };
        });
            
    
    };
   return (
       <>
           <div className="my-5">
           <h1 className="text-center">Contact US</h1>
           </div>
           <div className="container contact_div">
             <div className="row">
             <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
            <input type="fullname" className="form-control" id="exampleFormControlInput1"
            name="fullname"
            value={data.fullname}
            onChange={InputEvent}
             placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="phone" className="form-control" id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                 placeholder="Enter your phone number"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"
            name="email"
            value={data.email}
            onChange={InputEvent}
             placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea 
              name="message"
              value={data.message}
              onChange={InputEvent}
              className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">Submit form</button>
             </div>
             </form>
             </div>
             </div>
           </div>
       </>
   );
};
export default Contact;
