import React, { FC } from 'react';

import styles from './error-indicator.module.css';

const ErrorIndicator: FC = () => {
    return (
        <div className={styles.errorIndicator}>
            <span>Ошибка</span>
        </div>
    )
}

export { ErrorIndicator };