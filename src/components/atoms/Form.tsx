import * as React from 'react';

interface IProps {
    onChangeFunction: any;
    value: String;
}

const Form = (props) => {
    return(
        <>
            <input type="text" onChange={props.onChangeFunction} value={props.value} name="todo" className="form-text" />
        </>
    );
}

export default Form;
