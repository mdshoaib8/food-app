import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <img src={assets.addIcon} alt="" />
                    <p>Add Items</p>
                </div>
                <div className="sidebar-option">
                    <img src={assets.listIcon} alt="" />
                    <p>List Items</p>
                </div>
                <div className="sidebar-option">
                    <img src={assets.orderIcon} alt="" />
                    <p>Orders</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar