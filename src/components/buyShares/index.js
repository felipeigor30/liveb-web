import React, { useState } from 'react'

import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import Sidebar from '../sidebarMenu'



export default function BuyShares() {
  const { saveAmountQuotas, possuiCotaComprada } = useAuth();
  const [count, setCount] = useState(1);
  const [valor, setValor] = useState(1000);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState('');
  const teste = valor * count;

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true);
      const recipe = valor * count

      setValor(recipe.toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))

      await saveAmountQuotas(count, recipe.toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
      history.push('/dashboard')
    } catch {
      setError('Falha ao  adiquirir suas cotas, entre com contato com a Liveb')
    }
    setLoading(false)

  }
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        <header className="text-center pt-2 mt-2 header-custom">Invista</header>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan">Quanto gostaria de receber?</h2>
            <h4 className="description-h4-plan">Utilize o simulador abaixo para verificar quanto pode receber mensalmente de acordo com seu investimentos aqui na Liveb.</h4>
          </div>
          <div className="m-2 justify-content-center" style={{ display: 'flex', }}>
            <div className="col col-xs-12">
              <Card className="p-4">
                <Form onSubmit={handleSubmit}>

                  <Form.Group controlId="formBasicRange" >
                    <p className="text-dark text-center h4 font-weight-bold">Simule</p>
                    <Form.Control className="bg-dark range" type="range" min="1" max='2000' step={1} value={count} onChange={e => {
                      setCount(e.target.value)
                    }} />

                  </Form.Group>
                  <p className="text-dark">Quantidade de cotas: {count} cotas</p>
                  <p className="text-dark">Valor que será investido <strong>R${teste.toFixed(2)
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                  <p className="text-dark">Rendimeto Liveb 2.0% A.m: <strong>R${(((valor * count) * 2) / 100).toFixed(2)
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                  <p className="text-dark">Rendimeto CDI 0.16% A.m: <strong>R${(((valor * count) * 0.16) / 100).toFixed(2)
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>

                  <p className="text-dark">Rendimeto Poupanca 0.12% A.m: <strong>R${(((valor * count) * 0.12) / 100).toFixed(2)
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>

                  <div className="justify-content-center">
                    <div className="row">
                      <div className="col text-center m-3">
                        <Button type="submit" disabled={possuiCotaComprada ? true : false}>Aquirir</Button>
                      </div>
                    </div>
                  </div>


                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
