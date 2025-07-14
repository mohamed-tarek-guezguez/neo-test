import ArrowLeft from '../../assets/arrow.svg'

const CollectionsFooter = () => {
  return (
    <div className="collections_footer_container">
      <img src={ArrowLeft} alt="Arrow" className="collections_footer_container_arrow_prev" />
      <div className="collections_footer_container_items">
        <div className="collections_footer_container_items_item collections_footer_container_items_item_active">
          1
        </div>
        <div className="collections_footer_container_items_item">2</div>
        <div className="collections_footer_container_items_item">3</div>
      </div>
      <img src={ArrowLeft} alt="Arrow" className="collections_footer_container_arrow_next" />
    </div>
  )
}

export default CollectionsFooter
