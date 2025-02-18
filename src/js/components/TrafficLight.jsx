import React, {useState} from "react";

const TrafficLight = () => {

    const [activeColor, setActiveColor] = useState("green");
    const [colors, setColors] = useState(["red", "yellow", "green"])

    const setActiveColorHandler = (e) => {
        setActiveColor(e.target.classList.value.split(' ')[1])
    };

    const addPurpleHandler = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    }

    return (

        <div className="container">
            <div id="semaforo" className="semaforo mx-auto">
                {colors.map((color)=>(
                    <div key={color} onClick={setActiveColorHandler} className={`light ${color} ${activeColor === color ? 'active' : ''}`}></div>    
                ))}

            </div>
            <div className="btn btn-primary mx-auto my-3 " onClick={() => setActiveColor(colors[Math.floor(Math.random() * colors.length)])}>Change color</div>
            <div className="btn btn-success mx-2" onClick={addPurpleHandler}>Add Purple</div>
        </div>

    
    );
};

export default TrafficLight;