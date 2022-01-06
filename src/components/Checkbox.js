import React from 'react';
import PropType from 'prop-types';

const Checkbox = (props) => {

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
                                checked = {props.selected.indexOf(option) > -1}
                                 /> {option} &nbsp;
                        </label>
                    );
                })
            }
        </span>
    </div>
    );
};

Checkbox.propTypes = {
    name: PropType.string,
    value: PropType.string,
    checked: PropType.bool
}

Checkbox.defaultProps = {
    type: 'checkbox'
}




export default Checkbox;