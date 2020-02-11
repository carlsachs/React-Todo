import React from 'react';
import styled from "styled-components";

const Main = styled.div`
    background-color: white;
    .onClick() {
        text-decoration: none;
    }
`;


function Todo (props){

    return (
        <Main
            onClick={() => props.toggleItem(props.item.id)}
            className={`item${props.item.completed ? ' completed ' : ''}`}
            style={{textDecoration: 'underline'}}
        >
            <p>{props.item.name}</p>
        </Main>
    );
}
export default Todo;