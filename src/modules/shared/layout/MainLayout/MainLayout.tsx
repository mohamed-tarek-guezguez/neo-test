import Navbar from '../../components/Navbar/Navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <div className="main-layout-container">
        <div className="sidebar">sidebar</div>

        <div className="main-layout-outlet">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
