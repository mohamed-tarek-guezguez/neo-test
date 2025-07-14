import LogoImg from '../../assets/images/sidebar/logo.png'
import i1 from '../../assets/icons/sidebar/i1.svg'
import i2 from '../../assets/icons/sidebar/i2.svg'
import i3 from '../../assets/icons/sidebar/i3.svg'
import i4 from '../../assets/icons/sidebar/i4.svg'
import i5 from '../../assets/icons/sidebar/i5.svg'
import settings from '../../assets/icons/sidebar/settings.svg'
import logout from '../../assets/icons/sidebar/logout.svg'
import { Tooltip } from 'antd'

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <img src={LogoImg} alt="logo" className="sidebar_container_logo" />

      <div className="sidebar_container_icons">
        <Tooltip placement="right" title={'Home'}>
          <img src={i1} alt="iconitem" className="sidebar_container_icon" />
        </Tooltip>

        <Tooltip placement="right" title={'Apps'}>
          <img src={i2} alt="iconitem" className="sidebar_container_icon" />
        </Tooltip>

        <Tooltip placement="right" title={'Shopping Bag'}>
          <img src={i3} alt="iconitem" className="sidebar_container_icon" />
        </Tooltip>

        <Tooltip placement="right" title={'Collections'}>
          <img src={i4} alt="iconitem" className="sidebar_container_icon" />
        </Tooltip>

        <Tooltip placement="right" title={'Images'}>
          <img src={i5} alt="iconitem" className="sidebar_container_icon" />
        </Tooltip>
      </div>

      <div className="sidebar_container_settings">
        <Tooltip placement="right" title={'Settings'}>
          <img src={settings} alt="settings" className="sidebar_container_icon" />
        </Tooltip>

        <Tooltip placement="right" title={'Logout'}>
          <img src={logout} alt="logout" className="sidebar_container_icon" />
        </Tooltip>
      </div>
    </div>
  )
}

export default Sidebar
