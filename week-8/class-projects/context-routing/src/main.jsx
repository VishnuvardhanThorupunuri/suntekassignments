import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextPrivider from '../context/CounterContextPrivider.jsx'


createRoot(document.getElementById('root')).render(
 <>
  {/* wrape root component with provider */}
    <CounterContextPrivider>
      <App />
    </CounterContextPrivider>
  </>
)
