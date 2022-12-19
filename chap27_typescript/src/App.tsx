import { ChangeEvent, useState } from 'react'
import './App.css'
import { useMouse } from './hooks/useMouse';

function App() {
    const [input, setInput] = useState<string>('');

    const { x, y } = useMouse();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />

            <div className="mouse" style={{ left: `${x}px`, top: `${y}px` }}></div>
        </>
    )
}

export default App;