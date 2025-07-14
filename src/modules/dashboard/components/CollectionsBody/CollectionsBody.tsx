import { Table } from 'antd'
import type { TableColumnsType, TableProps } from 'antd'
import Eye from '../../assets/eye.svg'
import { useEffect, useRef, useState } from 'react'

interface DataType {
  key: React.Key
  CollectionId: string
  CollectionName: string
  issuerName: string
  ExpectedReleaseDate: string
  NumberOfCardDesigns: string
  Category: string
  Status: string
}

const CollectionsBody = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Collection Id',
      dataIndex: 'CollectionId',
      render: (text) => <>#{text}</>,
      width: 120,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Collection Name',
      dataIndex: 'CollectionName',
      width: 180,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Issuer Name',
      dataIndex: 'issuerName',
      width: 150,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Expected Release Date',
      dataIndex: 'ExpectedReleaseDate',
      width: 180,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Number Of Card Designs',
      dataIndex: 'NumberOfCardDesigns',
      width: 200,
      onHeaderCell: () => ({
        style: { whiteSpace: 'nowrap' },
      }),
      align: 'center',
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      width: 120,
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
      title: '',
      dataIndex: 'action',
      width: 60,
      render: () => (
        <div className="view_icon">
          <img src={Eye} alt="View" />
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
      CollectionId: '1',
      CollectionName: 'Team Falcons #1',
      issuerName: 'MEDKSA001',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '5',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '2',
      CollectionId: '2',
      CollectionName: 'Team Falcons #2',
      issuerName: 'MEDKSA002',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '3',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '3',
      CollectionId: '3',
      CollectionName: 'Team Falcons #3',
      issuerName: 'MEDKSA003',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '4',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '4',
      CollectionId: '4',
      CollectionName: 'Team Falcons #4',
      issuerName: 'MEDKSA004',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '2',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '5',
      CollectionId: '5',
      CollectionName: 'Team Falcons #5',
      issuerName: 'MEDKSA005',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '6',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '6',
      CollectionId: '6',
      CollectionName: 'Team Falcons #6',
      issuerName: 'MEDKSA006',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '1',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '7',
      CollectionId: '7',
      CollectionName: 'Team Falcons #7',
      issuerName: 'MEDKSA007',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '8',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '8',
      CollectionId: '8',
      CollectionName: 'Team Falcons #8',
      issuerName: 'MEDKSA008',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '7',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '9',
      CollectionId: '9',
      CollectionName: 'Team Falcons #9',
      issuerName: 'MEDKSA009',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '10',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '10',
      CollectionId: '10',
      CollectionName: 'Team Falcons #10',
      issuerName: 'MEDKSA010',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '9',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '11',
      CollectionId: '11',
      CollectionName: 'Team Falcons #11',
      issuerName: 'MEDKSA011',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '12',
      Category: 'Esport',
      Status: 'In production',
    },
    {
      key: '12',
      CollectionId: '12',
      CollectionName: 'Team Falcons #12',
      issuerName: 'MEDKSA012',
      ExpectedReleaseDate: 'DD/MM/YYYY',
      NumberOfCardDesigns: '11',
      Category: 'Esport',
      Status: 'In production',
    },
  ]

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
  }

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
    <div className="collections_body" ref={divRef}>
      {height && (
        <Table<DataType>
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={data}
          pagination={false}
          // scroll={{ x: 'max-content', y: 'calc(100vh - 400px)' }}
          scroll={{ x: 'max-content', y: height - 55 }}
          bordered={false}
          className="collections_table"
          rootClassName="collections_table_root"
          rowClassName="collections_table_row"
        />
      )}
    </div>
  )
}

export default CollectionsBody
