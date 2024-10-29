import { Head } from '../../components/Head'
import { Container, Inner, Form } from './styles'
import { OrderHeader } from '../../components/OrderHeader'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, FieldValues } from './validationSchema'

export default function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors }
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
            <input
              type="text"
              id="fullName"
              autoComplete="name"
              placeholder="Maria José Silva"
              {...register('fullName')}
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@email.com"
                autoComplete="email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                placeholder="(00) 90000-0000"
                autoComplete="tel"
                {...register('phone')}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                autoComplete=""
                id="document"
                name="document"
                inputMode="numeric"
              />
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className="field">
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="00000-000"
              pattern="\d{5}-\d{3}"
              autoComplete="postal-code"
              inputMode="numeric"
              style={{ width: '128px' }}
            />
          </div>
          <div className="field">
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" autoComplete="street-address"
                   placeholder="Rua Sabores" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" autoComplete="street-address-number"
                     placeholder="00" />
            </div>
            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <input type="text" id="complement" name="complement" autoComplete="address-line2"
                     placeholder="Referência" />
            </div>
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" id="neighborhood" name="neighborhood" autoComplete="address-level3"
                     placeholder="Bairro Gourmet" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" autoComplete="address-level2"
                     placeholder="Sua Cidade" />
            </div>
            <div className="field">
              <label htmlFor="state">Estado</label>
              <select id="state" name="state">
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
            </div>
          </div>

          <h4>Pagamento</h4>
          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input
              type='text'
              id='credit-card-number'
              name='credit-card-number'
              autoComplete='cc-number'
              placeholder='1234 5678 9012 3456'
            />
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso no cartão</label>
            <input
              type='text'
              id='credit-card-holder-name'
              name='credit-card-holder-name'
              autoComplete='cc-name'
              placeholder='Nome do titular do cartão'
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input
                type='text'
                id='credit-card-expiration'
                name='credit-card-expiration'
                autoComplete='cc-exp'
                placeholder='MM/AA'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
              <input
                type='text'
                id='credit-card-code'
                name='credit-card-code'
                autoComplete='cc-csc'
                placeholder='000'
              />
            </div>
          </div>

          <PayOrder />
        </Form>

      </Inner>
    </Container>
  )
}
