import { isValidCNPJ, isValidCPF, isValidPhone } from "@brazilian-utils/brazilian-utils"
import { default as isValidCreditCard } from "card-validator"
import * as yup from "yup"

export const schema = yup
  .object({
  fullName: yup
    .string()
    .required('O nome e sobrenome é obrigatório!')
    .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.')
    .min(3, 'Nome e sobrenome muito curto.'),
  email: yup
    .string()
    .required('O email é obrigatório!')
    .email('O email deve ser válido.'),
  mobile: yup
    .string()
    .required('O celular é obrigatório!')
    .transform(( value ) => value.replace(/\D/g, ''))
    .test('validatePhone', 'Número inválido.', ( value ) => isValidPhone(value)),
  document: yup
    .string()
    .required('O CPF é obrigatório.')
    .transform(( value ) => value.replace(/\D/g, ''))
    .test(
      'validateDocument',
      'CPF/CNPJ inválido.',
      ( value ) => isValidCPF(value) || isValidCNPJ(value)
    ),
  zipCode: yup
    .string()
    .required('O CEP é obrigatório!')
    .transform(( value ) => value.replace(/\D/g, '')),
  address: yup.string().required('O endereço é obrigatório!'),
  number: yup.string().required('O número é obrigatório!'),
  complement: yup.string(),
  neighborhood: yup.string().required('O bairro é obrigatório!'),
  city: yup.string().required('A cidade é obrigatória!'),
  state: yup.string().required('O estado é obrigatório!'),
  creditCardNumber: yup
   .string()
   .required('O cartão de crédito é obrigatório!')
   .transform(( value ) => value.replace(/\D/g, ''))
   .test(
      'validateCreditCard',
      'Número do cartão inválido.',
      ( value ) => isValidCreditCard.number(value).isValid
    ),
  creditCardHolderName: yup
   .string()
    .required('O nome do titular é obrigatórios!')
    .matches(/(\w.+\s).+/gi, 'O nome do titular deve conter o sobrenome.')
    .min(3, 'O nome do titular deve ser completo.'),
  creditCardExpirationDate: yup
    .string()
    .required('A data de validade do cartão é obrigatória!')
    .transform((value) => {
      const [month, year] = value.split('/')

      if (month && year && month.length === 2 && year.length === 2)
        return new Date(+`20${ year }`, + month - 1, 1).toISOString()

      return value
    })
    .test(
      'validateCreditCardExpirationDate',
      'Data de validade do cartão inválida.',
      ( value ) => new Date(value) >= new Date()
    ),
  creditCardCVV: yup
    .string()
    .required('O CVV do cartão é obrigatório!')
    .transform(( value ) => value.replace(/\D/g, ''))
    .min(3, 'O CVV deve conter entre 3 e 4 dígitos.')
    .max(4, 'O CVV deve conter entre 3 e 4 dígitos.')
}).required()

export type FieldValues = yup.InferType<typeof schema>
