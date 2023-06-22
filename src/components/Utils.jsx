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
    const newArray = data.geometry.coordinates[0].map((query) => 
    [query[1],query[0]]).concat([])
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