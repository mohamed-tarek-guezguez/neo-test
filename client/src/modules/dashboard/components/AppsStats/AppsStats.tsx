import AppsStatsCard1 from '../AppsStatsCard1/AppsStatsCard1'
import AppsStatsCard2 from '../AppsStatsCard2/AppsStatsCard2'
import AppsStatsCard3 from '../AppsStatsCard3/AppsStatsCard3'

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
      <div className="apps_stats_container_item apps_stats_container_item_1">
        <AppsStatsCard2
          title={'Total created Card'}
          value={'50'}
          data={'5'}
          subtitle={'New Cards'}
          type={'success'}
        />
        <AppsStatsCard2
          title={'Total Users Account'}
          value={'850'}
          data={'- 1.18%'}
          subtitle={'From last month'}
          type={'danger'}
        />
      </div>
      <div className="apps_stats_container_item">
        <AppsStatsCard3 />
      </div>
    </div>
  )
}

export default AppsStats
