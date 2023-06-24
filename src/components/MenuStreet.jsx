import { useEffect, useState } from "react"
import { dataStreetType, dataTotalStreet } from "./Utils"
import { connect } from 'react-redux';
import { setShowTypeSTR,setShowSTR,setShowPopupSTR } from '../middleware/Reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons'

function MenuStreet({setShowTypeSTR,setShowSTR,setShowPopupSTR}) {
    const [isShow,setIsShow] = useState(false)
    const [isHide,setIsHide] = useState(false)
    const [showStreet,setShowStreet] = useState([false,false,false,false,false,false,false,false])
    const colorStreet = [
        'bg-[#0ec799]',
        'bg-[#0f77ab]',
        'bg-[#7a0fab]',
        'bg-[#ab0f65]',
        'bg-[#ab0f1c]',
        'bg-[#ab600f]',
        'bg-[#41ab0f]',
        'bg-[#0b043b]']

    const handleCheckboxClick = (event) => {
        event.stopPropagation()
      };

    function handleCloseMenu() {
        setIsShow(!isShow)
        if(isShow) {
            const statePopup = [false,false,false,false,false,false,false,false]
            setShowPopupSTR(statePopup)
        }
    }

    function handleShowStreet(index) {
        const dataNew = [...showStreet]
        dataNew[index] = !dataNew[index]
        setShowStreet(dataNew)
    }

    function handleHideStreet() {
        setIsHide(!isHide)
        if (isHide) {
            const dataNew = [...showStreet]
            dataNew.map((query,index) => {
                dataNew[index] = false
            })
            setShowStreet(dataNew)
        } else if (!isHide) {
            const dataNew = [...showStreet]
            dataNew.map((query,index) => {
                dataNew[index] = true
            })
            setShowStreet(dataNew)
        }
    }

    function handleShowPopupStreet(index) {
        if(isHide) {
            const statePopup = [false,false,false,false,false,false,false,false]
            statePopup[index] = !statePopup[index]

            setShowPopupSTR(statePopup)
        }
    }
    
    useEffect(() => {
        setShowSTR(isHide)
    },[isHide])

    useEffect(() => {
        setShowTypeSTR(showStreet)
    },[showStreet])

    return (
        <div className="w-full h-fit">
            <div className={`w-full h-10 bg-white px-3 flex text-primary justify-between items-center shadow-md z-20 ${isShow? 'rounded-t-lg':'rounded-lg'} hover:bg-gray-100`} onClick={handleCloseMenu}>
                <div className='w-fit h-full flex justify-center items-center gap-x-2'>
                    <input type='checkbox' checked={isHide} onChange={handleHideStreet} onClick={handleCheckboxClick} />
                    <span className="text-sm font-semibold flex">Area Jalan</span>
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
                    dataStreetType.map((query,index)=>
                    <div key={index} onClick={()=>handleShowPopupStreet(index)} className={`w-full h-12 px-2 ${isHide? "bg-white text-black hover:bg-gray-100":"bg-gray-100 text-gray-500"} flex justify-between items-center gap-x-2 border-t`}>
                        {/* <div className={`w-4 h-4 ${colorStreet[index]}`} /> */}
                        <div className={`w-12 h-6 text-[9px] ${colorStreet[index]} text-white rounded-full text-center flex items-center justify-center`}>{dataTotalStreet[index]}</div>
                        <div className="text-sm  w-full max-w-[80%] flex justify-start items-center gap-x-2">
                            <span>{query}</span>
                        </div>
                        <input type='checkbox' checked={showStreet[index]} disabled={isHide? false:true} onChange={() => handleShowStreet(index)}/>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    indexLocADM: state.indexLocADM,
    locationADM: state.locationADM,
    showADM: state.showADM,
    showTypeSTR: state.showTypeSTR,
    showPopupSTR: state.showPopupSTR,
    showSTR: state.showSTR
  });

export default connect(mapStateToProps,{setShowTypeSTR,setShowSTR,setShowPopupSTR})(MenuStreet);