import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Featured() {
 
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="titel">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredCart">
            </div>
        </div>
    </div>
  )
}

export default Featured