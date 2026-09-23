import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='log' src={assets.logo} alt="" />
            <img className='profile' src={assets.profileImage} alt="" />
        </div>
    )
}

export default Navbar