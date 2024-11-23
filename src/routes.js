import { Routes, Route } from 'react-router-dom'
import { Form } from './components/forms'
export function Router() {
    return(
       <Routes>
            <Route path='/form' element={<Form />}/>
       </Routes>
    )
}

export default Router