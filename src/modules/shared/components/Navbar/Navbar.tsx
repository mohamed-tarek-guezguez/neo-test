import { Input } from 'antd'
import SearchIcon from '../../assets/icons/navbar/search.png'
import AvatarImg from '../../assets/images/navbar/avatar.jpg'
import NotifIcon from '../../assets/icons/navbar/notif.svg'
import ModeIcon from '../../assets/icons/navbar/mode.svg'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Input
        placeholder="Search Here"
        prefix={<img src={SearchIcon} alt="Search Icon" className="navbar_container_search_icon" />}
        className="navbar_container_input"
      />

      <div className="navbar_container_info">
        <div className="navbar_container_info_icons_container">
          <img src={ModeIcon} alt="" className="navbar_container_info_icons" />
          <img src={NotifIcon} alt="" className="navbar_container_info_icons" />
        </div>
        <img src={AvatarImg} alt="" className="navbar_container_info_avatar" />
      </div>
    </div>
  )
}

export default Navbar
