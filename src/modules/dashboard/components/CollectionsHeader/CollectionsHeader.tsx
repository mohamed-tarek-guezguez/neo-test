import f1 from '../../assets/f1.svg'
import f2 from '../../assets/f2.svg'

const CollectionsHeader = () => {
  return (
    <div className="collections_header_container">
      <h3 className="collections_header_container_title">Total Created Collections</h3>

      <div className="collections_header_container_actions">
        <div className="collections_header_container_actions_btns">
          <button className="collections_header_container_actions_btns_btn">
            <img src={f1} alt="f1" />
          </button>
          <button className="collections_header_container_actions_btns_btn">
            <img src={f2} alt="f2" />
          </button>
        </div>
        <button className="collections_header_container_actions_btn_all">All</button>
        <button className="collections_header_container_actions_btn_export">Export Data</button>
      </div>
    </div>
  )
}

export default CollectionsHeader
