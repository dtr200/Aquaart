import {    
    SET_CARD_NUMBER,
    SET_EXPIRATION_DATE,
    SET_CVV,
    START_PAYMENT_REQUEST,
    START_PAYMENT_SUCCESS,
    START_PAYMENT_FAILED,
} from '../action-constants/payment';

import { TPaymentAction } from '../actions/payment';

type TPaymentState = {
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    startPaymentRequest: boolean,
    startPaymentFailed: boolean,
};

export const initialPaymentState = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    startPaymentRequest: false,
    startPaymentFailed: false,
}

export default (state = initialPaymentState, action: TPaymentAction): TPaymentState => {
    switch(action.type){
        case SET_CARD_NUMBER: {
            return {
                ...state,
                cardNumber: action.payload
            }
        }
        case SET_EXPIRATION_DATE: {
            return {
                ...state,
                expirationDate: action.payload
            }
        }
        case SET_CVV: {
            return {
                ...state,
                cvv: action.payload
            }
        }
        case START_PAYMENT_REQUEST: {
            return {
                ...state,
                startPaymentRequest: true,
                startPaymentFailed: false
            }
        }
        case START_PAYMENT_SUCCESS: {
            return {
                ...state,
                startPaymentRequest: false,
                startPaymentFailed: false
            }
        }
        case START_PAYMENT_FAILED: {
            return {
                ...state,
                startPaymentRequest: false,
                startPaymentFailed: true
            }
        }
        default: return state;
    }
}