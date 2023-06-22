import { Polygon,Popup } from 'react-leaflet'
import { useRef,useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { restructureDataPolygon } from './Utils'
import dataADM from '../data/ADM_geojson.json'
import { setLocationADM } from '../middleware/Reducer'

function AdministrasiMaps({setLocationADM,indexLocADM}) {
    console.log(indexLocADM)
    const data = dataADM.features
    const [tempIndexLoc, setTempIndexLoc] = useState(null)
    const colorPolygon = {
        color: '#f75602',
        fillColor: '#F7D002',
        opacity:0.5,
    }
    const polygonRef = useRef([])

    useEffect(() => {
        if (polygonRef.current.length > 0) {
            const newArray = polygonRef.current.map((query) => 
            [query.current.getBounds().getCenter().lat,query.current.getBounds().getCenter().lng]).concat([])

            setLocationADM(newArray)
        }
    },[polygonRef])

    useEffect(() => {
        if (indexLocADM !== null) {
            polygonRef.current[indexLocADM].current.openPopup()
            polygonRef.current[indexLocADM].current.setStyle({
                fillOpacity: 0.7,
                opacity:0.8,
            })
            if (tempIndexLoc !== null) {
                polygonRef.current[tempIndexLoc].current.setStyle({
                    fillOpacity: 0.3,
                    opacity:0.8,
                })
            }
            setTempIndexLoc(indexLocADM)
        } else if (indexLocADM === null && polygonRef.current.length > 0 && tempIndexLoc !== null) {
            polygonRef.current[tempIndexLoc].current.closePopup()
            polygonRef.current[tempIndexLoc].current.setStyle({
                fillOpacity: 0.3,
                opacity:0.8,
            })
        }
    },[indexLocADM])

    return (
        <>
        {
            data.map((query,index) => {
                polygonRef.current[index] = useRef(null);
                return (
                        <Polygon
                            key={index} 
                            ref={polygonRef.current[index]}
                            pathOptions={colorPolygon} 
                            positions={restructureDataPolygon(query)}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target
                                    // layer.openPopup()
                                    layer.setStyle({
                                        fillOpacity: 0.7,
                                        opacity:0.8,
                                    })
                                },
                                mouseout: (e)=>{
                                    const layer = e.target
                                    layer.setStyle({
                                        fillOpacity: 0.3,
                                        opacity:0.8,
                                    })
                                },
                            }}
                        >
                            <Popup>
                                <div className='w-full h-full flex flex-col'>
                                    <span className='text-lg font-bold'>{query.properties.NAMOBJ.toUpperCase()}</span>
                                    <span className='text-sm'>{query.properties.REMARK}</span>
                                </div>
                            </Popup>
                        </Polygon>
                    )
                }
            )
        }
        </>
    )
}

const mapStateToProps = state => ({
    indexLocADM: state.indexLocADM,
    locationADM: state.locationADM
  });

export default connect(mapStateToProps, { setLocationADM })(AdministrasiMaps);