import React, { useState, useEffect } from 'react'


import { useAuth } from '../../context/authContext'


import { Accordion, Card, Button } from 'react-bootstrap'
import { BiChevronDown } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";


import Sidebar from '../sidebarMenu'

import FlatList from 'flatlist-react'

export default function Dashboard() {

  const { nome, valorInvestido, planoEscolhido, payments, listPaymentsReceivable } = useAuth();



  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  async function handlePay(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true);
      await listPaymentsReceivable()

    } catch {
      setError('Falhou ao tentar atualizar')
    }
    setLoading(false)

  }
  const renderPayment = (payments, idx) => {
    return (

      <li key={idx} className="text-left" >
        <h6 style={payments.statusPagamento === true ? { color: 'green', textTransform: 'uppercase' } : { color: 'black', textTransform: 'uppercase' }} >Pagamento dia {payments.pagar} </h6>
        <hr />
      </li>

    );
  }

  useEffect(() => {

  }, [])
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        <header className="text-center pt-2 mt-2 header-custom">Início</header>
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan" style={{ fontSize: '25px', fontWeight: 'bold' }}>Olá {nome}, bem vindo a LIVEB</h2>
            <h4 className="description-h4-plan">Você já investiu: R${valorInvestido}</h4>
            <h4 className="description-h4-plan">E o plano atual que você possui é o: {planoEscolhido}</h4>
          </div>
          <div className="card justify-content-center">
            <div className="row">
              <div className="col text-center m-3">
                <FlatList
                  list={payments}
                  renderItem={renderPayment}
                  displayRow
                  renderWhenEmpty={() => <div><Button onClick={handlePay}>Listar seus recemientos <AiFillEye /></Button></div>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
