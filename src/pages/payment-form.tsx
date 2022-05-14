import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../components/card/card';

const PaymentFormPage: FC = () => {
    return (
        <main>
            <Card />
        </main>
    )
}

export { PaymentFormPage };