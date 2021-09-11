import React from 'react';

const Comp = (props) => {
    return (
        <section className = "Weather" id={props.id}>
            <h3>{props.title}</h3>
        </section>
    )
}

export default Comp;