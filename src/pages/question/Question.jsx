import Rightsidebar from "../../components/rightsidebar/Rightsidebar"
import Leftsidebar from "../../components/leftsidebar/Leftsidebar"
import Homemainbar from "../../components/homemainbar/Homemainbar"
import '../../App.css'

const Question = ({slidein}) => {
    return (
      <div className="home-container-1">
        <Leftsidebar slidein={slidein}/>
        <div className="home-container-2">
          <Homemainbar/>
          <Rightsidebar/>
        </div>
      </div>
    )
  }

export default Question
