import { useEffect } from 'react'
import dataADM from '../data/ADM_geojson.json'
import dataStreet from '../data/Jalan_geojson.json'

export function restructureDataPolygon(data) {
    const newArray = data.geometry.coordinates[0][0].map((query) => 
            [query[1],query[0]]).concat([])
    return newArray
}

export function dataSelection(data,condition) {
    let newData = []
    data.features.map((query) => {
        if (query.properties.REMARK === condition) {
            newData.push(query)
        }
    })
    return newData
} 

export function restructureDataPolyline(data) {
    const newArray = data.map((querys) => querys.geometry.coordinates[0].map((query) => 
    [query[1],query[0]]).concat([])).concat([])
    return newArray
}

export function removeDuplicates(array) {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
  }

export const dataAdministrasi = removeDuplicates(dataADM.features.map((data) => 
    data.properties.NAMOBJ).concat([]))

export const dataStreetType = removeDuplicates(dataStreet.features.map((data) => 
                                data.properties.REMARK).concat([]))

export const dataTotalStreet = dataStreetType.map((query) => 
            dataSelection(dataStreet,query).length
        ).concat([])

export const dataLengthStreet = dataStreetType.map((querys) => {
    let lenStreet = 0
    dataSelection(dataStreet,querys).map((query) => 
    lenStreet += query.properties.SHAPE_Leng)

    return lenStreet
    }).concat([])

export const listMaps = [
    {
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    {
        attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        url: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
    },
    {
        attribution:'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    },
    {
        attribution:'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    },
]
