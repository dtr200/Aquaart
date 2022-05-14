import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Logo } from '../logo/logo';
import { IRootState } from '../../services/reducers';
import styles from './card.module.css';

const Card: FC = () => {

    const { expirationDate: { month, year }, cardNumber} = useSelector((store: IRootState) => store.payment);

    const getCurrentBalance = () => {
        return '$5,750,20';
    }

    const handleCardSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit!')
    }

    const setValue = (e: React.FormEvent) => {
        console.log(e.target)
    }
    
    return (
        <form 
            className={styles.card}
            onSubmit={handleCardSubmit}
        >
            <div className={styles.cardContainer}>
                <div className={styles.balance}>
                    <span className={styles.balanceTitle}>Current Balance</span>
                    <span className={styles.balanceAmount}>{getCurrentBalance()}</span>
                </div>
                <Logo />
                <section className={styles.cardData}>
                    <input 
                        className={styles.cardNumber}
                        type="text" 
                        placeholder={''}
                        name={'number'}
                        value={cardNumber}
                        onChange={setValue}
                    />
                    <input 
                        className={styles.cardExpMonth}
                        type="text"
                        placeholder={''}
                        name={'month'}
                        value={month}
                        onChange={setValue}
                    />
                    <input 
                        className={styles.cardExpYear}
                        type="text"
                        placeholder={''}
                        name={'year'}
                        value={year}
                        onChange={setValue}
                    />
                </section>
            </div>
        </form>
    )
}

export { Card };