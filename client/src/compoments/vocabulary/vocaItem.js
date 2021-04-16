import React from 'react'
function VocaItem(props) {
    const textVoca = {
        textDecoration: props.vocaProps.completed ? 'line-through' : 'none'
    }
    return (
        <li className="list-group-item" style={textVoca}
            onChange={props.markcomplete.bind(this, props.vocaProps._id)}
            checked={props.vocaProps.completed}>
            <input type="checkbox" />
            <span className="ml-10">{props.vocaProps.title}</span>
            <button type="button" className="btn btn-danger float-btn"
                onClick={props.deleteVoca.bind(this, props.vocaProps._id)}
            >Delete</button>
        </li>
    );
}

export default VocaItem;