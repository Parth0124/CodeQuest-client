import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Askquestion from "./pages/askquestion/Askquestion"
import Auth from "./pages/auth/Auth"
import Question from "./pages/question/Question"
import Displayquestion from "./pages/question/Displayquestion"
import Tags from "./pages/tags/Tags"
import Users from "./pages/users/Users"
import Userprofile from "./pages/Userprofile/Userprofile"


function AllRoutes({slidein, handleslidein}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein} />}/>
            <Route path='/Askquestion' element={<Askquestion />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Question' element={<Question slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Question/:id' element={<Displayquestion slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Tags' element={<Tags slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Users' element={<Users slidein={slidein} handleslidein={handleslidein}/>}/>
            <Route path='/Users/:id' element={<Userprofile slidein={slidein} handleslidein={handleslidein}/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
