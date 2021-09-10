import React from "react";

export default function Character (props){
const { character } = props;
    return (<div>
           <p>{character.name}</p>
           <p>{character.height}</p>
           <p>{character.mass}</p>
           <p>{character.hair_color}</p>
           <p>{character.skin_color}</p>
        </div>)

}