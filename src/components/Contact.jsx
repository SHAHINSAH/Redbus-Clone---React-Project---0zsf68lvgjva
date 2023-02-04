import React from "react";
import { useNavigate } from "react-router-dom";


const Contact=()=>{
     const nav6 = useNavigate();
    return(
    <div className="contactdiv">
        <p className="contactt">
        <h1 id="contact">Corporate Head Office-Bangalore</h1>
            Ibibo Group Pvt Ltd.
            3rd Floor, Tower B1,
            Golden Enclave, HAL Old Airport Road,
            Murgesh Pallya, Bengaluru,
            Karnataka - 560017.
        </p>
    </div>
    )
}
export default Contact;