import React from 'react'
import '../assets/css/header.css'  ///import css 
export function Header(props){  //props thoonng tin truyen vao neu sài .
    return (
        <div className="header-area">
            <h1 className="red"> 😹 Search for your favorite emoji 😺</h1>
        </div>
    )
}



//cach khac 
//export{Header} de chay code\
// export default app; thì bên import không sài {}