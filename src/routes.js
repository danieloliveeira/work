import { Routes, Route } from 'react-router-dom'
import { Form } from './components/forms'
import Home from './components/Home'
export function Router() {
    return(
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/form' element={<Form />}/>
       </Routes>
    )
}

export default Router