
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataContext from './Context/DataContext'

createRoot(document.getElementById('root')).render(

    <DataContext>
        <App />
    </DataContext>

)
