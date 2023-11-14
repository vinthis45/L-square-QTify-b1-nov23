import React from 'react'
import mainLogo from "../../../Assets/Logo.png";
export default function Logo() {
    return (
        <div style={{display: 'flex', margin: '14px'}}>
            <img src={mainLogo} alt="Logo" width={67} />
        </div>
    )
}
