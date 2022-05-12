import React from 'react';

function Input({placeholder,width,type}) {
    return (
        <div className="input" style={{width:width}}>
           <input placeholder={placeholder} type="text" size={40}/> 
        </div>
    );
}

export default Input;