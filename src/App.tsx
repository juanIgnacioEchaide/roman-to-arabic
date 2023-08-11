import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialogTemplate from './component/template/DialogueTemplate';
import { convertRomanToArabic } from './utils/helpers';

function App() {
  return (
     <DialogTemplate convertToArabic={convertRomanToArabic} />
  );
}

export default App;
