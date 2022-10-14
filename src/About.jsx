import React from "react";
import web2 from "./Img/img2.jpg";
import Common from "./Common";
let my_title="We are devloping teams that devlops reliable software for customers in cheap price"
let my_subtitle="first test it then beleive it";
let btn_text="Contact Us"

const About=()=>{
    return(
        <>
             <Common imglink={web2} title={my_title} subtitle={my_subtitle} btntext={btn_text} types={"primary"} to_path={"contact"}/>
        </>
    )
}

export default About;