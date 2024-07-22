const { useState } = require("react")

const hocSeachBar = ( Component ) =>{
    return function () {
        const [productos,setProductos]=useState([])
        const [consulta,setConsulta] = useState("")
    }
}