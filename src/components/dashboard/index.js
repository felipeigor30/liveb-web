import React, { useState } from 'react'

import { useAuth } from '../../context/authContext'
import { Button, Modal, Table } from 'react-bootstrap'
import { BiHelpCircle } from 'react-icons/bi'
import { FiRefreshCw } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Sidebar from '../sidebarMenu'
import FlatList from 'flatlist-react'

export default function Dashboard() {

  const { nome, valorInvestido, payments, listPaymentsReceivable, payResult, qtdRecebida } = useAuth();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [buttonList, setButtonList] = useState(false);
  const [ativosHidden, setAtivosHidden] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleHidden() {
    setAtivosHidden(!ativosHidden);
  }

  async function handlePay(e) {
    e.preventDefault()
    try {
      setError("");
      setLoading(true);
      setButtonList(!buttonList)
      await listPaymentsReceivable()

    } catch {
      setError('Falhou ao tentar atualizar')
    }
    setLoading(false)
  }
  const renderPaymentDate = (payments, idx) => {
    return (
      <li key={idx} className="text-left">
        <h6>Pagamento dia {payments.pagar}
        </h6>
      </li>
    );
  }
  const renderPaymentMonthlyProfitability = (payments, idx) => {
    return (
      <li key={idx} className="text-center">
        <h6>R$ {payments.valorReceber},00</h6>
      </li>
    );
  }
  const renderPaymentAmountReceivable = (payments, idx) => {
    return (
      <li key={idx} className="text-center">
        <h6>{payments.rentabilidade}%a.m</h6>
      </li>
    );
  }
  const renderPaymentStatus = (payments, idx) => {
    return (
      <li key={idx} className="text-center" >
        {!payments.statusPagamento ? (<h6 style={payments.statusPagamento === true
          ? { color: 'green', textTransform: 'uppercase' }
          : { color: 'black', textTransform: 'uppercase' }
        }>À receber</h6>) : (<h6 style={payments.statusPagamento === true
          ? { color: 'green', textTransform: 'uppercase' }
          : { color: 'black', textTransform: 'uppercase' }
        }>Pago</h6>)}
      </li>

    );
  }
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        <Modal show={show} onHide={handleClose} className="modal-info" style={{ zIndex: 999999 }}>
          <Modal.Header closeButton />
          <Modal.Body>
            <section className="pb-2">
              <h5>Valor ativo na carteira</h5>
              <p>Valor total que você tem invstido na LIVEB que ainda esta ativo em algum investimento.</p>
            </section>
          </Modal.Body>

        </Modal>
        <div className="pl-5 pr-5 pb-3 pt-2">
          <h2 className="">Olá {nome}, bem vindo a Liveb</h2>
          <span style={{ margin: 0 }}>Aqui você consegue visualizar o resultado dos seus investimentos.</span>
        </div>
        <div className="ml-5 mr-5 mb-3">
          <div className="mb-3 container">
            <div className="row justify-content-center position-relative">
              <div className="m-2 col-xs-12 carteira">
                <div className="font-weight-bold">Valor ativo na sua carteira</div>
                <div className="mt-2 d-flex">
                  <div>
                    <div>
                      {!ativosHidden ? (<h2 className="box-value">{valorInvestido}</h2>) : (<div className="hidden-box" />)}
                    </div>
                    {!ativosHidden &&
                      <>
                        <div>
                          <li>
                            <strong>Valor investido na Liveb: </strong>
                            <span>R$ {valorInvestido}</span>
                          </li>
                        </div>
                      </>
                    }
                  </div>
                  <a onClick={handleShow} >
                    <BiHelpCircle size='24px' className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="separator col-xs-12"></div>
              <div className="m-2 col-xs-12">
                <div className="font-weight-bold">Você já recebeu</div>
                <div className="mt-2 d-flex">
                  <div>
                    <div>
                      {!ativosHidden ? (<h2 className="box-value">R$ {qtdRecebida}</h2>) : (<div className="hidden-box" />)}
                    </div>
                    {!ativosHidden &&
                      <>
                        <div>
                          <div className='subvalues'>
                            <li>
                              <strong>Você já recebeu: </strong>
                              <span>R$ {qtdRecebida}</span>
                            </li>
                          </div>
                        </div>
                      </>
                    }
                  </div>
                  <a onClick={handleShow} >
                    <BiHelpCircle size='24px' className="ml-2" />
                  </a>
                </div>
              </div>
              <button name="ativos" onClick={handleHidden} className="show-info">
                {!ativosHidden ? (<AiOutlineEyeInvisible size={28} />) : (<AiOutlineEye size={28} />)}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="text-white row-content">
              <div>
                <div className="header-table-dash">
                  <h5>Ativos</h5>
                  <span>veja seus recebimentos ativos</span>
                </div>
                <div className="body-table-dash mt-3 table-responsive">
                  <Table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">Data pagamento</th>
                        <th >Rentabilidade mensal</th>
                        <th scope="col">Valor a receber</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>
                          <FlatList
                            list={payments}
                            renderItem={renderPaymentDate}
                            displayRow={false}
                            renderWhenEmpty={() => <div>Vazio</div>} />
                        </td>
                        <td>
                          <FlatList
                            list={payResult}
                            renderItem={renderPaymentAmountReceivable}
                            displayRow={false}
                            renderWhenEmpty={() => <div>Vazio</div>} />
                        </td>
                        <td>
                          <FlatList
                            list={payResult}
                            renderItem={renderPaymentMonthlyProfitability}
                            displayRow={false}
                            renderWhenEmpty={() => <div>Vazio</div>} />
                        </td>
                        <td>
                          <FlatList
                            list={payments}
                            renderItem={renderPaymentStatus}
                            displayRow={false}
                            renderWhenEmpty={() => <div>Vazio</div>} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-12 col-xs-12 justify-content-center">
            <Button onClick={handlePay} className="w-50 mb-5 button-refresh-dash" disabled={buttonList}>Listar <FiRefreshCw /></Button>
          </div>
        </div>
      </div>
    </>
  )
}
