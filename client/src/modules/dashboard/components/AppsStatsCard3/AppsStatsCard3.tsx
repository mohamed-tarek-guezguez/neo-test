import MenuIcon from '../../assets/bergermenu.svg'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const AppsStatsCard3 = () => {
  const data = [
    { name: 'Jun', value: 5000 },
    { name: 'Jul', value: 8000 },
    { name: 'Aug', value: 5800 },
    { name: 'Sep', value: 12000 },
    { name: 'Oct', value: 15000 },
    { name: 'Nov', value: 18000 },
    { name: 'Dec', value: 20000 },
    { name: 'Jan', value: 16800 },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: '#FF04B4',
            padding: '6px',
            borderRadius: '4px',
            width: '100px',
            height: '64px',
          }}
        >
          <p className="custom-tooltip-label">{`Average`}</p>
          <div className="custom-tooltip-value-content">
            <div className="custom-tooltip-value">
              <span />
              <div className="custom-tooltip-value-container">
                <p>Aug 2003</p>
                <p>$5.8k</p>
              </div>
            </div>
            <div className="custom-tooltip-value">
              <span />
              <div className="custom-tooltip-value-container">
                <p>Aug 2003</p>
                <p>$5.8k</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="apps_stats_container_item_3_card">
      <div className="apps_stats_container_item_3_card_header">
        <h3 className="apps_stats_container_item_3_card_header_title">Sales Overtime</h3>
        <div className="apps_stats_container_item_3_card_header_items">
          <p className="apps_stats_container_item_3_card_header_items_txt">Revenue</p>
          <p className="apps_stats_container_item_3_card_header_items_txt">Order</p>
          <button className="apps_stats_container_item_3_card_header_items_btn">
            <img src={MenuIcon} alt="menu" />
          </button>
        </div>
      </div>

      <div className="apps_stats_container_item_3_card_body">
        <ResponsiveContainer width="100%" height="95%" minHeight={200}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#512B8E" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#fff' }}
              tickMargin={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#fff' }}
              tickFormatter={(value) => `$${value / 1000}k`}
              domain={[0, 'dataMax + 5000']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF8F1F"
              strokeWidth={2}
              dot={{ r: 0, fill: '#FF8F1F' }}
              activeDot={{ r: 6, fill: '#FF8F1F' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AppsStatsCard3
