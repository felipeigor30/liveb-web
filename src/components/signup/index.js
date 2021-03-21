import React, { useRef, useState } from 'react'
import { Button, Form, Alert, InputGroup } from 'react-bootstrap'
import Liveb from '../../assets/bg-liveb.jpg'
import { useAuth } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import { AiFillEye } from 'react-icons/ai';

import { cpfMask, rgMask, phoneMask } from '../masks'


export default function SignUp() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const passConfirmRef = useRef()
  const cpfRef = useRef()
  const rgRef = useRef()
  const phoneRef = useRef()

  const [cpfs, setCpfs] = useState('')
  const [rgs, setRgs] = useState('')
  const [phones, setPhones] = useState('')

  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  async function handleSubmit(e) {
    e.preventDefault()

    if (passRef.current.value !== passConfirmRef.current.value) {
      return setError('As senhas nao são iguais')
    }

    try {
      setError("");
      setLoading(true);
      await signup(nameRef.current.value, emailRef.current.value, passRef.current.value, cpfs, rgs, phones)
      history.push('/plan')
    } catch {
      setError('Falha ao se cadastrar')
    }

    setLoading(false)

  }
  return (
    <>
      <div id="" className=" col-xs-12 p-2 auth-wrapper" style={{ width: '100vw', backgroundImage: `url(${Liveb})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="auth-content">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="text-center mb-4 text-dark">Se torne um Liveber</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Nome completo</Form.Label>
                  <Form.Control type="text" ref={nameRef} placeholder="Seu nome" required />
                </Form.Group>

                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} placeholder="seu@email.com" required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <InputGroup>
                    <Form.Control type={passwordShown ? "text" : "password"} ref={passRef} placeholder="Senha" required />
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <AiFillEye onClick={togglePasswordVisiblity} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>


                </Form.Group>

                <Form.Group id="password-confirm">
                  <Form.Label>Confirmar senha</Form.Label>
                  <InputGroup>
                    <Form.Control type={passwordShown ? "text" : "password"} ref={passConfirmRef} placeholder="Confirmar Senha" required />
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <AiFillEye onClick={togglePasswordVisiblity} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>

                <Form.Group id="cpf">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    id="cpf" type="text" ref={cpfRef} placeholder="123.456.789-00" value={cpfs}
                    required onChange={e => { setCpfs(cpfMask(e.target.value)) }} />

                </Form.Group>

                <Form.Group id="rg">
                  <Form.Label>RG</Form.Label>
                  <Form.Control id="rg" type="text" ref={rgRef} placeholder="12.345.678-9" required value={rgs} onChange={e => { setRgs(rgMask(e.target.value)) }} />

                </Form.Group>

                <Form.Group id="phone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control id="phone" type="text" ref={phoneRef} placeholder="(11) 9 9999-9999" required value={phones} onChange={e => { setPhones(phoneMask(e.target.value)) }} maxLength={15} />
                </Form.Group>

                <Button disabled={loading} className="w-100 text-center mt-2 button-plan" type="submit">Cadastrar</Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Já é um investidor? <Link to="/login">Acesse</Link>
              </div>
            </div >

          </div>
        </div>
      </div>
    </>
  )
}
