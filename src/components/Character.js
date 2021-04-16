// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`
    color: red;
`




const Character = ({charData, height, mass, birthYear}) => {
 
return (
    <StyledCharacter>
        <h4>Name: {charData.name}</h4>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Birth Year: {birthYear}</p>
    </StyledCharacter>
);
};

export default Character;
