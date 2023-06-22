import { Polyline,Popup } from 'react-leaflet'
import { restructureDataPolyline,removeDuplicates,dataSelection } from './Utils'
import dataStreet from '../data/Jalan_geojson.json'
import { useMemo } from 'react'
import { connect } from 'react-redux';

function StreetMaps({showTypeSTR}) {
    const renderLokalStreet = useMemo(() => {
        const lokalStreet = dataSelection(dataStreet,'Jalan Lokal')
        const colorPolygon = {
            color: '#0ec799',
            weight: 2
        }
        return (
            <>
            {
                lokalStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })
    
    const renderSetapakStreet = useMemo(() => {
        const setapakStreet = dataSelection(dataStreet,'Jalan Setapak')
        const colorPolygon = {
            color: '#0f77ab',
            weight: 1
        }
    
        return (
            <>
            {
                setapakStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderKolektorStreet = useMemo(() => {
        const kolektorStreet = dataSelection(dataStreet,'Jalan Kolektor')
        const colorPolygon = {
            color: '#7a0fab',
            weight: 4
        }
    
        return (
            <>
            {
                kolektorStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderArteriStreet = useMemo(() => {
        const arteriStreet = dataSelection(dataStreet,'Jalan Arteri')
        const colorPolygon = {
            color: '#ab0f65',
            weight: 5
        }
    
        return (
            <>
            {
                arteriStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderLainStreet = useMemo(() => {
        const lainStreet = dataSelection(dataStreet,'Jalan Lain')
        const colorPolygon = {
            color: '#ab0f1c',
            weight: 3
        }
    
        return (
            <>
            {
                lainStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderTolTwoStreet = useMemo(() => {
        const tolTwoStreet = dataSelection(dataStreet,'Jalan Tol Dua Jalur Dengan Pemisah Fisik')
        const colorPolygon = {
            color: '#ab600f',
            weight: 6
        }
    
        return (
            <>
            {
                tolTwoStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderTolLayangStreet = useMemo(() => {
        const tolLayangStreet = dataSelection(dataStreet,'Jalan Tol Layang')
        const colorPolygon = {
            color: '#41ab0f',
            weight: 6
        }
    
        return (
            <>
            {
                tolLayangStreet.map((query,index) => 
                    <Polyline
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })

    const renderTolPemisahStreet = useMemo(() => {
        const tolPemisahStreet = dataSelection(dataStreet,'Jalan Tol Dua Jalur Tanpa Pemisah Fisik')
        const colorPolygon = {
            color: '#0b043b',
            weight: 6
        }
    
        return (
            <>
            {
                tolPemisahStreet.map((query,index) => 
                    <Polyline 
                        key={index}
                        pathOptions={colorPolygon} 
                        positions={restructureDataPolyline(query)}
                    >
                    </Polyline>
                )
            }
            </>
        )
    })
    

    return (
       <>
       {
        showTypeSTR[0]&&
        renderLokalStreet
       }
       {
        showTypeSTR[1]&&
        renderSetapakStreet
       }
       {
        showTypeSTR[2]&&
        renderKolektorStreet
       }
       {
        showTypeSTR[3]&&
        renderArteriStreet
       }
       {
        showTypeSTR[4]&&
        renderLainStreet
       }
       {
        showTypeSTR[5]&&
        renderTolTwoStreet
       }
       {
        showTypeSTR[6]&&
        renderTolLayangStreet
       }
       {
        showTypeSTR[7]&&
        renderTolPemisahStreet
       }
       </>
    )
}

const mapStateToProps = state => ({
    indexLocADM: state.indexLocADM,
    locationADM: state.locationADM,
    showADM: state.showADM,
    showTypeSTR: state.showTypeSTR,
    showSTR: state.showSTR
  });

export default connect(mapStateToProps)(StreetMaps);