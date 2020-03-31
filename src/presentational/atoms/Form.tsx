import * as React from 'react';

const Form = (props) => {
    return(
        <>
            <input type="text" onInput={props.onInputFunction} value={props.value} name="todo" className="form" />
        </>
    );
}

export default Form;
