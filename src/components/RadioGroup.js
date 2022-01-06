import React from 'react';
import PropType from 'prop-types';

const RadioGroup = (props) => {

    return (
        <div>
        <span>{props.title} </span>
        <span>
            {
                props.options.map((option) => {
                    return (
                        <label key={option}>
                            <input 
                                type={props.type} 
                                name={props.name} 
                                value={option}
                                onChange = {props.onChange}
                                checked = {option === props.selected}
                                 />{option}
                        </label>
                    );
                })
            }
        </span>
    </div>
    );
};

RadioGroup.propTypes = {
    name: PropType.string,
    value: PropType.string,
    checked: PropType.bool
}

RadioGroup.defaultProps = {
    type: 'radio'
}




export default RadioGroup;