import React, { useState } from 'react';
import Input from '../../components/Input';

import styles from './styles.module.scss';

const MainPage = () => {
  const [who, setWho] = useState('');
  const [what, setWhat] = useState('');
  const [when, setWhen] = useState('');
  const [where, setWhere] = useState('');
  const [sentence, setSentence] = useState('');

  const newGame = () => {
    setWho('');
    setWhat('');
    setWhen('');
    setWhere('');
    setSentence('');
  };

  return (
    <div className={styles.wrapper}>
      <Input label={'Who'} value={who} setValue={setWho} className={styles.input} />
      <Input label={'What'} value={what} setValue={setWhat} className={styles.input} />
      <Input label={'When'} value={when} setValue={setWhen} className={styles.input} />
      <Input label={'Where'} value={where} setValue={setWhere} className={styles.input} />
      <button className={styles.button} onClick={() => setSentence(`${who}  ${what}  ${when}  ${where}.`)}>
        Create Sentence
      </button>
      <p className={styles.sentence}>{sentence}</p>
      <button className={styles.button} onClick={newGame}>
        New Game
      </button>
    </div>
  );
};

export default MainPage;
