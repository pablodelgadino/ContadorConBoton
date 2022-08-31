import ItemCount from '../ItemCount/ItemCount';
import Title from '../Title/title';
import React from 'react';

export const ItemListContainer = ({texto}) => {
    const onAdd = (quantity) => {
        console.log( `Agregaste ${quantity} unidades al carrito`)
    }

    return (
        <>
        <Title  greeting={texto}/>
        <ItemCount initial ={1} stock={10} onAdd={onAdd}/>
        </>
       
    );
}

export default ItemListContainer;