import React from 'react'
import './widgets.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
function Widgets({type}) {

    const amount =100
    const diff=20
    let data;
      switch(type)
      {
          case "user":
              
          data={

            title:"USERS",
            isMoney:false,
            link:"See All User",
            icon:<PersonOutlinedIcon className='icon'  style={{color:"crimson",backgroundColor:"rgba(225,0,0,0.2)"}}/>
          }
          break;
          default:
              break;
              case "order":
              
                data={
      
                  title:"ORDER",
                  isMoney:false,
                  link:"View All Order",
                  icon:<ShoppingCartOutlinedIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128, 0, 128, 0.315)"}}/>
                }
                break;
              case "erarning":
              
                data={
      
                  title:"ERARNING",
                  isMoney:true,
                  link:"View All Erarning",
                  icon:<AttachMoneyOutlinedIcon className='icon'  style={{color:"green",backgroundColor:"rgba(80, 230, 46, 0.256)"}}/>
                }
                break;
              case "balanc":
              
                data={
      
                  title:"BALANC",
                  isMoney:false,
                  link:"View All balanc",
                  icon:<AccountBalanceOutlinedIcon className='icon'  style={{color:"blue",backgroundColor:"rgba(46, 101, 230, 0.256"}}/>
                }
                break;

      }

  return (
    <div className='widget'>
        <div className="left"> 
           <span className='titel'>{data.title}</span>
           <span className='counter'>{data.isMoney&&"$"}{amount}</span>
           <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets