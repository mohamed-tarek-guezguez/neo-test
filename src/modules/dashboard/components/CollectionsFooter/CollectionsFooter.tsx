import { useState } from 'react'
import ArrowLeft from '../../assets/arrow.svg'

const CollectionsFooter = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="collections_footer_container">
      {currentPage !== 1 && (
        <img
          src={ArrowLeft}
          alt="Arrow"
          className="collections_footer_container_arrow_prev"
          onClick={handlePrev}
        />
      )}
      <div className="collections_footer_container_items">
        <div
          className={`collections_footer_container_items_item ${
            currentPage === 1 ? 'collections_footer_container_items_item_active' : ''
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </div>
        <div
          className={`collections_footer_container_items_item ${
            currentPage === 2 ? 'collections_footer_container_items_item_active' : ''
          }`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </div>
        <div
          className={`collections_footer_container_items_item ${
            currentPage === 3 ? 'collections_footer_container_items_item_active' : ''
          }`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </div>
      </div>
      <img
        src={ArrowLeft}
        alt="Arrow"
        className="collections_footer_container_arrow_next"
        onClick={handleNext}
      />
    </div>
  )
}

export default CollectionsFooter
