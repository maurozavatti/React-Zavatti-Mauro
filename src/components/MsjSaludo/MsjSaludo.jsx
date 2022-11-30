import React from 'react';
import { Link } from 'react-router-dom';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Button from '../Button/Button';

function MsjSaludo() {
    return (
    <FlexWrapper>
        <div>
        <h1>Gracias por Elegirnos!!</h1>
        <Link to="/"><Button>Volver al Catalogo</Button></Link>
        </div>
    </FlexWrapper>
)
}

export default MsjSaludo;