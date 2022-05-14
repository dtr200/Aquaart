import React, { FC } from "react";

import styles from './spinner.module.css';

const Spinner: FC = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles['lds-roller']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>        
    )
}

export { Spinner };