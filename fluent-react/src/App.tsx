import React, { useState } from 'react';
import { useTheme } from './components/ThemeContext/ThemeContext';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const { theme, setTheme } = useTheme();
    const [count, setCount] = useState(0);
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newCard = {
            id: cards.length,
            content: `Card ${cards.length + 1}`,
        };

        setCards([...cards, newCard]);
    };

    const deleteCard = (cardId) => {
        setCards(cards.filter(card => card.id !== cardId));
    };

  return (
        <div className={`App ${theme}`}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
                <select onChange={(e) => setTheme(e.target.value)} value={theme}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="solarized">Solarized</option>
                    <option value="monokai">Monokai</option>
                    <option value="dracula">Dracula</option>
                    <option value="cobalt">Cobalt</option>
                    <option value="nightOwl">NightOwl</option>
                </select>
                <button onClick={addCard}>
                    Add Card
                </button>
                <div className="card-container">
                    {cards.map(card => (
                        <div key={card.id} className="card">
                            <span className="card-content">{card.content}</span>
                            <button className="delete-btn"
                                    onClick={() => deleteCard(card.id)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
