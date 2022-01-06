import React from 'react';
import PropType from 'prop-types';

const Input = (props) => {

    return (
        <div>
            <span><label>{props.title}</label></span>
            <spam>
                <input 
                    type={props.type} 
                    name={props.name} 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange}
                />
            </spam>
        </div>
    );
};

Input.propTypes = {
    type: PropType.string,
    name: PropType.string,
    placeholder: PropType.string,
    value: PropType.string,
}


Input.defaultProps = {
    type: 'text'
}

export default Input;