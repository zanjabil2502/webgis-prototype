import { MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import { connect } from 'react-redux';

import AdministrasiMaps from './AdministrasiMaps'
import StreetMaps from './StreetMaps'
import GoToLocation from './FlyToLocation'

function MapsWrapper({showADM,showSTR}) {
    const position = [-6.13, 106.82]

    return(
        <>
            <MapContainer center={position} zoom={12} zoomControl={false} scrollWheelZoom={true} className="w-full h-full z-10">
                <ZoomControl position="bottomright" />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
        </>
    )
}

const mapStateToProps = state => ({
    showADM: state.showADM,
    showSTR: state.showSTR
  });

export default connect(mapStateToProps)(MapsWrapper);