import "./Home.css"
import Production from "../../../../components/PeliyagodaComps/PrintingComps/PRI04/production/Production";
import Oee from "../../../../components/PeliyagodaComps/PrintingComps/PRI04/oee/Oee";
import Quality from "../../../../components/PeliyagodaComps/PrintingComps/PRI04/quality/Quality";

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
