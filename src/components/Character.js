import React from "react";
import styled from "styled-components";


const StyledCharacter = styled.div`
	color: blue;
    display: table-row;

    &:hover{
        color: olive;
    }
`

export default function Character(props) {
    const { character } = props;
    return (
        <StyledCharacter>
            <div class="divCell" title={`Created: ${character.created}`}>{character.name}</div>
            <div class="divCell">{character.height}</div>
            <div class="divCell">{character.mass}</div>
            <div class="divCell">{character.hair_color}</div>
            <div class="divCell">{character.skin_color}</div>
            <div class="divCell">{character.eye_color}</div>
            <div class="divCell">{character.birth_year}</div>
            <div class="divCell">{character.gender}</div>
        </StyledCharacter>
    )

}