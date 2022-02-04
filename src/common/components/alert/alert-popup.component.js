import React from "react";
import './alert-popup.component.css';

function AlertPopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button type="button" className="close-btn" onClick={() => {  }}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AlertPopUp;