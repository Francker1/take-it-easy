import React, { useState } from 'react';
import axios from 'axios';
import { translateText } from '../scripts/translate';

const Translator = () => {
  const [angryText, setAngryText] = useState('');
  const [correctText, setCorrectText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    console.log('Translating text:', angryText); // Añadido para depuración
    try {
      const response = await translateText(angryText);
      console.log('API response:', response); // Añadido para depuración
      setCorrectText(response);
    } catch (error) {
      console.error('Error translating text:', error);
      setCorrectText('Error translating text');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Angry to Correct Text Translator</h1>
      <textarea
        value={angryText}
        onChange={(e) => setAngryText(e.target.value)}
        placeholder="Enter angry text"
        rows="5"
        cols="50"
      />
      <br />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translateeee'}
      </button>
      <h2>Correct Text</h2>
      <textarea
        value={correctText}
        readOnly
        rows="5"
        cols="50"
      />
    </div>
  );
};

export default Translator;
