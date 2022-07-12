import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'
function List({list}) {
const listRef=useRef()
const [next,setNext]=useState(0)
const [clicked,setclickedt]=useState(false)

  
  const handelClick=(direction)=>{
    setclickedt(true)

    let distance=listRef.current.getBoundingClientRect().x-50
    if(direction==="left"&&next>0)
    {
      setNext(next-1)
      console.log( listRef.current)
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction==="right"&&next<5)
    {
      setNext(next+1)
      console.log( listRef.current)
      listRef.current.style.transform=`translateX(${-230+distance}px)`
    }
  }
  return (
    <div className='list'>
        <span className="listTitel">{list.titel}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined style={{"display":!clicked&&'none'}} onClick={()=>handelClick("left")} className="slideArrow left"/>
            <div className="container" ref={listRef}>
              {list.content.map((item,i)=>(
                <ListItem index={i} item={item}/>
              ))}
              
           
            </div>
            <ArrowForwardIosOutlined onClick={()=>handelClick("right")} className="slideArrow right"/>
        </div>
    </div>
  )
}

export default List