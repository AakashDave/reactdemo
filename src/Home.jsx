
import React from "react";
import Common from "./Common";
import web from "./Img/img.jpg"
let my_title="Hello Guys, Its Platfrom for creating creative,reliable,automated website"
let my_subtitle="we are best devloping team in Ahmedabad";
let btn_text="let's explore"

const Home=()=>{
    return(
        <>
            <Common imglink={web} title={my_title} subtitle={my_subtitle} btntext={btn_text} types="secondary" to_path="service"/>
        </>
    )
}

export default Home;