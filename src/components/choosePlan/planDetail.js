import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import { Button, Form, Alert } from 'react-bootstrap';
import { BsClockHistory } from 'react-icons/bs'
import Sidebar from '../sidebarMenu';
import ImageDefaultPlan from '../choosePlan/img-default-plan.jpg'


export default function PlanDetail() {
  const { saveAmountQuotas, possuiCotaComprada, handlePlanGold } = useAuth();
  const [count, setCount] = useState(1);
  const [valor, setValor] = useState(1000);
  const [valorInt, setValorInt] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState('');
  const teste = valor * count;
  const [idInvest, setIdInvest] = useState('ZQpjks7iBMhDtDwPLiuY')

  async function handleSubmitGold(e) {
    e.preventDefault()
    try {
      setError("");
      setLoading(true);
      const recipe = valor * count
      const calc = (recipe * 2) / 100
      setValor(recipe.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
      setValorInt(calc)
      await handlePlanGold()
      await saveAmountQuotas(count, recipe.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'), calc)
      history.push(`/plan/${idInvest}/contract`)
    } catch {
      setError('Falha ao se cadastrar')
    }
    setLoading(false)
  }
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="pl-5 pr-5 pb-3 pt-2 text-center">
          <h2 className="">Escolha e invista</h2>
          <span className="">Não perca tempo, invista agora!</span>
        </div>
        <div className="pl-5-custom pr-5-custom pb-3 pt-2">
          <div className="p-2">
            <Form onSubmit={handleSubmitGold}>
              <div className='row m-2'>
                <div className='col-md-8 col-xs-12 '>
                  <img src={ImageDefaultPlan} alt='logo' className='img-fluid ' />
                </div>
                <div className='col-md-4 col-xs-12 plan-info'>
                  <li className="text-dark"><strong>Investimento LIVEB</strong></li>
                  <li>2% ao mês (24% bienal)</li>
                  <li>R$: 1.000,00 cota mínima.</li>
                  <li>R$: 2.000.000,00 cota máxima.</li>
                  <li>24 meses de investimento ( 48% lucro total )</li>
                  <li>Recebimento lucro mensal ou bullet</li>
                  <li>Saque investimento inicial após 24 meses</li>
                  <hr />
                  <Form.Group controlId="formBasicRange" >
                    <p className="text-dark h4 font-weight-bold">Quantas cotas deseja?</p>

                    <Form.Control className="bg-dark range" type="range" min="1" max='2000' value={count} onChange={e => {
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
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <div>
                      <BsClockHistory />
                      <span className="span-end">Termina em 05/01/2021</span>
                    </div>
                    <div ><span className="span-end">informações</span></div>
                  </div>
                  <hr />
                  <div className='col-md-12 col-xs-12 mt-2 align-bottom'>
                    <Button className='w-100 button-plan' type="submit" disabled={possuiCotaComprada ? true : false} >Investir</Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div>
            <div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
