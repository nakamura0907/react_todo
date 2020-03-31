import * as React from 'react';

const Btn = (props) => {
    return(
        <button onClick={props.onClickFunction} className="btn">{props.text}</button>
    );
}

export default Btn;
