interface Props {
  title: string
  value: string
  data: string
  subtitle: string
  type?: 'success' | 'danger'
}

const AppsStatsCard2 = ({ title, value, data, subtitle, type }: Props) => {
  return (
    <div className="apps_stats_container_item_2_card">
      <div className="apps_stats_container_item_2_card_header">
        <h3 className="apps_stats_container_item_2_card_header_title">{title}</h3>
        <div className="apps_stats_container_item_2_card_header_seeall">See All</div>
      </div>
      <h3 className="apps_stats_container_item_2_card_body">{value}</h3>
      {type === 'success' ? (
        <div className="apps_stats_container_item_2_card_footer">
          {data} <span>&nbsp;{subtitle}</span>
        </div>
      ) : (
        <div className="apps_stats_container_item_2_card_footer_danger">
          {data} <span>&nbsp;{subtitle}</span>
        </div>
      )}
    </div>
  )
}

export default AppsStatsCard2
