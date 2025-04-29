import { FC } from "react"
import style from "./PercentView.module.css"


type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}

const PercentView: FC<PercentViewType> = ({max, value, makeColor}) => { //základ, export - explicitně     nebyla by to react komponenta kdyby jsme tam napsal jen PercentViewType bez fc
    
    return (
        <div className={style.percentview}>
            <p>{value / max * 100}%</p>
            <div className = {style.bar}>
                <div style={ {height: "100%", backgroundColor: makeColor(value / max), width: `${value / max * 100}%`} }>
                </div>
            </div>
        </div>
    )
}

export default PercentView