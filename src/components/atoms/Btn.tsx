import * as React from 'react';

interface IProps {
    onClickFunction: () => void;
    text: String;
}

const Btn = (props: IProps) => {
    return(
        <button onClick={props.onClickFunction} className="btn">{props.text}</button>
    );
}

export default Btn;
