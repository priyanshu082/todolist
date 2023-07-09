import React from 'react'

const List = ({itemList,setItemList}) => {

const removeItem= key => {
    const newList = itemList.filter(itemObj => {
    return itemObj.key !== key 
   })
   setItemList(newList);
  }
  
  return (
    <div>
  {itemList.map(itemObj=>{
    return (
      <div className='flex flex-row justify-between'>
      <p>{itemObj.item}</p>
      <button onClick={()=>removeItem(itemObj.key)}>-</button>
      </div>
    )  
  })
}
    </div>
  )
}

export default List