import React from 'react';
import PropType from 'prop-types';

const TextArea = (props) => {

    return (
        <div>
            <span><label>{props.title}</label></span>
            <spam>
                <textarea 
                    name={props.name} 
                    value={props.value}
                    onChange={props.onChange}
                />
            </spam>
        </div>
    );
};

TextArea.propTypes = {
    type: PropType.string,
    name: PropType.string,
    placeholder: PropType.string,
    value: PropType.string,
    rows: PropType.number
}


TextArea.defaultProps = {
    rows: 5
}

export default TextArea;