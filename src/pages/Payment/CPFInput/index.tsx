import { useState } from 'react'

export const CPFInput = () => {
  const [cpf, setCpf] = useState('')

  const handleChange = (e: { target: { value: string } }) => {
    let value = e.target.value.replace(/\D/g, '') // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Adiciona o hífen

    setCpf(value)
  }

  return (
    <div className="field">
      <label htmlFor="document">CPF / CNPJ</label>
      <input
        type="text"
        placeholder="000.000.000-00"
        value={cpf}
        autoComplete=""
        required
        id="document"
        name="document"
        inputMode="numeric"
        onChange={handleChange}
      />
    </div>
  )
}
