import 'leaflet/dist/leaflet.css'
import MapsWrapper from './components/MapsWrapper'
import MenuAdministrasi from './components/MenuAdministrasi'

function App() {

  return(
    <div className="flex h-screen">
      <nav className="w-full fixed top-0 h-12 bg-white"></nav>
      <aside className="side-menu">
        <MenuAdministrasi />
      </aside>
      <main className="flex-1 mt-12 ml-64 bg-gray-300 w-full">
        <div className='w-full h-full'>
          <MapsWrapper />
        </div>
      </main>
    </div>
  )
}

export default App
