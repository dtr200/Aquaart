import {
    SET_CARD_NUMBER,
    SET_EXPIRATION_DATE,
    SET_CVV,
    START_PAYMENT_REQUEST,
    START_PAYMENT_SUCCESS,
    START_PAYMENT_FAILED,
} from '../action-constants/payment';

export interface ISetCardNumberAction {
    readonly type: typeof SET_CARD_NUMBER;
    readonly payload: string;
}
export interface ISetExpirationDateAction {
    readonly type: typeof SET_EXPIRATION_DATE;
    readonly payload: string;
}
export interface ISetCvvAction {
    readonly type: typeof SET_CVV;
    readonly payload: string;
}
export interface IStartPaymentRequestAction {
    readonly type: typeof START_PAYMENT_REQUEST;
}
export interface IStartPaymentSuccessAction {
    readonly type: typeof START_PAYMENT_SUCCESS;
    readonly message: string;
}
export interface IStartPaymentFailedFailedAction {
    readonly type: typeof START_PAYMENT_FAILED;
}
export interface IDefaultAction {
    readonly type: '';
}

export type TPaymentAction = 
    ISetCardNumberAction |
    ISetExpirationDateAction |
    ISetCvvAction |
    IStartPaymentRequestAction |
    IStartPaymentSuccessAction |
    IStartPaymentFailedFailedAction |
    IDefaultAction;