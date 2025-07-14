import AppsStatsCard1 from '../AppsStatsCard1/AppsStatsCard1'

const AppsStats = () => {
  return (
    <div className="apps_stats_container">
      <div className="apps_stats_container_item apps_stats_container_item_1">
        <AppsStatsCard1
          title={'AVG . Order Value'}
          value={'$ 77.21'}
          data={'+ 3.16%'}
          status={'From last month'}
        />
        <AppsStatsCard1
          title={'Total Collections created'}
          value={'10'}
          data={'+ 3.16%'}
          status={'From last month'}
        />
      </div>
      <div className="apps_stats_container_item">2</div>
      <div className="apps_stats_container_item">3</div>
    </div>
  )
}

export default AppsStats
