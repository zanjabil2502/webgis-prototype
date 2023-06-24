import 'leaflet/dist/leaflet.css'
import MapsWrapper from './components/MapsWrapper'
import MenuAdministrasi from './components/MenuAdministrasi'
import MenuStreet from './components/MenuStreet'

function App() {

  return(
    <div className="flex flex-col h-screen w-screen">
      <nav className="w-full h-12 bg-white flex justify-start items-center px-4">
        <div className='w-fit h-full flex justify-start items-center gap-x-2'>
          <div className='w-8 h-8 bg-primary'></div>
          <span className='text-lg font-bold text-primary'>WEBGIS PROTOTYPE</span>
        </div>
      </nav>
      <div className='w-full h-full flex bg-gray-700 overflow-hidden'>
        <aside className="side-menu">
          <div className='w-full h-fit flex flex-col gap-y-1'>
            <MenuAdministrasi />
            <MenuStreet />
          </div>
          <div className='w-full h-fit flex flex-col justify-center items-center'>
            <span className='text-lg text-gray-500 font-bold'>MENU DATA</span>
            <span className='text-sm text-gray-500 '>Pilih data untuk menampilkan di peta</span>
          </div>
        </aside>
        <main className="flex-1 bg-gray-300 w-full h-full">
          <div className='w-full h-full'>
            <MapsWrapper />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
