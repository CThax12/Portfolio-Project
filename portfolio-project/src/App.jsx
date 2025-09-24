import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
    <>
    {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
    </>
    )
}
export default App
