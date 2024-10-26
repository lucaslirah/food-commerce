import React, { useState } from 'react'

export const CEPInput: React.FC = () => {
  const [cep, setCep] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos
    if (value.length > 5) value = `${value.slice(0, 5)}-${value.slice(5)}`
    setCep(value)
  }

  return (
    <div className="field">
      <label htmlFor="zipcode">CEP</label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        placeholder="00000-000"
        required
        pattern="\d{5}-\d{3}"
        autoComplete="postal-code"
        inputMode="numeric"
        value={cep}
        onChange={handleInputChange}
        style={{ width: '128px'}}
      />
    </div>
  )
}
