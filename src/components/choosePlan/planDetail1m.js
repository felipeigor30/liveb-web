import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import { Button, Form, Alert, Tab, Tabs, Carousel } from 'react-bootstrap';
import { BsClockHistory } from 'react-icons/bs'
import Sidebar from '../sidebarMenu';
import ImageDefaultPlan from '../choosePlan/novo/imagem13.png'
import LogoUrban from '../choosePlan/logo_liveb_urbanismo.png'
import img1 from '../choosePlan/novo/imagem1.png'
import img2 from '../choosePlan/novo/imagem2.png'
import img3 from '../choosePlan/novo/imagem3.png'
import img4 from '../choosePlan/novo/imagem4.png'
import img5 from '../choosePlan/novo/imagem5.png'
import img6 from '../choosePlan/novo/imagem6.png'
import img7 from '../choosePlan/novo/imagem7.png'
import img8 from '../choosePlan/novo/imagem8.png'
import img9 from '../choosePlan/novo/imagem9.png'
import img10 from '../choosePlan/novo/imagem10.png'
import img11 from '../choosePlan/novo/imagem11.png'
import img12 from '../choosePlan/novo/imagem12.png'
import img13 from '../choosePlan/novo/imagem13.png'
import img14 from '../choosePlan/novo/imagem14.png'
import img15 from '../choosePlan/novo/imagem15.png'
import { AiOutlineDownload } from "react-icons/ai"

export default function PlanDetail1M() {

  const { saveAmountQuotas, handlePlanGold, } = useAuth();
  const [valor, setValor] = useState(1000);
  const history = useHistory();
  const [error, setError] = useState('');
  const [checkBox, setCheckBox] = useState('');
  const [investimento, setInvestimento] = useState();
  const quantidadeCotas = (investimento / 1000);
  const teste = valor * (quantidadeCotas + 0);
  const quantidadeCotasComparador = quantidadeCotas;

  async function handleSubmitGold(e) {
    e.preventDefault()
    try {
      setError("");

      const recipe = valor * quantidadeCotas
      const aux = (checkBox === "Bullet" ? 38.8 : 1.5)
      const valorRecebimentoLiveb = (recipe * aux) / 100
      setValor(recipe.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
      await handlePlanGold()
      await saveAmountQuotas(quantidadeCotas, recipe, valorRecebimentoLiveb, checkBox)
      history.push(`/plan/ZQpjks7iB1/contract`)

    } catch {
      setError('Falha ao se cadastrar')
    }
  }

  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="pl-5 pr-5 pb-3 pt-2 text-center">
          <h2 className="">Botânico 1 Condomínio Sales Oliveira - SP</h2>
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
                  <li className="text-dark mb-2"><strong>Botânico 1 Condomínio Sales Oliveira - SP</strong></li>
                  <li className="mb-2">Prazo<br /><strong> 24 meses</strong></li>
                  <li className="mb-2">Rentabilidade <br /> <strong>18% a.a, juros mensais</strong></li>
                  <li className="mb-2">Rentabilidade <br /> <strong>19,4% a.a, bullet</strong></li>
                  <li className="mb-2">Investimento Mínimo <br /> <strong>R$ 1.000,00</strong></li>
                  <hr />
                  <Form.Group controlId="formBasicRange" >
                    <p className="text-dark h4 font-weight-bold">Quanto quer investir?</p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" placeholder="R$ 0,00" value={investimento} onChange={e => {
                      setInvestimento(e.target.value)
                    }} maxLength={7} />
                    <Form.Text className="text-danger">
                      O valor a ser investido deve ser multiplo de R$ 1.000,00
                    </Form.Text>
                  </Form.Group>
                  <Tabs defaultActiveKey="jurosMensais" transition={false} id="noanim-tab-example">
                    <Tab eventKey="jurosMensais" title="Juros Mensais">
                      <div className="row">
                        <p className="text-dark ">Quantidade de cotas: {(investimento % 1000) === 0 ? quantidadeCotas : 0} cotas</p>
                        <p className="text-dark">Valor que será investido <strong>R${investimento == null ? 0 : teste.toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">Juros Mensais Liveb 1.5% A.m: <strong>R${investimento == null ? 0 : (((valor * (quantidadeCotasComparador)) * 1.5) / 100).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">CDI 0.22% A.m: <strong>R${investimento == null ? 0 : (((valor * quantidadeCotasComparador) * 0.22) / 100).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>

                        <p className="text-dark">Poupanca 0.16% A.m: <strong>R${investimento == null ? 0 : (((valor * quantidadeCotasComparador) * 0.16) / 100).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">Rendimento ao final do plano + investimento inicial: <strong>R${investimento == null ? 0 : (((((valor * quantidadeCotasComparador) * 36) / 100) + (investimento * 1))).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <br />
                        <p className="text-muted"><small>simulador com valores apenas para efeito de comparação entre Liveb, CDI e a poupança</small></p>
                      </div>

                    </Tab>

                    <Tab eventKey="bullet" title="Bullet">
                      <div className="row">
                        <p className="text-dark ">Quantidade de cotas: {(investimento % 1000) === 0 ? quantidadeCotas : 0} cotas</p>
                        <p className="text-dark">Valor que será investido <strong>R${investimento == null ? 0 : teste.toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">Bullet Liveb 38.8% no final do plano: <strong>R${investimento == null ? 0 : ((((valor * (quantidadeCotasComparador)) * 38.8) / 100)).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">CDI 5,28% após 24 meses: <strong>R${investimento == null ? 0 : ((((valor * quantidadeCotasComparador) * 5.28) / 100)).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>

                        <p className="text-dark">Poupanca 0.16% após 24 meses: <strong>R${investimento == null ? 0 : (((valor * quantidadeCotasComparador) * 3.84) / 100).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <p className="text-dark">Rendimento ao final do plano + investimento inicial: <strong>R${investimento == null ? 0 : (((((valor * quantidadeCotasComparador) * 38.8) / 100) + (investimento * 1))).toFixed(2)
                          .replace('.', ',')
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong></p>
                        <br />
                        <p className="text-muted"><small>simulador com valores apenas para efeito de comparação entre Liveb, CDI e a poupança</small></p>
                      </div>
                    </Tab>
                  </Tabs>

                  <Form.Group>
                    <Form.Text className="text-dark h4 font-weight-bold mt-3">Em qual opção gostaria de investir?</Form.Text>
                    <Form.Check name="tipo-investimento" label="Juros Mensais" inline type="radio" required onChange={() => { setCheckBox("Juros Mensais") }} />
                    <Form.Check name="tipo-investimento" label="Bullet" inline type="radio" required onChange={() => { setCheckBox("Bullet") }} />
                  </Form.Group>

                  <hr />
                  <div className='d-flex justify-content-between'>
                    <div>
                      <BsClockHistory className="icon-tab" />
                      <span className="span-end">Termina em 07/04/2021</span>
                    </div>
                    <div>
                      <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/03/Prospecto-Condomi%CC%81nio-Bota%CC%82nico-1-Sales.pdf" target="_blank" rel="noreferrer">
                        <AiOutlineDownload className="icon-tab" />
                        <span className="span-end">Prospecto</span>
                      </a>
                    </div>
                  </div>
                  <hr />

                  <div className='col-md-12 col-xs-12 mt-2 align-bottom'>
                    <Button className='w-100 button-plan' type="submit" disabled={(investimento % 1000) === 0 && investimento > 0 && checkBox !== '' ? false : true}>Investir</Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div className="mt-5 mb-5">
            <Tabs defaultActiveKey="empresa" transition={false} id="noanim-tab-example">
              <Tab eventKey="empresa" title="Empresa">
                <div className="row">
                  <img src={LogoUrban} className="img-fluid col-md-2 col-xs-12" alt="Liveb Urbanismo" />
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
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img8}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img9}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img10}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img11}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img12}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img13}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img14}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-25"
                      src={img15}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="mt-5">
                  <p>Condomínio de alto padrão em área de 46.853,38 m2, no município de
                  Sales oliveira/sp, a 55 km de Ribeirão Preto/SP. O projeto já está aprovado e as
