import { useEffect, useState } from "react"
import { dataAdministrasi } from "./Utils"
import { connect } from 'react-redux';
import { setIndexLocADM,setShowADM } from '../middleware/Reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons'


function MenuAdministrasi({setIndexLocADM,setShowADM}) {
    const [isShow,setIsShow] = useState(false)
    const [isHide,setIsHide] = useState(true)

    function flyToLocation(index) {
        setIndexLocADM(index)
    }

    function resetLocation() {
        setIsShow(!isShow)
        if (isShow) {
            setIndexLocADM(null)
        }
    }

    const handleCheckboxClick = (event) => {
        event.stopPropagation()
      };
    
    useEffect(() => {
        setShowADM(isHide)
    },[isHide])

    return (
        <>
            <div className={`w-full h-10 bg-white px-3 flex text-primary justify-between items-center shadow-md z-20 ${isShow? 'rounded-t-lg':'rounded-lg'} hover:bg-gray-100`} onClick={resetLocation}>
                <div className='w-fit h-full flex justify-center items-center gap-x-2'>
                    <input type='checkbox' checked={isHide} onChange={() => setIsHide(!isHide)} onClick={handleCheckboxClick} />
                    <span className="text-sm font-semibold flex">Daerah Administrasi</span>
                </div>
                {
                    !isShow?
                    <FontAwesomeIcon icon={faCaretDown} />
                    :
                    <FontAwesomeIcon icon={faCaretUp} />
                }
            </div>
            <div className={`menu-legend ${isShow?'max-h-fit rounded-b-lg':'max-h-0'}`}>
                {
                    dataAdministrasi.map((query,index)=>
                    <div key={index} onClick={()=>flyToLocation(index)} className="w-full h-10 px-2 bg-white flex justify-start items-center border-t hover:bg-gray-100">
                        <span className="text-sm text-black">{query}</span>
                    </div>
                    )
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    indexLocADM: state.indexLocADM,
    locationADM: state.locationADM,
    showADM: state.showADM
  });

export default connect(mapStateToProps, {setIndexLocADM,setShowADM})(MenuAdministrasi);