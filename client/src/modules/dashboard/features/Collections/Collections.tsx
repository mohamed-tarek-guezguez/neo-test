import CollectionsBody from '../../components/CollectionsBody/CollectionsBody'
import CollectionsFooter from '../../components/CollectionsFooter/CollectionsFooter'
import CollectionsHeader from '../../components/CollectionsHeader/CollectionsHeader'

const Collections = () => {
  return (
    <div className="collections_container">
      <div className="collections_container_body">
        <CollectionsHeader />
        <CollectionsBody />
        <CollectionsFooter />
      </div>
    </div>
  )
}

export default Collections
