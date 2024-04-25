import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    )
}