// Write your Character component here
import React from 'react';

const Character = (props) => {
const {name, height, mass, birthYear} = props;

return (
    <div>
        <h4>Name: {name}</h4>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Birth Year: {birthYear}</p>
    </div>
);
};

export default Character;
