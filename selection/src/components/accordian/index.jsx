//single selection
//multibles selection
import React, {useState} from 'react'
import './styles.css'
import data from './data'

export default function Accordian(){

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    
    function handleSingleSelection(index){
        setSelected(index === selected ? null : index)
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrent, 1)

        setMultiple(cpyMultiple)
    }
    
    return(
        <div className="wrapper" >
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={ enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}> 
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                    </div>)
                    : <div> No data found !</div>
                }
            </div>
        </div>
    );
}