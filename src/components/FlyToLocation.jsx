import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet'
import { connect } from 'react-redux';

function GoToLocation({locationADM,indexLocADM}) {
    const map = useMapEvents({})
    const position = [-6.13, 106.82]

    useEffect(() => {
        if (locationADM.length > 0 && indexLocADM!==null) {
            map.flyTo(locationADM[indexLocADM],13)
        } else if ( indexLocADM === null ) {
            map.flyTo(position,12)
        }
    },[locationADM,indexLocADM])

    return null
}

const mapStateToProps = state => ({
    locationADM: state.locationADM,
    indexLocADM: state.indexLocADM
  });

export default connect(mapStateToProps)(GoToLocation);