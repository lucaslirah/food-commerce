import { Head } from '../../components/Head'
import { Container, Inner, Form} from './styles'
import { OrderHeader } from '../../components/OrderHeader'
import { CPFInput } from './CPFInput'
import { PhoneInput } from './PhoneInput'
import { CEPInput } from './CEPInput'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'

export default function Payment() {
  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader/>
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="full-name">Nome e sobrenome</label>
            <input type="text" id="full-name" name="full-name" required autoComplete="name"
                   placeholder="Maria José Silva" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@email.com" required
                     autoComplete="email" />
            </div>
            <PhoneInput />
            <CPFInput />
            {/*<div className="field">*/}
            {/*  <label htmlFor="document">CPF / CNPJ</label>*/}
            {/*  <input type="text" id="document" name="document" required autoComplete="" />*/}
            {/*  <input type="text" id="document" name="document" inputMode="numeric" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />*/}
            {/*</div>*/}
          </div>

          <h4>Endereço de entrega</h4>

          <CEPInput />
          <div className="field">
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" required autoComplete="street-address"
                   placeholder="Rua Sabores" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" required autoComplete="street-address-number"
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
              <input type="text" id="neighborhood" name="neighborhood" required autoComplete="address-level3"
                     placeholder="Bairro Gourmet" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" required autoComplete="address-level2"
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

        </Form>

        <PayOrder/>
      </Inner>
    </Container>
  )
}
