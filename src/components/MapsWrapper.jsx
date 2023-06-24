import { MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import { connect } from 'react-redux';

import AdministrasiMaps from './AdministrasiMaps'
import StreetMaps from './StreetMaps'
import GoToLocation from './FlyToLocation'
import { listMaps } from './Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function MapsWrapper({showADM,showSTR}) {
    const [isShow,setIsShow] = useState(false)
    const [indexMap,setIndexMap] = useState(0)
    const position = [-6.13, 106.82]

    const handleBoxClick = (event,index) => {
        event.stopPropagation()
        setIndexMap(index)
      };
    return(
        <div className='w-full h-full relative'>
            <MapContainer center={position} zoom={12} maxZoom={20} zoomControl={false} scrollWheelZoom={true} className="w-full h-full z-10">
                <ZoomControl position="bottomright" />
                <TileLayer
                    attribution={listMaps[indexMap].attribution}
                    url={listMaps[indexMap].url}
                />
                <GoToLocation />
                {
                    showADM && 
                    <AdministrasiMaps />
                }
                {
                    showSTR && 
                    <StreetMaps />
                }
            </MapContainer>
            <div className={`w-12 h-12 bg-white ${isShow? "rounded-t-lg": "hover:bg-gray-100 rounded-lg"} fixed top-16 right-6 z-20 shadow-xl  flex justify-center items-center`} onClick={() => setIsShow(!isShow)}>
                <FontAwesomeIcon icon={faLayerGroup} className='w-6 h-6 text-primary' />
                <div className={`w-12 h-fit bg-white fixed top-28 z-10 ${isShow?'flex rounded-b-lg':'hidden'} flex-col justify-between shadow-xl`}>
                    <div className='w-full h-fit p-2 bg-white hover:bg-gray-100' onClick={(e)=>handleBoxClick(e,0)}>
                        <div className="w-full h-8 bg-[url('./assets/img/Type1.png')] bg-cover bg-bottom rounded-md" />
                    </div>
                    <div className='w-full h-fit p-2 bg-white hover:bg-gray-100' onClick={(e)=>handleBoxClick(e,1)}>
                        <div className="w-full h-8 bg-[url('./assets/img/Type2.png')] bg-cover bg-bottom rounded-md" />
                    </div>
                    <div className='w-full h-fit p-2 bg-white hover:bg-gray-100' onClick={(e)=>handleBoxClick(e,2)}>
                        <div className="w-full h-8 bg-[url('./assets/img/Type3.png')] bg-cover bg-bottom rounded-md" />
                    </div>
                    <div className={`w-full h-fit p-2 bg-white ${isShow?'rounded-b-lg':''} hover:bg-gray-100`} onClick={(e)=>handleBoxClick(e,3)}>
                        <div className="w-full h-8 bg-[url('./assets/img/Type4.png')] bg-cover bg-bottom rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showADM: state.showADM,
    showSTR: state.showSTR
  });

export default connect(mapStateToProps)(MapsWrapper);