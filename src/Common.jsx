import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const Common=(props)=>{
    return(
        <>
            <div className="container-fluid" style={{height:"100%"}}>
                <div className="row align-items-center justify-content-center">
                    <div className="col">
                        <h1>{props.title}</h1>
                        <h6>{props.subtitle}</h6>
                        <Button className="linksbtn" variant="outlined" color={props.types} >
                            <NavLink to={`/${props.to_path}`} className="linkbtn">
                                {props.btntext}
                            </NavLink>
                        </Button>
                    </div>
                    <div className="col">
                        <img src={props.imglink} alt="random images" className="img"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;