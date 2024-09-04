import React, {useState, useEffect, } from "react"


function mousePointer() {
    const [mousePosition,setMousePosition] = useState({x:0,y:0})

    const updateMousePosition = (e) => {
        setMousePosition({x:e.clientX, y:e.clientY})
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, []);

    return mousePosition
}

console.log(mousePointer,"It is working")


export default mousePointer