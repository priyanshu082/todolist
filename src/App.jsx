import { useState } from 'react'
import './App.css'
import List from './List'
import './index.css';


function App() {
  const [currentItem, setCurrentItem] = useState(null)
  const [itemList,setItemList]= useState([])

  const onChangehandler=(e)=>{
     console.log("current value",e.target.value);
     setCurrentItem(e.target.value)
  }

  const addToList=()=>{
    setItemList([...itemList,{item:currentItem, key:Date.now()}]);
    setCurrentItem("")  
  }

  return (
    <div>
       <div className='bg-pink-400'>
        <input
        value={currentItem}
        onChange={onChangehandler}
        />
        <button onClick={addToList}>+</button>
       </div>
       <List 
       itemList={itemList} setItemList={setItemList}/>
        </div>
  )
}

export default App
