import React from 'react';
import CollectionItem from '../collection-item/collection-item.js'

import './collection-preview.scss';


const CollectionPreveiw = ({items, title})=>{

  return(

<div className='collection-preview'>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='preview'>
  {
    items
    .filter((item,index)=> index < 4 )
    .map(({id, ...otherCollectionItem})=>{
        return(
        <CollectionItem key={id} {...otherCollectionItem} />
        );

    })

  }

  </div>
</div>


);}



export default CollectionPreveiw;
