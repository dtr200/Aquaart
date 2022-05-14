import React, { FC } from 'react';
import styles from './logo.module.css';

const Logo: FC = () => {
    return (
        <div className={styles.logo}>
            <span>Logo</span>
        </div>
    )
}

export { Logo };