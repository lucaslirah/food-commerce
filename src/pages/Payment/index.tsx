import { Container, Inner, Form} from './styles'

import { Head } from '../../components/Head'
import { schema, FieldValues } from './validationSchema'
import { OrderHeader } from '../../components/OrderHeader'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMask, IMaskInput } from 'react-imask'

export default function Payment() {
  const {
    control,
    handleSubmit,
    formState: { errors}, setValue
  } = useForm<FieldValues>({
    resolver: yupResolver(schema)
  })
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader/>
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="fullName">Nome e sobrenome</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Maria José"
                  autoComplete="name"
                  {...field}
                />
              )}
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    id="email"
                    placeholder="seuemail@email.com"
                    autoComplete="email"
                    {...field}
                  />
                )}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="mobile">Telefone</label>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type="tel"
                    id="mobile"
                    placeholder="(00) 90000-0000"
                    autoComplete="phone"
                    mask={"(00) 90000-0000"}
                    {...field}
                    onAccept={(value) => setValue('mobile', value, { shouldValidate: true })}
                  />
                )}
              />
              {errors.mobile && <p>{errors.mobile.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <Controller
                name="document"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type="text"
                    placeholder="000.000.000-00"
                    id="document"
                    inputMode="numeric"
                    autoComplete="document"
                    mask={[
                      { mask: '000.000.000-00', maxLength: 11 },
                      { mask: '00.000.000/0000-00' }
                    ]}
                    {...field}
                    onAccept={(value) => setValue('document', value, { shouldValidate: true })}
                  />
                )}
              />
              {errors.document && <p>{errors.document.message}</p>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className="field">
            <label htmlFor="zipCode">CEP</label>
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type="text"
                  id="zipCode"
                  placeholder="00000-000"
                  inputMode="numeric"
                  style={{ width: '128px' }}
                  mask={"00000-000"}
                  {...field}
                  onAccept={(value) => setValue('zipCode', value, { shouldValidate: true })}
                />)}
            />
            {errors.zipCode && <p>{errors.zipCode.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="address">Endereço</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="address"
                  placeholder="Rua Sabores"
                  {...field}
                />
              )}
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="number">Número</label>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="number"
                    placeholder="00"
                    {...field}
                  />
                )}
              />
              {errors.number && <p>{errors.number.message}</p>}
            </div>

            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <Controller
                name="complement"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="complement"
                    placeholder="Referência"
                    {...field}
                  />
                )}
              />
              {errors.complement && <p>{errors.complement.message}</p>}
            </div>
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <Controller
                name="neighborhood"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="neighborhood"
                    placeholder="Bairro Gourmet"
                    {...field}
                  />
                )}
              />
              {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="city"
                    placeholder="Sua Cidade"
                    {...field}
                  />
                )}
              />
              {errors.city && <p>{errors.city.message}</p>}
            </div>

            <div className="field">
              <label htmlFor="state">Estado</label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <select
                    id="state"
                    {...field}
                  >
                    {/* estados do Brasil */}
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                )}
              />
              {errors.state && <p>{errors.state.message}</p>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='creditCardNumber'>Número do cartão</label>
            <Controller
              name="creditCardNumber"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardNumber'
                  autoComplete='cc-number'
                  placeholder='1234 5678 9012 3456'
                  mask={[
                    {mask: '0000 000000 0000', maxLength: 14 },
                    { mask: '000 0000000 00000', maxLength: 15},
                    { mask: '0000 0000 0000 0000'}
                  ]}
                  {...field}
                  onAccept={(value) => setValue('creditCardNumber', value, { shouldValidate: true })}
                />
              )}
            />
            {errors.creditCardNumber && <p>{errors.creditCardNumber.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='creditCardHolderName'>Nome impresso no cartão</label>
            <Controller
              name="creditCardHolderName"
              control={control}
              render={({ field }) => (
                <input
                  type='text'
                  id="creditCardHolderName"
                  autoComplete='cc-name'
                  placeholder='Nome do titular do cartão'
                  {...field}
                />
              )}
            />
            {errors.creditCardHolderName && <p>{errors.creditCardHolderName.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='creditCardExpirationDate'>Validade (MM/AA)</label>
              <Controller
                name="creditCardExpirationDate"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='credit-card-expiration'
                    autoComplete='cc-exp'
                    placeholder='MM/AA'
                    mask={
                      [
                        {
                          mask: 'MM/YY',
                          blocks:{
                            MM: {
                              mask: IMask.MaskedRange,
                              from: 1,
                              to: 12
                            },
                            YY: {
                              mask: IMask.MaskedRange,
                              from: new Date().getFullYear() -2000,
                              to: 99
                            },
                          },
                        },
                      ]
                    }
                    {...field}
                    onAccept={(value) => setValue('creditCardExpirationDate', value, { shouldValidate: true })}
                  />
                )}
              />
              {errors.creditCardExpirationDate && <p>{errors.creditCardExpirationDate.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='creditCardCVV'>Código de segurança (CVV)</label>
              <Controller
                name="creditCardCVV"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='creditCardCode'
                    autoComplete='cc-csc'
                    placeholder='000'
                    mask={'0000'}
                    {...field}
                    onAccept={(value) => setValue('creditCardCVV', value, { shouldValidate: true })}
                  />
                )}
              />
              {errors.creditCardCVV && <p>{errors.creditCardCVV.message}</p>}
            </div>
          </div>

          <PayOrder />
        </Form>

      </Inner>
    </Container>
  )
}
