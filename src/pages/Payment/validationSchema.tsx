import * as yup from "yup"

export const schema = yup.object({
  fullName: yup
    .string()
    .required('O nome e sobrenome é obrigatório!')
    .min(5, 'Nome e sobrenome muito curto.'),
  email: yup.string().required(),
  phone: yup.string().required(),
}).required()

export type FieldValues = yup.InferType<typeof schema>
