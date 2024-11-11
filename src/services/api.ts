import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'
import { CustomerData } from '../interfaces/CustomerData'
import { Snack } from '../interfaces/Snack'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>("/snacks?snack=burger")
export const getPizzas = () => api.get<SnackData[]>("/snacks?snack=pizza")
export const getDrinks = () => api.get<SnackData[]>("/snacks?snack=drink")
export const getIceCreams = () => api.get<SnackData[]>("/snacks?snack=ice-cream")

export const processCheckout = (cart: Snack[], customer: CustomerData) => api.post("/checkout", {
  cart,
  customer: {
    fullName: customer.fullName,
    email: customer.email,
    mobile: customer.mobile,
    document: customer.document,
    zipCode: customer.zipCode,
    address: customer.address,
    number: customer.number,
    complement: customer.complement,
    neighborhood: customer.neighborhood,
    city: customer.city,
    state: customer.state,
  },
  payment: {
    creditCardNumber: customer.creditCardNumber,
    creditCardHolderName: customer.creditCardHolderName,
    creditCardExpirationDate: `${new Date(customer.creditCardExpirationDate).getMonth()}/${new Date(customer.creditCardExpirationDate).getFullYear()}`,
    creditCardCVV: customer.creditCardCVV,
  }
})

export default api
