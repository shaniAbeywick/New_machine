import "./quality.css"
import Rejections from "./Rejections"
import MinorStoppages from "./MinorStoppages"
import Breakdown from "./Breakdown"


export default function Quality() {
    return (
        <div className="quality_container">
            <div className="quality">
            <h3 className="quality_topic">REJECTIONS</h3>
              
            <Rejections/>
            <h3 className="quality_topic">MINOR STOPPAGES</h3>
             
            <MinorStoppages/>
            <h3 className="quality_topic">BREAKDOWN</h3>
             
            <Breakdown/>
            
        </div>
        </div>
        
    )
}
