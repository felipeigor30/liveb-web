import React from 'react'
import Sidebar from '../sidebarMenu'
import { RiNewspaperFill } from 'react-icons/ri'

export default function Contract() {
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12 p-2">
        <header className="text-center text-dark pt-2 mt-2 header-custom">O Contrato</header>
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan" style={{ fontSize: '25px', fontWeight: 'bold' }}>Parabéns por dar este grande passo</h2>
            <h4 className="description-h4-plan">
              Solicite em nosso whatsapp o seu contrato, enviaremos para você!
            </h4>
            <h4 className="description-h4-plan">
              Seu investimento só terá validade quando o contrato estiver assinado e a Liveb já tiver recebido sua transferencia bancaria.
            </h4>
            <h4 className="description-h4-plan">
              Usuários que não entrarem em contato para efetuar a assinatura do contrato e efetuar os pagamentos, terão suas contas deletadas após um periodo de inatividade ou de não compromisso com suas responsabilidades.
            </h4>
            <div className="justify-content-center">
              <div className="row">
                <div className="col text-center m-3">
                  <a href="https://web.whatsapp.com/send?phone=5516997040044" className='w-25  btn button-contract p-2 justify-content-center align-items-center'><RiNewspaperFill style={{ fontSize: '2rem', marginLeft: '10px', marginRight: '10px' }} />solicitar</a>
                </div>
              </div></div>
          </div>
        </div>
      </div>
    </>
  )
}
