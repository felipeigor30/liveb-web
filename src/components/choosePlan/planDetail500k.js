import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import { Button, Form, Alert, Sonnet, Tab, Tabs, Carousel } from 'react-bootstrap';
import { BsClockHistory } from 'react-icons/bs'
import Sidebar from '../sidebarMenu';
import ImageDefaultPlan from '../choosePlan/tambau.jpg'
import LogoUrban from '../choosePlan/logo_liveb_urbanismo.png'
import img1 from '../choosePlan/1-5.png'
import img2 from '../choosePlan/1-6.png'
import img3 from '../choosePlan/1-7.png'
import img4 from '../choosePlan/2.png'
import img5 from '../choosePlan/3-14.png'
import img6 from '../choosePlan/3-16.png'
import img7 from '../choosePlan/3-17.png'
import { AiOutlineDownload } from "react-icons/ai"

export default function PlanDetail500() {
  const { saveAmountQuotas, possuiCotaComprada, handlePlanGold, possuiPlano } = useAuth();
  const [count, setCount] = useState(1);
  const [valor, setValor] = useState(1000);
  const [valorInt, setValorInt] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState('');
  const teste = valor * count;
  const [idInvest, setIdInvest] = useState('ZQpjks7iBM')

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
      history.push(`/plan/ZQpjks7iBM/contract`)
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
          <h2 className="">Condomínio Tambaú - 2º fase - Liveb Urbanismo</h2>
          <span className="">Modalidade CROWDFUNDING</span>
        </div>
        <div className="pl-5-custom pr-5-custom pb-3 pt-2">
          <div className="p-2">
            <Form onSubmit={handleSubmitGold}>
              <div className='row m-2'>
                <div className='col-md-8 col-xs-12 '>
                  <img src={ImageDefaultPlan} alt='logo' className='img-fluid ' />
                </div>
                <div className='col-md-4 col-xs-12 plan-info'>
                  <li className="text-dark mb-2"><strong>Condomínio Tambaú - 2º fase - Liveb Urbanismo</strong></li>
                  <li className="mb-2">Prazo<br /><strong> 24 meses</strong></li>
                  <li className="mb-2">Rentabilidade <br /> <strong>24% a.a</strong></li>
                  <li className="mb-2">Investimento Mínimo <br /> <strong>R$ 1.000,00</strong></li>
                  <hr />
                  <Form.Group controlId="formBasicRange" >
                    <p className="text-dark h4 font-weight-bold">Quanto quer investir?</p>
                    <Form.Control className="bg-dark range" type="range" min="1" max='500' value={count} onChange={e => {
                      setCount(e.target.value)
                    }} />
                  </Form.Group>
                  <p className="text-dark ">Quantidade de cotas: {count} cotas</p>
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
                    <div>
                      <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2020/12/Prospecto-LIVEB-URBANISMO.pdf" target="_blank">
                        <AiOutlineDownload />
                        <span className="span-end">Prospecto</span>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className='col-md-12 col-xs-12 mt-2 align-bottom'>
                    <Button className='w-100 button-plan' type="submit" disabled={true} >Investir</Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div className="mt-5 mb-5">
            <Tabs defaultActiveKey="empresa" transition={false} id="noanim-tab-example">
              <Tab eventKey="empresa" title="Empresa">
                <div className="row">
                  <img src={LogoUrban} className="img-fluid col-md-2 col-xs-12" />
                  <p className="col-md-10 col-xs-12 " style={{ fontSize: '18px', lineHeight: '1.5' }}><strong>LIVEB URBANISMO</strong> é uma incorporadora, especializada em condomínios de alto padrão e loteamentos abertos, vinculada a um grupo com mais de 10 anos de mercado.</p>
                </div>
              </Tab>
              <Tab eventKey="empreendimento" title="Empreendimento">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img2}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img4}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img5}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img6}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img7}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="mt-5">
                  <p>Condomínio de alto padrão em área de 49 mil m2, no município de Tambaú, a 100 km de Ribeirão Preto/SP. O projeto já está aprovado e as obras estão previstas para entrega em dezembro de 2021. O condomínio terá 76 lotes de até 576 m2.</p>
                  <p>Seu mais novo investimento, um condomínio com um conceito verde, proporciona uma proximidade com a natureza e ótima localização na cidade de Tambaú/SP, contendo diversos benefícios como:</p>
                  <ul>
                    <li>-Alto Padrão</li>
                    <li>-Terrenos a partir de 300m2</li>
                    <li>-Piscina</li>
                    <li>-Quadra de Futebol</li>
                    <li>-Área de Festas</li>
                    <li>-Segurança com guarita</li>
                    <li>-Murado em seu redor</li>
                    <li>-Bosque</li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="remuneracao" title="Remuneração">
                <p>Nesta captação o investidor poderá escolher entre duas opções:</p>
                <strong>Bullet:</strong>
                <ul className="mt-2">
                  <li>Forma de pagamento: Bullet</li>
                  <li>Parcela única em modelo em que se paga todo o MONTANTE no 24º mês.</li>
                  <li>Rentabilidade: 24% a.a.</li>
                  <li>Prazo: 24 meses.</li>
                </ul>
                <strong>Juros Mensais:</strong>
                <ul className="mt-2">
                  <li>Forma de pagamento: Juros Mensais</li>
                  <li>Pagamento mensal correspondente aos juros remuneratórios, a serem efetuados nos meses subsequentes e devolução do volume investido na mesma data de pagamento da 24º parcela.</li>
                  <li>Rentabilidade: 2% a.m.</li>
                  <li>Prazo: 24 meses.</li>
                </ul>
              </Tab>
              <Tab eventKey="juridico" title="Jurídico">
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2020/12/cartao-cnpj.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Cartão CNPJ - Baixar</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-ESTADUAL-LIVEB-INVESTIMENTOS.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Certidão Negativa de Débitos Estadual</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-FEDERAIS-LIVEB-INVESTIMENTOS.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Certidão Negativa de Débitos Federal</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-TRABALHISTA-LIVEB-INVESTIMENTOS.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Certidão Negativa de Débitos Trabalhista</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/Certidao6031416-LIVEB.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Certidão Estadual de Distribuições Cíveis</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/TRT15_ceat_37868391000170.pdf" target="_blank">
                    <AiOutlineDownload />
                    <span className="">Certidão de Justiça do Trabalho</span>
                  </a>
                </li>
              </Tab>
              <Tab eventKey="prospecto" title="Prospecto">
                <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2020/12/Prospecto-LIVEB-URBANISMO.pdf" target="_blank">
                  <AiOutlineDownload />
                  <span className="">Prospecto - Baixar</span>
                </a>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
