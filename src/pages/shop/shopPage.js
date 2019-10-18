import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreveiw from '../../components/collection-preview/collection-preview.js';



class ShopPage extends React.Component{

constructor(){
  super();

  this.state={

collections: SHOP_DATA,
};

}

render(){

      return( <div >

            {

            this.state.collections.map(({id , ...otherCollectionProps}) => {

                return ( < CollectionPreveiw key={id} {...otherCollectionProps} />)

              })

            }

        </div> );
    }
}


export default ShopPage;
