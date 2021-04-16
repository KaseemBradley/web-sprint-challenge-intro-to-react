// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`
    color: ${pr => pr.theme.primaryColor};
`




const Character = ({charData}) => {
 
return (
    <StyledCharacter>
        <h4>Name: {charData.name}</h4>
        <p>Height: {charData.height}</p>
        <p>Mass: {charData.mass}</p>
        <p>Birth Year: {charData.birthYear}</p>
    </StyledCharacter>
);
};

export default Character;
