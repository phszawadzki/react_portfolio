import React, { useRef, useState, useEffect } from 'react';

// load 'scrambling-text' module.
import Scrambler from 'scrambling-text';

export default function ScramblingText() {
  // define the text to be scrambled as state.
  const [text, setText] = useState('Frontend Developer');
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    // call scramble function with the text to be scrambled and handler.
    scramblerRef.current.scramble(text, setText);
  }, []);

  return (
    <>
      {text}
    </>
  );
}