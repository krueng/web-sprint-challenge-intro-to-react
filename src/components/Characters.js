import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const { characters } = props;

    return (
        <>
            {characters.map(character => {
                return <Character
                    key={character.name}
                    character={character}
                />
            })}
        </>
    );
};

export default Characters;