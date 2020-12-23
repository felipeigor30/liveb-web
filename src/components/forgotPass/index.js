import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import Liveb from '../../assets/bg-liveb.jpg'
import { useAuth } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'

export default function ForgotPass() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage("Verifique se nosso email chegou na sua caixa de entrada")
    } catch {
      setError('Falha ao acessar, verifique seus dados')
    }

    setLoading(false)

  }

  return (
    <>
      <div id="" className=" col-xs-12 p-2 auth-wrapper" style={{ width: '100vw', backgroundImage: `url(${Liveb})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="auth-content">
          {/* <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div> */}

          <div className="card">
            <div className="card-body text-center">

              <h2 className="text-center text-dark mb-4">Alterar senha</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="text-dark">Insira seu email de cadastro</Form.Label>

                  <Form.Control type="email" ref={emailRef} placeholder="Seu email" required />
                </Form.Group>
                <Button disabled={loading} className="w-100 text-center mt-2 button-plan" type="submit">Enviar</Button>
              </Form>

              <div className="w-100 text-center mt-2">
                <Link className="text-dark" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
