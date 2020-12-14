import React, { useState } from 'react'
import { Accordion, Button, Card, Alert } from 'react-bootstrap'
import { BiChevronDown } from "react-icons/bi";

import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import './styles.css'

import Sidebar from '../sidebarMenu'

export default function ChoosePlan() {

  const { handlePlanGold, possuiPlano } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmitGold(e) {
    e.preventDefault()
    try {
      setError("");
      setLoading(true);
      await handlePlanGold()
      history.push('/shares')
    } catch {
      setError('Falha ao se cadastrar')
    }
    setLoading(false)
  }
  {
    // async function handleSubmitPlatinum(e) {
    //   e.preventDefault()
    //   try {
    //     setError("");
    //     setLoading(true);
    //     await handlePlanPlatinum()
    //     history.push('/shares')
    //   } catch {
    //     setError('Falha ao se cadastrar')
    //   }
    //   setLoading(false)
    // }
    // async function handleSubmitBlack(e) {
    //   e.preventDefault()
    //   try {
    //     setError("");
    //     setLoading(true);
    //     await handlePlanBlack()
    //     history.push('/shares')
    //   } catch {
    //     setError('Falha ao se cadastrar')
    //   }
    //   setLoading(false)
    // }
  }


  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        <header className="text-center pt-2 mt-2 header-custom">Escolher plano</header>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan">Planos disponíveis para você!</h2>
            <p>{console.log(possuiPlano)}</p>
            <h4 className="description-h4-plan">Confira o plano desejado e invista agora mesmo no seu futuro.</h4>
          </div>
          <div className="m-2 justify-content-center" style={{ display: 'flex', }}>
            <div className="col-md-4 col-xs-12">
              <p className="text-dark text-center p-title">Plano Liveb</p>
              <Accordion className="mt-2 mb-2">
                <Card >
                  <Card.Text className="text-dark ml-1 mr-1 pt-2">
                    <li><strong>Investimento LIVEB</strong></li>
                    <li>2% ao mês (24% bienal)</li>
                    <li>R$: 1.000,00 cota mínima.</li>
                    <li>R$: 2.000.000,00 cota máxima.</li>
                    <li>24 meses de investimento ( 48% lucro total )</li>
                    <li>Recebimento lucro mensal ou bullet</li>
                    <li>Saque investimento inicial após 24 meses</li>
                  </Card.Text>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <BiChevronDown className="text-dark" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="text-description-color justify-content-center ">
                      <div className="justify-content-center">
                        <div className="row">
                          <div className="col text-center m-3">
                            <Button disabled={possuiPlano ? true : false} type="submit" onClick={handleSubmitGold}>
                              Escolher
                      </Button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
