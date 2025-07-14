import DbIcon from '../../assets/db.png'

interface Props {
  title: string
  value: string
  data: string
  status: string
}

const AppsStatsCard1 = ({ title, value, data, status }: Props) => {
  return (
    <div className="apps_stats_container_item_1_card">
      <div className="apps_stats_container_item_1_card_header">
        <div className="apps_stats_container_item_1_card_header_title">{title}</div>
        <img src={DbIcon} alt="db" />
      </div>

      <div className="apps_stats_container_item_1_card_body">
        <h3 className="apps_stats_container_item_1_card_body_value">{value}</h3>
        <div className="apps_stats_container_item_1_card_body_status">
          <div className="apps_stats_container_item_1_card_body_status_data">
            <span>{data} </span> {status}
          </div>
          <div className="apps_stats_container_item_1_card_body_status_seeall">See All</div>
        </div>
      </div>
    </div>
  )
}

export default AppsStatsCard1
