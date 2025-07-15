import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <div className="main-layout-container">
        <Sidebar />

        <div className="main-layout-outlet">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
