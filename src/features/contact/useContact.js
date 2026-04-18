import { useState } from 'react'

export function useContact() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [mail, setMail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellido, whatsapp, mail, mensaje, selectedServices }),
      })

      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    nombre,
    setNombre,
    apellido,
    setApellido,
    whatsapp,
    setWhatsapp,
    mail,
    setMail,
    mensaje,
    setMensaje,
    selectedServices,
    toggleService,
    isLoading,
    submitted,
    error,
    handleSubmit,
  }
}
