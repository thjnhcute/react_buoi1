import { useState } from "react";

function Car(){
    const [nameCar,setnameCar] = useState("Ford");
    const [colorCar,setcolorCar]= useState("green");
    const [year,setyearCar] = useState("2020");

    

   


     const updateYear = (newyear) => {
        setyearCar(newyear);
     }
     const updateYearClick = ()=>{
        const inputYear = document.getElementById('yearInput').value;
        updateYear(inputYear);
     }

    return(
        <>
            Show information of Car : {nameCar}, It is a {colorCar} from {year};<br/>
            Update Year of Car : <input type = "number" id="yearInput"/>
            <input  onClick={updateYearClick} type="button" value ="Update Year"/>
            
        </>
    )
}

export  {Car};