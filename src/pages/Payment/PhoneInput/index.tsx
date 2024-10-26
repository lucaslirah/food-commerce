import React, { useState } from 'react'

export const PhoneInput: React.FC = () => {
  const [phone, setPhone] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos
    if (value.length > 0) value = `(${value}`
    if (value.length > 3) value = `${value.slice(0, 3)}) ${value.slice(3)}`
    if (value.length > 10) value = `${value.slice(0, 10)}-${value.slice(10, 14)}`
    setPhone(value)
  }

  return (
    <div className="field">
      <label htmlFor="phone">Telefone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="(00) 90000-0000"
        required
        pattern="\d{10}"
        autoComplete="tel"
        inputMode="numeric"
        value={phone}
        onChange={handleInputChange}
      />
    </div>
  )
}
