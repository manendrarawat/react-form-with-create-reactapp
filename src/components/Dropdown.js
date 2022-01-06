import React from 'react';
import PropType from 'prop-types';

const DropDown = (props) => {

    return (
        <div>
            <span><label>{props.title}</label></span>
            <spam>
                <select
                    name={props.name} 
                    value={props.value}
                    onChange={props.onChange}
                >
                <option value=''>{props.placeholder}</option>
                {
                    props.options.map((option, index) =>{
                        return <option value={option} key={index}>{option}</option>
                    })
                }
                </select>
            </spam>
        </div>
    );
};

DropDown.propTypes = {
    name: PropType.string,
    placeholder: PropType.string,
    value: PropType.string,
}



export default DropDown;