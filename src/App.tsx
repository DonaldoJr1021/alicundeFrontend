import React, { useState } from 'react';

interface AllItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [alls, setAlls] = useState<AllItem[]>([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddAll = () => {
    if (inputText.trim() !== '') {
      const newAll: AllItem = {
        id: Date.now(),
        text: inputText.trim()
      };
      setAlls([...alls, newAll]);
      setInputText('');
    }
  };

  const handleRemoveAll = (id: number) => {
    const updatedalls = alls.filter(all => all.id !== id);
    setAlls(updatedalls);
  };

  return (
    <div>
      <h1>Alicunde App</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddAll}> Add Element</button>
      <ul>
        {alls.map(all => (
          <li key={all.id} onClick={() => handleRemoveAll(all.id)}>
            {all.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;