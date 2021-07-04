import axios from 'axios';

const API2 = axios.create({baseURL: "http://expert-ai-prediction.herokuapp.com/"});

export const heartPrediction = (heartPost) => API2.post('/heart-prediction', heartPost);
export const diabetesPrediction = (diabetesPost) => API2.post('/diabetes-prediction', diabetesPost);
export const strokePrediction = (strokePost) => API2.post('/stroke-prediction', strokePost);
export const creditPrediction = (creditPost) => API2.post('/credit-prediction', creditPost);
export const loanPrediction = (loanPost) => API2.post('/loan-prediction', loanPost);
export const insurancePrediction = (insurancePost) => API2.post('/insurance-prediction', insurancePost);
