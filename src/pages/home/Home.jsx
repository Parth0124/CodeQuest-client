import React from 'react'
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/rightsidebar/Rightsidebar'
import Homemainbar from '../../components/homemainbar/Homemainbar'
import '../../App.css'

const Home = ({slidein}) => {
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

export default Home