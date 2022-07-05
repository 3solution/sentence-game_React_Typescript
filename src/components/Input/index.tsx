import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const Input: React.FC<Props> = ({ label, value, setValue, className = '' }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <p className={styles.label}>{label}? </p>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder="input word"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
