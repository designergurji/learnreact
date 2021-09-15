import React, {} from 'react'
import {Container} from '../../globalStyles'
import {Filter, FilterRow, FilterItem} from './StoreFiltersElm'


const StoreFilters = ({ dataItems, newFilter }) => {
 

    const newList = () =>{
        let currentData = dataItems;
        const uniqueList = [
          ...new Set(
            currentData.map((filterCate) =>{
            return filterCate.category;
            })
          )];
         return uniqueList;
    };
    
    return (
        <>  
           <Filter>
               <Container>
                   
                   <FilterRow>
                           
                       {
                         newList().map((items, i)=>
                            <FilterItem  key={i} onClick={() => newFilter(items)}>
                              {items}
                            </FilterItem>
                         )  
                       }
                       
                       </FilterRow>
               
               </Container>

           </Filter>
            
        </>
    )
}
export default StoreFilters;
