import { Routes, Route } from 'react-router-dom'
import { Form } from './components/forms'
import Home from './components/Home'
export function Router() {
    return(
       <Routes>
            <Route path='/work' element={<Home/>}/>
            <Route path='/work/form' element={<Form />}/>
       </Routes>
    )
}

export default Router