// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`
    color: ${pr => pr.theme.primaryColor};
    padding-top: ${pr => pr.theme.paddingTop.medium};
    width: 19%;
    margin-left: 40%;
    &:hover {
        transform: scale(1.3);
        transition: all 0.7s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`




const Character = ({charData}) => {
 
return (
    <StyledCharacter>
        <h4>Name: {charData.name}</h4>
        <p>Height: {charData.height}</p>
        <p>Mass: {charData.mass}</p>
        <p>Birth Year: {charData.birth_year}</p>
    </StyledCharacter>
);
};

export default Character;
