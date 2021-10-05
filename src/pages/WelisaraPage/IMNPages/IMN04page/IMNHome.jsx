import "./Home.css"
import Production from "../../../../components/WelisaraComps/IMN/IMN04/production/Production";
import Oee from "../../../../components/WelisaraComps/IMN/IMN04/oee/Oee";
import Quality from "../../../../components/WelisaraComps/IMN/IMN04/quality/Quality";

export default function Home() {
    return (
        <div className="home">
          <Production /> 
          <div className="homeWidget">
           <Oee/>
           <Quality/>
          </div>
          


        </div>
    )
}
