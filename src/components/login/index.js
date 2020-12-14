import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'

import { useAuth } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Falha ao acessar, verifique seus dados')
    }

    setLoading(false)

  }

  return (
    <>
      <div id="" className=" col-xs-12 p-2 auth-wrapper bg-dark" style={{ width: '100vw', }}>
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>

          <div className="card">
            <div className="card-body text-center">

              <h2 className="text-center text-dark mb-4">Login</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="text-dark">Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} placeholder="Seu email" required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label className="text-dark">Senha</Form.Label>
                  <Form.Control type="password" ref={passRef} placeholder="Sua Senha" required />

                </Form.Group>

                <Button disabled={loading} className="w-100 text-center mt-2 button-form btn-dark" type="submit">Login</Button>
              </Form>

              <div className="w-100 text-center mt-2">
                Não é um investidor? <Link className="text-dark" to="/signup">Acesse</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
