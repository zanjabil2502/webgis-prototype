import { Polyline,Popup } from 'react-leaflet'
import { restructureDataPolyline,dataSelection,dataLengthStreet,dataStreetType,dataTotalStreet } from './Utils'
import dataStreet from '../data/Jalan_geojson.json'
import { useMemo } from 'react'
import { connect } from 'react-redux';
import { useRef } from 'react';
import { useEffect } from 'react';

function StreetMaps({showTypeSTR,showPopupSTR}) {
    const polylineRef = useRef([])
    console.log(showPopupSTR)

    useEffect(() => {
        showPopupSTR.map((query,index)=>{
            if(query) {
                if (showTypeSTR[index]) {
                    polylineRef.current[index].current.openPopup()
                    setTimeout(() => {
                        polylineRef.current[index].current.closePopup()
                    }, 7000);
                }
            } else {
                if (showTypeSTR[index]) {
                    polylineRef.current[index].current.closePopup()
                }
            }
        })
    },[showPopupSTR])

    const renderLokalStreet = useMemo(() => {
        polylineRef.current[0] = useRef(null);
        const lokalStreet = dataSelection(dataStreet,'Jalan Lokal')
        const colorPolygon = {
            color: '#0ec799',
            weight: 2
        }
        return (
            <>
                <Polyline
                    ref={polylineRef.current[0]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(lokalStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[0]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[0]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[0])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })
    
    const renderSetapakStreet = useMemo(() => {
        polylineRef.current[1] = useRef(null);
        const setapakStreet = dataSelection(dataStreet,'Jalan Setapak')
        const colorPolygon = {
            color: '#0f77ab',
            weight: 1
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[1]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(setapakStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[1]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[1]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[1])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderKolektorStreet = useMemo(() => {
        polylineRef.current[2] = useRef(null);
        const kolektorStreet = dataSelection(dataStreet,'Jalan Kolektor')
        const colorPolygon = {
            color: '#7a0fab',
            weight: 4
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[2]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(kolektorStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[2]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[2]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[2])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderArteriStreet = useMemo(() => {
        polylineRef.current[3] = useRef(null);
        const arteriStreet = dataSelection(dataStreet,'Jalan Arteri')
        const colorPolygon = {
            color: '#ab0f65',
            weight: 5
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[3]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(arteriStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[3]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[3]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[3])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderLainStreet = useMemo(() => {
        polylineRef.current[4] = useRef(null);
        const lainStreet = dataSelection(dataStreet,'Jalan Lain')
        const colorPolygon = {
            color: '#ab0f1c',
            weight: 3
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[4]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(lainStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[4]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[4]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[4])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderTolTwoStreet = useMemo(() => {
        polylineRef.current[5] = useRef(null);
        const tolTwoStreet = dataSelection(dataStreet,'Jalan Tol Dua Jalur Dengan Pemisah Fisik')
        const colorPolygon = {
            color: '#ab600f',
            weight: 6
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[5]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(tolTwoStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[5]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[5]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[5])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderTolLayangStreet = useMemo(() => {
        polylineRef.current[6] = useRef(null);
        const tolLayangStreet = dataSelection(dataStreet,'Jalan Tol Layang')
        const colorPolygon = {
            color: '#41ab0f',
            weight: 6
        }
    
        return (
            <>
                <Polyline
                    ref={polylineRef.current[6]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(tolLayangStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[6]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[6]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[6])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
            </>
        )
    })

    const renderTolPemisahStreet = useMemo(() => {
        polylineRef.current[7] = useRef(null);
        const tolPemisahStreet = dataSelection(dataStreet,'Jalan Tol Dua Jalur Tanpa Pemisah Fisik')
        const colorPolygon = {
            color: '#0b043b',
            weight: 6
        }
    
        return (
            <>
                <Polyline 
                    ref={polylineRef.current[7]}
                    pathOptions={colorPolygon} 
                    positions={restructureDataPolyline(tolPemisahStreet)}
                >
                    <Popup>
                        <div className='w-full h-full flex flex-col'>
                            <span className='text-lg font-bold'>{dataStreetType[7]}</span>
                            <span className='text-sm'>{`Panjang Jalan: ${(dataLengthStreet[7]*1000).toFixed(2)} meter`}</span>
                            <span className='text-sm'>{`Total Ruas Jalan: ${(dataTotalStreet[7])} jalan`}</span>
                        </div>
                    </Popup>
                </Polyline>
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
    showPopupSTR: state.showPopupSTR,
    showTypeSTR: state.showTypeSTR,
    showSTR: state.showSTR
  });

export default connect(mapStateToProps)(StreetMaps);