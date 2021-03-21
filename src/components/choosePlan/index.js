import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import './styles.css'
import ImageDefaultPlan from '../choosePlan/novo/imagem13.png'
import Sidebar from '../sidebarMenu'

export default function ChoosePlan() {
  const [error, setError] = useState('')
  const [idInvest, setIdInvest] = useState('ZQpjks7iBMhDtDwPLiuY')
  const [idInvest2, setIdInvest2] = useState('ZQpjks7iBM')


  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="pl-5 pr-5 pb-3 pt-2">
          <div className="mb-2">
            <h2 className="title-h2-plan">Captações diponíveis</h2>
            <h4 className="description-h4-plan pt-1">Caso não apareça nenhum plano de investimento, fique calmo, <br />pois provavelmente estaremos preparando novas oportunidades para você.</h4>
          </div>
          <div className="ml-2 ml-2 mt-1 mb-2 justify-content-center  " style={{ display: 'flex', }}>
            <div className="row justify-content-center pt-3">
              {/* <div className="card p-2 col-md-6 col-xs-12">
                <img src={ImageDefaultPlan} alt='logo' className='img-fluid' />
                <li>
                  <strong>Investimento LIVEB</strong></li>
                <li>2% ao mês (24% bienal)</li>
                <li>R$: 1.000,00 cota mínima.</li>
                <li>R$: 2.000.000,00 cota máxima.</li>
                <li>24 meses de investimento ( 48% lucro total )</li>
                <li>Recebimento lucro mensal ou bullet</li>
                <li>Saque investimento inicial após 24 meses</li>
                <Link to={`/plan/${idInvest}`}><Button className='w-100 button-plan mt-2'>Saber mais</Button></Link>
              </div> */}

              {/* captacao */}
              {/* <div className="card p-2 col-md-5 col-xs-12" >
                <img src={ImageDefaultPlan} alt='logo' className='img-fluid mb-3' />
                <li className="mb-2">
                  <strong>Condomínio Tambaú - 2º fase - Liveb Urbanismo</strong></li>
                <li className="mb-2">Prazo: 24 meses</li>
                <li className="mb-2">Rentabilidade: 24% a.a</li>
                <li className="mb-2">Investimento Mínimo: R$ 1000,00</li>
                <Link to={'/plan/ZQpjks7iBM'}><Button className='w-100 button-plan mt-2'>Saber mais</Button></Link>
              </div> */}
              <div className="card p-2 col-md-4 col-xs-12" >
                <img src={ImageDefaultPlan} alt='logo' className='img-fluid mb-3' />
                <li className="mb-2">
                  <strong>Botânico 1 Condomínio Sales Oliveira - SP</strong></li>
                <li className="mb-2">Prazo: 24 meses</li>
                <li className="mb-2">Rentabilidade(Mensal): 18% a.a, juros mensais</li>
                <li className="mb-2">Rentabilidade(Bullet): 19.4% a.a </li>
                <li className="mb-2">Investimento Mínimo: R$ 1.000,00</li>
                <Link to={'/plan/ZQpjks7iB1'}><Button className='w-100 button-plan mt-2'>Saber mais</Button></Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
