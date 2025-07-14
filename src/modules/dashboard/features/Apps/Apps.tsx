import AppsOrders from '../../components/AppsOrders/AppsOrders'
import AppsStats from '../../components/AppsStats/AppsStats'

const Apps = () => {
  return (
    <div className="apps_container">
      <div className="apps_container_body">
        <AppsStats />
        <AppsOrders />
      </div>
    </div>
  )
}

export default Apps
