import './index.css';
import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import VanillaJS2 from "./VanillaJS2.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";
import { Dropdown } from "./Dropdown";
import { Submenu } from './Submenu';
import { CatDropdown } from "./CatDropdown";
import { AreaDropdown } from './AreaDropdown';


const WidgetStyle = styled.div`
width: "238px"; 
margin: "0px auto"
`

const WidgetStyleInternal = styled.div`
width: "99.5%"; 
border: "1px solid #2D6AB4"; 
border-top: "none"; 
border-bottom: "none"; 
text-align: "center"; 
height:"35px"; 
font-size:"16px"; 
padding:"5px 0px 0px 0px"; 
border-top-right-radius:"5px"; 
border-top-left-radius:"5px"; 
background-color:"#2D6AB4"; 
font-weight:"bold";
`
// useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then(res => res.json())
//     .then(data => {
//      setCurrentMeal(data.meals[0])
//      setYoutubeEmbedLink(data.meals[0].strYoutube.replace('watch?v=', 'embed/'))
//  })
//  }, [])



export const Widget = () => {
    // const [widgetLink, setWidgetLink] = useState([])


    // useEffect(() => {
    //     fetch(`https://www.theunitconverter.com/unit-conversion-widget.html#:~:text=Entry%20the%20required%20value%2C%20it%20will%20get%20the,into%20the%20desired%20position%20in%20your%20websites%20code.`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setWidgetLink(data)
    //         })
    // }, [])


    return (

        <>
            <WidgetStyle>
                <Link href="https://www.theunitconverter.com/unit-conversion-widget.html#:~:text=Entry%20the%20required%20value%2C%20it%20will%20get%20the,into%20the%20desired%20position%20in%20your%20websites%20code."/>
                {/* <--Unit Conversion Script - TheUnitConverter.com /--> */}
                <WidgetStyleInternal>
                    <a href="https://www.theunitconverter.com/volume-conversion/" style="text-decoration:none;color:#FFFFFF;" rel="nofollow">VanillaJS Conversion Widget</a>
                </WidgetStyleInternal>
                <script type="text/javascript" async src="https://ww.theunitconverter.com/converter.php?l=en&c=0&a=FFFFFF&b=2D6AB4&s=volume"></script>
            </WidgetStyle>

            {/* <!-- End of Unit Conversion Script -->  */}
        </>
    )

}

{/* FROM IAN: TRYING TO IMPLEMENT A SIMPLE UNIT CONVERTER. THIS IS DEFINITELY A STRETCH GOAL */}

            {/* https://www.theunitconverter.com/unit-conversion-widget.html#:~:text=Entry%20the%20required%20value%2C%20it%20will%20get%20the,into%20the%20desired%20position%20in%20your%20websites%20code. */}

            {/* <!-- Unit Conversion Script - TheUnitConverter.com /--> */}
            
            {/* <div style="width:238px;margin:0px auto;"><div style="width:99.5%;border:1px solid #2D6AB4;border-top:none;border-bottom:none;text-align:center; height:35px;font-size:16px;padding:5px 0px 0px 0px;border-top-right-radius:5px; border-top-left-radius:5px;background-color:#2D6AB4; font-weight:bold;"><a href="https://www.theunitconverter.com/volume-conversion/" style="text-decoration:none;color:#FFFFFF;" rel="nofollow">Conversion Widget</a></div><script type="text/javascript" src="https://ww.theunitconverter.com/converter.php?l=en&c=0&a=FFFFFF&b=2D6AB4&s=volume"></script></div> */}
            
            {/* <!-- End of Unit Conversion Script --> */}


            // <!-- Unit Conversion Script - TheUnitConverter.com -->
            // <div style="width:238px;margin:0px auto;">
            //     <div style="width:99.5%;border:1px solid #2D6AB4;border-top:none;border-bottom:none;text-align:center; height:35px;font-size:16px;padding:5px 0px 0px 0px;border-top-right-radius:5px; border-top-left-radius:5px;background-color:#2D6AB4; font-weight:bold;">
            //         <a href="https://www.theunitconverter.com/" style="text-decoration:none;color:#FFFFFF;" rel="nofollow">VanillaJS Conversion Widget</a>
            //         </div><script type="text/javascript" src="https://ww.theunitconverter.com/converter.php?l=en&c=1&a=FFFFFF&b=2D6AB4&s=speed"></script>
            //         </div>
            //         <!-- End of Unit Conversion Script -->