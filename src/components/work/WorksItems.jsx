import React from 'react'
import ItemTag from './ItemTag'



const WorksItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>


        <div className='work__tags'>
        {item.tags.map((tag) => {
          return <ItemTag tag={tag}  />;
        })}
      </div>
        
        
        
        <a href='#' className='work__button'>
            Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorksItems