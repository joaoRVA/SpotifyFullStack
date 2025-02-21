import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({title, items, itemArray, path, idPath}) => {

  // const pathname = useLocation().pathname;
  const {pathname} = useLocation()

  const isHome = pathname === "/"
  // se estiver na HomePage, exibe items, senão exibe todos os items (Infinity)
  const finalItems = isHome ? items : Infinity

  return (
    <div className="item-list">
       <div className='item-list__header'>
            <h2>{title}</h2>
            {isHome ? <Link to={path} className='main__link' >Mostrar Todos</Link>: null}
            
        </div>

        <div className='item-list__container'>   
            {itemArray.filter((_, index) => index < finalItems).map((currObj, i) => 
            <SingleItem 
            key={`${currObj}_${i}`}
            idPath={idPath}
            // id={currObj.id}
            // name={currObj.name}
            // image={currObj.image}
            // banner={currObj.banner}
            
            // spread operator
            {...currObj} />)}
        </div>     
    </div>
  )
}

export default ItemList;