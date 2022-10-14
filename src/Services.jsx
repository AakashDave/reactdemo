import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Services=()=>{
    return(
        <>
            <div className="container d-flex flex-wrap">
                {
                    Sdata.map((val,index)=>{
                       return <Cards key={index} id={index} imglink={val.img} my_title={val.title}/>
                    })
                }
               
            </div>
        </>
    )
}

export default Services;