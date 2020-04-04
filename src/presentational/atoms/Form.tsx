import * as React from 'react';

const Form = (props) => {
    return(
        <>
            <input type="text" onInput={props.onChangeFunction} defaultValue={props.value} name="todo" className="form-text" />
        </>
    );
}

export default Form;
