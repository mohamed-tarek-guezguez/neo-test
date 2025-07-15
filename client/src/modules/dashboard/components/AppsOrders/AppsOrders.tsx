import { useEffect, useRef, useState } from 'react'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import Menu from '../../assets/menu.svg'

interface DataType {
  key: React.Key
  OrderId: string
  CardName: string
  CopyNumber: string
  OrderDate: string
  Payment: string
  Status: string
  Action: string
}

const AppsOrders = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Order Id',
      dataIndex: 'OrderId',
      render: (text) => <>#{text}</>,
      width: 120,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'left',
    },
    {
      title: 'Copy Number',
      dataIndex: 'CopyNumber',
      width: 180,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Order Date',
      dataIndex: 'OrderDate',
      width: 150,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Payment',
      dataIndex: 'Payment',
      width: 150,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      width: 130,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      width: 130,
      render: (text) => <div style={{ color: '#FF04B4' }}>{text}</div>,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'actions',
      width: 60,
      render: () => (
        <div className="view_icon">
          <img src={Menu} alt="View" />{' '}
        </div>
      ),
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      OrderId: '2456JL',
      CardName: 'Falcon1',
      CopyNumber: '005/100',
      OrderDate: 'Jan 12 , 12:23 pm',
      Payment: '$ 134.00',
      Status: 'Transfer',
      Action: 'Processing',
    },
    {
      key: '2',
      OrderId: '2457JL',
      CardName: 'Falcon2',
      CopyNumber: '006/100',
      OrderDate: 'Jan 13 , 10:15 am',
      Payment: '$ 156.00',
      Status: 'Completed',
      Action: 'Delivered',
    },
    {
      key: '3',
      OrderId: '2458JL',
      CardName: 'Falcon3',
      CopyNumber: '007/100',
      OrderDate: 'Jan 14 , 02:45 pm',
      Payment: '$ 189.00',
      Status: 'Pending',
      Action: 'Processing',
    },
    {
      key: '4',
      OrderId: '2459JL',
      CardName: 'Falcon4',
      CopyNumber: '008/100',
      OrderDate: 'Jan 15 , 09:30 am',
      Payment: '$ 210.00',
      Status: 'Transfer',
      Action: 'Shipped',
    },
    {
      key: '5',
      OrderId: '2460JL',
      CardName: 'Falcon5',
      CopyNumber: '009/100',
      OrderDate: 'Jan 16 , 04:20 pm',
      Payment: '$ 175.00',
      Status: 'Completed',
      Action: 'Delivered',
    },
    {
      key: '6',
      OrderId: '2461JL',
      CardName: 'Falcon6',
      CopyNumber: '010/100',
      OrderDate: 'Jan 17 , 11:10 am',
      Payment: '$ 199.00',
      Status: 'Pending',
      Action: 'Processing',
    },
  ]

  const divRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setHeight(divRef.current.offsetHeight)
      }
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    if (divRef.current) {
      resizeObserver.observe(divRef.current)
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current)
      }
    }
  }, [])

  return (
    <div className="apps_orders_container">
      <div className="apps_orders_container_header">
        <h3 className="apps_orders_container_header_title">Latest Orders</h3>
        <div className="apps_orders_container_header_btns">
          <button className="apps_orders_container_header_btns_btn apps_orders_container_header_btns_btn_1">
            See All
          </button>
          <button className="apps_orders_container_header_btns_btn apps_orders_container_header_btns_btn_2">
            Filter
          </button>
          <button className="apps_orders_container_header_btns_btn apps_orders_container_header_btns_btn_3">
            Export
          </button>
        </div>
      </div>

      <div className="apps_orders_container_body" ref={divRef}>
        {height && (
          <Table<DataType>
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: 'max-content', y: height }}
            bordered={false}
            className="apps_orders_table"
            rootClassName="apps_orders_table_root"
            rowClassName="apps_orders_table_row"
          />
        )}
      </div>
    </div>
  )
}

export default AppsOrders
