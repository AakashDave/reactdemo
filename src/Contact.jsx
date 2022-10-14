import React, { useState } from "react";


const Contact=()=>{
    const [data,setData]=useState({
        email:"",
        name:"",
        message:"",
        address:"",
        city:"",
        zip:""
    })
    let inputEvent=(e)=>{
        let {name,value}=e.target;
        setData((preVal)=>{
            return{
                 ...preVal,
                [name]:value,
            }
        })
    }
    let submitIt=(e)=>{
        e.preventDefault();
        alert(`my email is ${data.email}, my name is ${data.name}`);
    }
    return(
        <>
           <div className="form container mt-5">
                <form className="w-50">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input name="email" type="email" onChange={inputEvent} className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="name">Full Name</label>
                            <input name="name" type="text" onChange={inputEvent} className="form-control" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea name="message" onChange={inputEvent} className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input name="address" type="text" onChange={inputEvent} className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input name="city" type="text" onChange={inputEvent} className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input name="zip" type="text" onChange={inputEvent} className="form-control" id="inputZip"/>
                    </div>
                    </div>
                    <button type="submit" onClick={submitIt} className="btn btn-primary">Send It</button>
                </form>
           </div>
        </>
    )
}

export default Contact;