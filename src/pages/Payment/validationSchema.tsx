import { isValidCNPJ, isValidCPF, isValidPhone } from "@brazilian-utils/brazilian-utils"
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
    .test('validateDocument', 'CPF/CNPJ inválido.', ( value ) => isValidCPF(value) || isValidCNPJ(value)),
  // zipCode: yup
  //   .string()
  //   .required('O CEP é obrigatório!')
  //   .transform(( value ) => value.replace(/\D/g, '')),
  // address: yup.string().required('O endereço é obrigatório!'),
  // number: yup.string().required('O número é obrigatório!'),
  // complement: yup.string(),
  // neighborhood: yup.string().required('O bairro é obrigatório!'),
  // city: yup.string().required('A cidade é obrigatória!'),
  // state: yup.string().required('O estado é obrigatório!'),
}).required()

export type FieldValues = yup.InferType<typeof schema>