obras estão previstas para entrega em dezembro de 2023.</p>
                  <p>O condomínio terá 117 lotes de até 516 m2.</p>
                  <ul>
                    <li>- Número de unidades: 117 unidades</li>
                    <li>- Unidades vendidas: 46 unidades</li>
                    <li>- Preço médio de venda: R$ 102.441,37</li>
                    <li>- Valor geral das vendas: R$ 11.985.640,00</li>
                    <li>- Target/VGV: 11,98%</li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="remuneracao" title="Remuneração">
                <p>Nesta captação o investidor poderá escolher entre duas opções:</p>
                <strong>Bullet:</strong>
                <ul className="mt-2">
                  <li>Forma de pagamento: Bullet</li>
                  <li>Parcela única em modelo em que se paga todo o MONTANTE no 24º mês.</li>
                  <li>Rentabilidade: 38.8%.</li>
                  <li>Prazo: 24 meses.</li>
                </ul>
                <strong>Juros Mensais:</strong>
                <ul className="mt-2">
                  <li>Forma de pagamento: Juros Mensais</li>
                  <li>Pagamento mensal correspondente aos juros remuneratórios, a serem efetuados nos meses subsequentes e devolução do volume investido na mesma data de pagamento da 24º parcela.</li>
                  <li>Rentabilidade: 18% a.a.</li>
                  <li>Prazo: 24 meses.</li>
                </ul>
              </Tab>
              <Tab eventKey="juridico" title="Jurídico">
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2020/12/cartao-cnpj.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Cartão CNPJ - Baixar</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-ESTADUAL-LIVEB-INVESTIMENTOS.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Certidão Negativa de Débitos Estadual</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-FEDERAIS-LIVEB-INVESTIMENTOS.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Certidão Negativa de Débitos Federal</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/CND-TRABALHISTA-LIVEB-INVESTIMENTOS.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Certidão Negativa de Débitos Trabalhista</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/Certidao6031416-LIVEB.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Certidão Estadual de Distribuições Cíveis</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/01/TRT15_ceat_37868391000170.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Certidão de Justiça do Trabalho</span>
                  </a>
                </li>
              </Tab>
              <Tab eventKey="prospecto" title="Prospecto">
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/03/Prospecto-Condomi%CC%81nio-Bota%CC%82nico-1-Sales.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Prospecto - Baixar</span>
                  </a>
                </li>
              </Tab>
              <Tab eventKey="contrato" title="Contrato Demo">
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/03/CONTRATO-17-03-2021-Rentabilidade-388.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Contrato Bullet Demo</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.livebinvestimentos.com.br/wp-content/uploads/2021/03/CONTRATO-17-03-2021-Rentabilidade-15.pdf" target="_blank" rel="noreferrer">
                    <AiOutlineDownload className="icon-tab" />
                    <span className="span-download">Contrato Juros Mensal Demo</span>
                  </a>
                </li>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
