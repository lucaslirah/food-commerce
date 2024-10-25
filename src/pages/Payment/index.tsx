import { Head } from '../../components/Head'
import { Container, Inner, Form} from './styles'
import { OrderHeader } from '../../components/OrderHeader'

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
            <input type="text" id="full-name" name="full-name" required autoComplete="name" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input type="text" id="document" name="document" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" required autoComplete="street-address" />
          </div>

          <h4>Forma de pagamento</h4>
        </Form>
      </Inner>
    </Container>
  )
}
