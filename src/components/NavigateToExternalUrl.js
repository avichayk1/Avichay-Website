import React,{useEffect} from "react";
const NavigateToExternalUrl =({url})=>{
    React.useEffect(()=>{
        window.location.href=url
    },[url]);
    return null
}
export default NavigateToExternalUrl