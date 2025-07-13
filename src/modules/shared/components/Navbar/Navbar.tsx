import { Input } from 'antd'
import SearchIcon from '../../assets/icons/navbar/search.png'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Input
        placeholder="Search Here"
        prefix={<img src={SearchIcon} alt="Search Icon" className="navbar_container_search_icon" />}
        className="navbar_container_input"
      />

      <div className="navbar_container_info">ok</div>
    </div>
  )
}

export default Navbar
