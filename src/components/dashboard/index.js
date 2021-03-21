import React, { useState } from 'react'

import { useAuth } from '../../context/authContext'
import { Button, Modal, Table } from 'react-bootstrap'
import { BiHelpCircle } from 'react-icons/bi'
import { FiRefreshCw } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Sidebar from '../sidebarMenu'
import FlatList from 'flatlist-react'

export default function Dashboard() {

  const { nome, valorInvestido, payments, listPaymentsReceivable, qtdRecebida } = useAuth();
  const [show, setShow] = useState(false);
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
      setButtonList(!buttonList);
      await listPaymentsReceivable()
    } catch { }
  }


  const renderPaymentDate = (payments, idx) => {
    if (payments.disponivel === true) {
      return (
        <tr key={idx} className="text-center">
          <td><h6>{payments.pagar}</h6></td>
          <td><h6>{payments.rentabilidade}% {payments.opcaoInvestimento === 'Bullet' ? (' ') : ('a.m')}</h6></td>
          <td><h6>R$ {payments.valorReceber},00</h6></td>
          <td><h6>{payments.opcaoInvestimento}</h6></td>
          <td>{!payments.statusPagamento ? (<h6 style={payments.statusPagamento === true
            ? { color: 'green', textTransform: 'uppercase' }
            : { color: 'black', textTransform: 'uppercase' }
          }>À receber</h6>) : (<h6 style={payments.statusPagamento === true
            ? { color: 'green', textTransform: 'uppercase' }
            : { color: 'black', textTransform: 'uppercase' }
          }>Pago</h6>)}</td>
        </tr>

      );
    } else return
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
              <p>É o valor ativo investido atualmente na Liveb.</p>
            </section>
            <section className="pb-2">
              <h5>Valor já investido na Liveb</h5>
              <p>É o valor que você já investiu, levando em consideração todas os seus investimentos feitos na Liveb.</p>
            </section>
            <section className="pb-2">
              <h5>Você já recebeu</h5>
              <p>Quantidade que você já recebeu da Liveb.</p>
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
                            <strong>Valor já investido na Liveb: </strong>
                            <span>R$ {valorInvestido}</span>
                          </li>
                        </div>
                      </>
                    }
                  </div>
                  <a onClick={handleShow} href>
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
                      {!ativosHidden ? (<h2 className="box-value">R$ {qtdRecebida},00</h2>) : (<div className="hidden-box" />)}
                    </div>
                    {!ativosHidden &&
                      <>
                        <div>
                          <div className='subvalues'>
                            <li>

                            </li>
                          </div>
                        </div>
                      </>
                    }
                  </div>
                  <a onClick={handleShow} href>
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
                        <th scope="col">Rentabilidade</th>
                        <th scope="col">Valor a receber</th>
                        <th scope="col">Modo investimento</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <FlatList
                        list={payments}
                        renderItem={renderPaymentDate}
                        displayRow={false}
                        renderWhenEmpty={() => <div> </div>} />
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
