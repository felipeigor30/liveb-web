import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../../context/authContext'
import { useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'

import { cpfMask, rgMask, phoneMask } from '../masks'



import Sidebar from '../sidebarMenu'

import './styles.css'
export default function Profile() {
  const options = [
    {
      value: "001 BANCO DO BRASIL", label: "001 BANCO DO BRASIL"

    },
    {
      value: "341 ITAÚ", label: "341 ITAÚ"

    },
    {
      value: "104 CAIXA ECONÔMICA FEDERAL", label: "104 CAIXA ECONÔMICA FEDERAL"

    },
    {
      value: "033 BANCO SANTANDER S.A", label: "033 BANCO SANTANDER S.A"

    },
    {
      value: "070 BRB - BANCO DE BRASÍLIA", label: "070 BRB - BANCO DE BRASÍLIA"

    },
    {
      value: "077 BANCO INTER", label: "077 BANCO INTER"

    },
    {
      value: "237 BRADESCO", label: "237 BRADESCO"

    },
    {
      value: "745 CITIBANK", label: "745 CITIBANK"

    },
    {
      value: "422 BANCO SAFRA", label: "422 BANCO SAFRA"

    },
    {
      value: "399 BANCO HSBC", label: "399 BANCO HSBC"

    },
    {
      value: "756 BANCOOB", label: "756 BANCOOB"

    },
    {
      value: "212 BANCO ORIGINAL", label: "212 BANCO ORIGINAL"

    },
    {
      value: "002 BANCO CENTRAL DO BRASIL", label: "002 BANCO CENTRAL DO BRASIL"

    },
    {
      value: "003 BANCO DA AMAZONIA S.A", label: "003 BANCO DA AMAZONIA S.A",

    },
    {
      value: "004 BANCO DO NORDESTE DO BRASIL S.A", label: "004 BANCO DO NORDESTE DO BRASIL S.A"

    },
    {
      value: "007 BANCO NAC DESENV.ECO.SOCIAL S.A", label: "007 BANCO NAC DESENV.ECO.SOCIAL S.A"

    },
    {
      value: "008 BANCO MERIDIONAL DO BRASIL", label: "008 BANCO MERIDIONAL DO BRASIL"

    },
    {
      value: "020 BANCO DO ESTADO DE ALAGOAS S.A", label: "020 BANCO DO ESTADO DE ALAGOAS S.A"

    },
    {
      value: "021 BANCO DO ESTADO DO ESPIRITO SANTO S.A", label: "021 BANCO DO ESTADO DO ESPIRITO SANTO S.A"

    },
    {
      value: "022 BANCO DE CREDITO REAL DE MINAS GERAIS SA", label: "022 BANCO DE CREDITO REAL DE MINAS GERAIS SA"

    },
    {
      value: "024 BANCO DO ESTADO DE PERNAMBUCO", label: "024 BANCO DO ESTADO DE PERNAMBUCO"

    },
    {
      value: "025 BANCO ALFA S/ A ", label: "025 BANCO ALFA S/ A "

    },
    {
      value: "026 BANCO DO ESTADO DO ACRE S.A", label: "026 BANCO DO ESTADO DO ACRE S.A"

    },
    {
      value: "027 BANCO DO ESTADO DE SANTA CATARINA S.A", label: "027 BANCO DO ESTADO DE SANTA CATARINA S.A"

    },
    {
      value: "028 BANCO DO ESTADO DA BAHIA S.A", label: "028 BANCO DO ESTADO DA BAHIA S.A"

    },
    {
      value: "029 BANCO DO ESTADO DO RIO DE JANEIRO S.A", label: "029 BANCO DO ESTADO DO RIO DE JANEIRO S.A"

    },
    {
      value: "030 BANCO DO ESTADO DA PARAIBA S.A", label: "030 BANCO DO ESTADO DA PARAIBA S.A"

    },
    {
      value: "031 BANCO DO ESTADO DE GOIAS S.A", label: "031 BANCO DO ESTADO DE GOIAS S.A"

    },
    {
      value: "032 BANCO DO ESTADO DO MATO GROSSO S.A. ", label: "032 BANCO DO ESTADO DO MATO GROSSO S.A. "

    },
    {
      value: "034 BANCO DO ESADO DO AMAZONAS S.A", label: "034 BANCO DO ESADO DO AMAZONAS S.A"

    },
    {
      value: "035 BANCO DO ESTADO DO CEARA S.A", label: "035 BANCO DO ESTADO DO CEARA S.A"

    },
    {
      value: "036 BANCO DO ESTADO DO MARANHAO S.A", label: "036 BANCO DO ESTADO DO MARANHAO S.A"

    },
    {
      value: "037 BANCO DO ESTADO DO PARA S.A", label: "037 BANCO DO ESTADO DO PARA S.A"

    },
    {
      value: "038 BANCO DO ESTADO DO PARANA S.A", label: "038 BANCO DO ESTADO DO PARANA S.A"

    },
    {
      value: "039 BANCO DO ESTADO DO PIAUI S.A", label: "039 BANCO DO ESTADO DO PIAUI S.A"

    },
    {
      value: "041 BANCO DO ESTADO DO RIO GRANDE DO SUL S.A", label: "041 BANCO DO ESTADO DO RIO GRANDE DO SUL S.A"

    },
    {
      value: "047 BANCO DO ESTADO DE SERGIPE S.A", label: "047 BANCO DO ESTADO DE SERGIPE S.A"

    },
    {
      value: "048 BANCO DO ESTADO DE MINAS GERAIS S.A", label: "048 BANCO DO ESTADO DE MINAS GERAIS S.A"

    },
    {
      value: "059 BANCO DO ESTADO DE RONDONIA S.A", label: "059 BANCO DO ESTADO DE RONDONIA S.A"

    },
    {
      value: "106 BANCO ITABANCO S.A. ", label: "106 BANCO ITABANCO S.A. "

    },
    {
      value: "107 BANCO BBM S.A", label: "107 BANCO BBM S.A"

    },
    {
      value: "109 BANCO CREDIBANCO S.A", label: "109 BANCO CREDIBANCO S.A"

    },
    {
      value: "116 BANCO B.N.L DO BRASIL S.A", label: "116 BANCO B.N.L DO BRASIL S.A"

    },
    {
      value: "148 MULTI BANCO S.A", label: "148 MULTI BANCO S.A"

    },
    {
      value: "151 CAIXA ECONOMICA DO ESTADO DE SAO PAULO", label: "151 CAIXA ECONOMICA DO ESTADO DE SAO PAULO"

    },
    {
      value: "153 CAIXA ECONOMICA DO ESTADO DO R.G.SUL", label: "153 CAIXA ECONOMICA DO ESTADO DO R.G.SUL"

    },
    {
      value: "165 BANCO NORCHEM S.A", label: "165 BANCO NORCHEM S.A"

    },
    {
      value: "166 BANCO INTER - ATLANTICO S.A", label: "166 BANCO INTER - ATLANTICO S.A"

    },
    {
      value: "168 BANCO C.C.F.BRASIL S.A", label: "168 BANCO C.C.F.BRASIL S.A"

    },
    {
      value: "175 CONTINENTAL BANCO S.A", label: "175 CONTINENTAL BANCO S.A"

    },
    {
      value: "184 BBA - CREDITANSTALT S.A", label: "184 BBA - CREDITANSTALT S.A"

    },
    {
      value: "199 BANCO FINANCIAL PORTUGUES", label: "199 BANCO FINANCIAL PORTUGUES"

    },
    {
      value: "200 BANCO FRICRISA AXELRUD S.A", label: "200 BANCO FRICRISA AXELRUD S.A"

    },
    {
      value: "201 BANCO AUGUSTA INDUSTRIA E COMERCIAL S.A", label: "201 BANCO AUGUSTA INDUSTRIA E COMERCIAL S.A"

    },
    {
      value: "204 BANCO S.R.L S.A", label: "204 BANCO S.R.L S.A"

    },
    {
      value: "205 BANCO SUL AMERICA S.A", label: "205 BANCO SUL AMERICA S.A"

    },
    {
      value: "206 BANCO MARTINELLI S.A", label: "206 BANCO MARTINELLI S.A"

    },
    {
      value: "208 BANCO PACTUAL S.A", label: "208 BANCO PACTUAL S.A"

    },
    {
      value: "210 DEUTSCH SUDAMERIKANICHE BANK AG", label: "210 DEUTSCH SUDAMERIKANICHE BANK AG"

    },
    {
      value: "211 BANCO SISTEMA S.A", label: "211 BANCO SISTEMA S.A"

    },
    {
      value: "213 BANCO ARBI S.A", label: "213 BANCO ARBI S.A"

    },
    {
      value: "214 BANCO DIBENS S.A", label: "214 BANCO DIBENS S.A"

    },
    {
      value: "215 BANCO AMERICA DO SUL S.A", label: "215 BANCO AMERICA DO SUL S.A"

    },
    {
      value: "216 BANCO REGIONAL MALCON S.A", label: "216 BANCO REGIONAL MALCON S.A"

    },
    {
      value: "217 BANCO AGROINVEST S.A", label: "217 BANCO AGROINVEST S.A"

    },
    {
      value: "218 BS2", label: "218 BS2"

    },
    {
      value: "219 BANCO DE CREDITO DE SAO PAULO S.A", label: "219 BANCO DE CREDITO DE SAO PAULO S.A"

    },
    {
      value: "220 BANCO CREFISUL", label: "220 BANCO CREFISUL"

    },
    {
      value: "221 BANCO GRAPHUS S.A", label: "221 BANCO GRAPHUS S.A"

    },
    {
      value: "222 BANCO AGF BRASIL S.A. ", label: "222 BANCO AGF BRASIL S.A. "

    },
    {
      value: "223 BANCO INTERUNION S.A", label: "223 BANCO INTERUNION S.A"

    },
    {
      value: "224 BANCO FIBRA S.A", label: "224 BANCO FIBRA S.A"

    },
    {
      value: "225 BANCO BRASCAN S.A", label: "225 BANCO BRASCAN S.A"

    },
    {
      value: "228 BANCO ICATU S.A", label: "228 BANCO ICATU S.A"

    },
    {
      value: "229 BANCO CRUZEIRO S.A", label: "229 BANCO CRUZEIRO S.A"

    },
    {
      value: "230 BANCO BANDEIRANTES S.A", label: "230 BANCO BANDEIRANTES S.A"

    },
    {
      value: "231 BANCO BOAVISTA S.A", label: "231 BANCO BOAVISTA S.A"

    },
    {
      value: "232 BANCO INTERPART S.A", label: "232 BANCO INTERPART S.A"

    },
    {
      value: "233 BANCO MAPPIN S.A", label: "233 BANCO MAPPIN S.A"

    },
    {
      value: "234 BANCO LAVRA S.A. ", label: "234 BANCO LAVRA S.A. "

    },
    {
      value: "235 BANCO LIBERAL S.A", label: "235 BANCO LIBERAL S.A"

    },
    {
      value: "236 BANCO CAMBIAL S.A", label: "236 BANCO CAMBIAL S.A"

    },
    {
      value: "239 BANCO BANCRED S.A", label: "239 BANCO BANCRED S.A"

    },
    {
      value: "240 BANCO DE CREDITO REAL DE MINAS GERAIS S. ", label: "240 BANCO DE CREDITO REAL DE MINAS GERAIS S. "

    },
    {
      value: "241 BANCO CLASSICO S.A", label: "241 BANCO CLASSICO S.A"

    },
    {
      value: "242 BANCO EUROINVEST S.A", label: "242 BANCO EUROINVEST S.A"

    },
    {
      value: "243 BANCO MÁXIMA S.A,", label: "243 BANCO MÁXIMA S.A,"

    },
    {
      value: "244 BANCO CIDADE S.A", label: "244 BANCO CIDADE S.A"

    },
    {
      value: "245 BANCO EMPRESARIAL S.A", label: "245 BANCO EMPRESARIAL S.A"

    },
    {
      value: "246 BANCO ABC ROMA S.A", label: "246 BANCO ABC ROMA S.A"

    },
    {
      value: "247 BANCO OMEGA S.A", label: "247 BANCO OMEGA S.A"

    },
    {
      value: "249 BANCO INVESTCRED S.A", label: "249 BANCO INVESTCRED S.A"

    },
    {
      value: "250 BANCO SCHAHIN CURY S.A", label: "250 BANCO SCHAHIN CURY S.A"

    },
    {
      value: "251 BANCO SAO JORGE S.A. ", label: "251 BANCO SAO JORGE S.A. "

    },
    {
      value: "252 BANCO FININVEST S.A", label: "252 BANCO FININVEST S.A"

    },
    {
      value: "254 BANCO PARANA BANCO S.A", label: "254 BANCO PARANA BANCO S.A"

    },
    {
      value: "255 MILBANCO S.A. ", label: "255 MILBANCO S.A. "

    },
    {
      value: "256 BANCO GULVINVEST S.A", label: "256 BANCO GULVINVEST S.A"

    },
    {
      value: "258 BANCO INDUSCRED S.A", label: "258 BANCO INDUSCRED S.A"

    },
    {
      value: "261 BANCO VARIG S.A", label: "261 BANCO VARIG S.A"

    },
    {
      value: "262 BANCO BOREAL S.A", label: "262 BANCO BOREAL S.A"

    },
    {
      value: "263 BANCO CACIQUE", label: "263 BANCO CACIQUE"

    },
    {
      value: "264 BANCO PERFORMANCE S.A", label: "264 BANCO PERFORMANCE S.A"

    },
    {
      value: "265 BANCO FATOR S.A", label: "265 BANCO FATOR S.A"

    },
    {
      value: "266 BANCO CEDULA S.A", label: "266 BANCO CEDULA S.A"

    },
    {
      value: "267 BANCO BBM - COM.C.IMOB.CFI S.A. ", label: "267 BANCO BBM - COM.C.IMOB.CFI S.A. "

    },
    {
      value: "275 BANCO REAL S.A", label: "275 BANCO REAL S.A"

    },
    {
      value: "277 BANCO PLANIBANC S.A", label: "277 BANCO PLANIBANC S.A"

    },
    {
      value: "282 BANCO BRASILEIRO COMERCIAL", label: "282 BANCO BRASILEIRO COMERCIAL"

    },
    {
      value: "291 BANCO DE CREDITO NACIONAL S.A", label: "291 BANCO DE CREDITO NACIONAL S.A"

    },
    {
      value: "294 BCR - BANCO DE CREDITO REAL S.A", label: "294 BCR - BANCO DE CREDITO REAL S.A"

    },
    {
      value: "295 BANCO CREDIPLAN S.A", label: "295 BANCO CREDIPLAN S.A"

    },
    {
      value: "300 BANCO DE LA NACION ARGENTINA S.A", label: "300 BANCO DE LA NACION ARGENTINA S.A"

    },
    {
      value: "302 BANCO DO PROGRESSO S.A", label: "302 BANCO DO PROGRESSO S.A"

    },
    {
      value: "303 BANCO HNF S.A. ", label: "303 BANCO HNF S.A. "

    },
    {
      value: "304 BANCO PONTUAL S.A", label: "304 BANCO PONTUAL S.A"

    },
    {
      value: "308 BANCO COMERCIAL BANCESA S.A. ", label: "308 BANCO COMERCIAL BANCESA S.A. "

    },
    {
      value: "318 BANCO B.M.G.S.A", label: "318 BANCO B.M.G.S.A"

    },
    {
      value: "320 BANCO INDUSTRIAL E COMERCIAL", label: "320 BANCO INDUSTRIAL E COMERCIAL"

    },
    {
      value: "346 BANCO FRANCES E BRASILEIRO S.A", label: "346 BANCO FRANCES E BRASILEIRO S.A"

    },
    {
      value: "347 BANCO SUDAMERIS BRASIL S.A", label: "347 BANCO SUDAMERIS BRASIL S.A"

    },
    {
      value: "351 BANCO BOZANO SIMONSEN S.A", label: "351 BANCO BOZANO SIMONSEN S.A"

    },
    {
      value: "353 BANCO GERAL DO COMERCIO S.A", label: "353 BANCO GERAL DO COMERCIO S.A"

    },
    {
      value: "356 ABN AMRO S.A", label: "356 ABN AMRO S.A"

    },
    {
      value: "366 BANCO SOGERAL S.A", label: "366 BANCO SOGERAL S.A"

    },
    {
      value: "369 PONTUAL", label: "369 PONTUAL"

    },
    {
      value: "370 BEAL - BANCO EUROPEU PARA AMERICA LATINA", label: "370 BEAL - BANCO EUROPEU PARA AMERICA LATINA"

    },
    {
      value: "372 BANCO ITAMARATI S.A", label: "372 BANCO ITAMARATI S.A"

    },
    {
      value: "375 BANCO FENICIA S.A", label: "375 BANCO FENICIA S.A"

    },
    {
      value: "376 CHASE MANHATTAN BANK S.A", label: "376 CHASE MANHATTAN BANK S.A"

    },
    {
      value: "388 BANCO MERCANTIL DE DESCONTOS S / A", label: "388 BANCO MERCANTIL DE DESCONTOS S / A"

    },
    {
      value: "389 BANCO MERCANTIL DO BRASIL S.A", label: "389 BANCO MERCANTIL DO BRASIL S.A"

    },
    {
      value: "392 BANCO MERCANTIL DE SAO PAULO S.A", label: "392 BANCO MERCANTIL DE SAO PAULO S.A"

    },
    {
      value: "394 BANCO B.M.C.S.A", label: "394 BANCO B.M.C.S.A"

    },
    {
      value: "409 UNIBANCO - UNIAO DOS BANCOS BRASILEIROS", label: "409 UNIBANCO - UNIAO DOS BANCOS BRASILEIROS"

    },
    {
      value: "412 BANCO NACIONAL DA BAHIA S.A", label: "412 BANCO NACIONAL DA BAHIA S.A"

    },
    {
      value: "415 BANCO NACIONAL S.A", label: "415 BANCO NACIONAL S.A"

    },
    {
      value: "420 BANCO NACIONAL DO NORTE S.A", label: "420 BANCO NACIONAL DO NORTE S.A"

    },
    {
      value: "424 BANCO NOROESTE S.A", label: "424 BANCO NOROESTE S.A"

    },
    {
      value: "434 BANCO FORTALEZA S.A", label: "434 BANCO FORTALEZA S.A"

    },
    {
      value: "453 BANCO RURAL S.A", label: "453 BANCO RURAL S.A"

    },
    {
      value: "456 BANCO TOKIO S.A", label: "456 BANCO TOKIO S.A"

    },
    {
      value: "464 BANCO SUMITOMO BRASILEIRO S.A", label: "464 BANCO SUMITOMO BRASILEIRO S.A"

    },
    {
      value: "466 BANCO MITSUBISHI BRASILEIRO S.A", label: "466 BANCO MITSUBISHI BRASILEIRO S.A"

    },
    {
      value: "472 LLOYDS BANK PLC", label: "472 LLOYDS BANK PLC"

    },
    {
      value: "473 BANCO FINANCIAL PORTUGUES S.A", label: "473 BANCO FINANCIAL PORTUGUES S.A"

    },
    {
      value: "477 CITIBANK N.A", label: "477 CITIBANK N.A"

    },
    {
      value: "479 BANCO DE BOSTON S.A", label: "479 BANCO DE BOSTON S.A"

    },
    {
      value: "480 BANCO PORTUGUES DO ATLANTICO - BRASIL S.A", label: "480 BANCO PORTUGUES DO ATLANTICO - BRASIL S.A"

    },
    {
      value: "483 BANCO AGRIMISA S.A. ", label: "483 BANCO AGRIMISA S.A. "

    },
    {
      value: "487 DEUTSCHE BANK S.A - BANCO ALEMAO", label: "487 DEUTSCHE BANK S.A - BANCO ALEMAO"

    },
    {
      value: "488 BANCO J.P.MORGAN S.A", label: "488 BANCO J.P.MORGAN S.A"

    },
    {
      value: "489 BANESTO BANCO URUGAUAY S.A", label: "489 BANESTO BANCO URUGAUAY S.A"

    },
    {
      value: "492 INTERNATIONALE NEDERLANDEN BANK N.V. ", label: "492 INTERNATIONALE NEDERLANDEN BANK N.V. "

    },
    {
      value: "493 BANCO UNION S.A.C.A", label: "493 BANCO UNION S.A.C.A"

    },
    {
      value: "494 BANCO LA REP.ORIENTAL DEL URUGUAY", label: "494 BANCO LA REP.ORIENTAL DEL URUGUAY"

    },
    {
      value: "495 BANCO LA PROVINCIA DE BUENOS AIRES", label: "495 BANCO LA PROVINCIA DE BUENOS AIRES"

    },
    {
      value: "496 BANCO EXTERIOR DE ESPANA S.A", label: "496 BANCO EXTERIOR DE ESPANA S.A"

    },
    {
      value: "498 CENTRO HISPANO BANCO", label: "498 CENTRO HISPANO BANCO"

    },
    {
      value: "499 BANCO IOCHPE S.A", label: "499 BANCO IOCHPE S.A"

    },
    {
      value: "501 BANCO BRASILEIRO IRAQUIANO S.A. ", label: "501 BANCO BRASILEIRO IRAQUIANO S.A. "

    },
    {
      value: "502 BANCO SANTANDER DE NEGOCIOS S.A", label: "502 BANCO SANTANDER DE NEGOCIOS S.A"

    },
    {
      value: "504 BANCO MULTIPLIC S.A", label: "504 BANCO MULTIPLIC S.A"

    },
    {
      value: "505 BANCO GARANTIA S.A", label: "505 BANCO GARANTIA S.A"

    },
    {
      value: "600 BANCO LUSO BRASILEIRO S.A", label: "600 BANCO LUSO BRASILEIRO S.A"

    },
    {
      value: "601 BFC BANCO S.A. ", label: "601 BFC BANCO S.A. "

    },
    {
      value: "602 BANCO PATENTE S.A", label: "602 BANCO PATENTE S.A"

    },
    {
      value: "604 BANCO INDUSTRIAL DO BRASIL S.A", label: "604 BANCO INDUSTRIAL DO BRASIL S.A"

    },
    {
      value: "607 BANCO SANTOS NEVES S.A", label: "607 BANCO SANTOS NEVES S.A"

    },
    {
      value: "608 BANCO OPEN S.A", label: "608 BANCO OPEN S.A"

    },
    {
      value: "610 BANCO V.R.S.A", label: "610 BANCO V.R.S.A"

    },
    {
      value: "611 BANCO PAULISTA S.A", label: "611 BANCO PAULISTA S.A"

    },
    {
      value: "612 BANCO GUANABARA S.A", label: "612 BANCO GUANABARA S.A"

    },
    {
      value: "613 BANCO PECUNIA S.A", label: "613 BANCO PECUNIA S.A"

    },
    {
      value: "616 BANCO INTERPACIFICO S.A", label: "616 BANCO INTERPACIFICO S.A"

    },
    {
      value: "617 BANCO INVESTOR S.A. ", label: "617 BANCO INVESTOR S.A. "

    },
    {
      value: "618 BANCO TENDENCIA S.A", label: "618 BANCO TENDENCIA S.A"

    },
    {
      value: "621 BANCO APLICAP S.A. ", label: "621 BANCO APLICAP S.A. "

    },
    {
      value: "622 BANCO DRACMA S.A", label: "622 BANCO DRACMA S.A"

    },
    {
      value: "623 BANCO PANAMERICANO S.A", label: "623 BANCO PANAMERICANO S.A"

    },
    {
      value: "624 BANCO GENERAL MOTORS S.A", label: "624 BANCO GENERAL MOTORS S.A"

    },
    {
      value: "625 BANCO ARAUCARIA S.A", label: "625 BANCO ARAUCARIA S.A"

    },
    {
      value: "626 BANCO FICSA S.A", label: "626 BANCO FICSA S.A"

    },
    {
      value: "627 BANCO DESTAK S.A", label: "627 BANCO DESTAK S.A"

    },
    {
      value: "628 BANCO CRITERIUM S.A", label: "628 BANCO CRITERIUM S.A"

    },
    {
      value: "629 BANCORP BANCO COML.E.DE INVESTMENTO", label: "629 BANCORP BANCO COML.E.DE INVESTMENTO"

    },
    {
      value: "630 BANCO INTERCAP S.A", label: "630 BANCO INTERCAP S.A"

    },
    {
      value: "633 BANCO REDIMENTO S.A", label: "633 BANCO REDIMENTO S.A"

    },
    {
      value: "634 BANCO TRIANGULO S.A", label: "634 BANCO TRIANGULO S.A"

    },
    {
      value: "635 BANCO DO ESTADO DO AMAPA S.A", label: "635 BANCO DO ESTADO DO AMAPA S.A"

    },
    {
      value: "637 BANCO SOFISA S.A", label: "637 BANCO SOFISA S.A"

    },
    {
      value: "638 BANCO PROSPER S.A", label: "638 BANCO PROSPER S.A"

    },
    {
      value: "639 BIG S.A. - BANCO IRMAOS GUIMARAES", label: "639 BIG S.A. - BANCO IRMAOS GUIMARAES"

    },
    {
      value: "640 BANCO DE CREDITO METROPOLITANO S.A", label: "640 BANCO DE CREDITO METROPOLITANO S.A"

    },
    {
      value: "641 BANCO EXCEL ECONOMICO S / A", label: "641 BANCO EXCEL ECONOMICO S / A"

    },
    {
      value: "643 BANCO SEGMENTO S.A", label: "643 BANCO SEGMENTO S.A"

    },
    {
      value: "645 BANCO DO ESTADO DE RORAIMA S.A", label: "645 BANCO DO ESTADO DE RORAIMA S.A"

    },
    {
      value: "647 BANCO MARKA S.A", label: "647 BANCO MARKA S.A"

    },
    {
      value: "648 BANCO ATLANTIS S.A", label: "648 BANCO ATLANTIS S.A"

    },
    {
      value: "649 BANCO DIMENSAO S.A", label: "649 BANCO DIMENSAO S.A"

    },
    {
      value: "650 BANCO PEBB S.A", label: "650 BANCO PEBB S.A"

    },
    {
      value: "652 BANCO FRANCES E BRASILEIRO SA", label: "652 BANCO FRANCES E BRASILEIRO SA"

    },
    {
      value: "653 BANCO INDUSVAL S.A", label: "653 BANCO INDUSVAL S.A"

    },
    {
      value: "654 BANCO A.J.RENNER S.A", label: "654 BANCO A.J.RENNER S.A"

    },
    {
      value: "655 BANCO VOTORANTIM S.A. ", label: "655 BANCO VOTORANTIM S.A. "

    },
    {
      value: "656 BANCO MATRIX S.A", label: "656 BANCO MATRIX S.A"

    },
    {
      value: "657 BANCO TECNICORP S.A", label: "657 BANCO TECNICORP S.A"

    },
    {
      value: "658 BANCO PORTO REAL S.A", label: "658 BANCO PORTO REAL S.A"

    },
    {
      value: "702 BANCO SANTOS S.A", label: "702 BANCO SANTOS S.A"

    },
    {
      value: "705 BANCO INVESTCORP S.A. ", label: "705 BANCO INVESTCORP S.A. "

    },
    {
      value: "707 BANCO DAYCOVAL S.A", label: "707 BANCO DAYCOVAL S.A"

    },
    {
      value: "711 BANCO VETOR S.A. ", label: "711 BANCO VETOR S.A. "

    },
    {
      value: "713 BANCO CINDAM S.A", label: "713 BANCO CINDAM S.A"

    },
    {
      value: "715 BANCO VEGA S.A", label: "715 BANCO VEGA S.A"

    },
    {
      value: "718 BANCO OPERADOR S.A", label: "718 BANCO OPERADOR S.A"

    },
    {
      value: "719 BANCO PRIMUS S.A", label: "719 BANCO PRIMUS S.A"

    },
    {
      value: "720 BANCO MAXINVEST S.A", label: "720 BANCO MAXINVEST S.A"

    },
    {
      value: "721 BANCO CREDIBEL S.A", label: "721 BANCO CREDIBEL S.A"

    },
    {
      value: "722 BANCO INTERIOR DE SAO PAULO S.A", label: "722 BANCO INTERIOR DE SAO PAULO S.A"

    },
    {
      value: "724 BANCO PORTO SEGURO S.A", label: "724 BANCO PORTO SEGURO S.A"

    },
    {
      value: "725 BANCO FINABANCO S.A", label: "725 BANCO FINABANCO S.A"

    },
    {
      value: "726 BANCO UNIVERSAL S.A", label: "726 BANCO UNIVERSAL S.A"

    },
    {
      value: "728 BANCO FITAL S.A", label: "728 BANCO FITAL S.A"

    },
    {
      value: "729 BANCO FONTE S.A", label: "729 BANCO FONTE S.A"

    },
    {
      value: "730 BANCO COMERCIAL PARAGUAYO S.A", label: "730 BANCO COMERCIAL PARAGUAYO S.A"

    },
    {
      value: "731 BANCO GNPP S.A. ", label: "731 BANCO GNPP S.A. "

    },
    {
      value: "732 BANCO PREMIER S.A. ", label: "732 BANCO PREMIER S.A. "

    },
    {
      value: "733 BANCO NACOES S.A. ", label: "733 BANCO NACOES S.A. "

    },
    {
      value: "734 BANCO GERDAU S.A", label: "734 BANCO GERDAU S.A"

    },
    {
      value: "735 BANCO NEON", label: "735 BANCO NEON"

    },
    {
      value: "736 BANCO UNITED S.A", label: "736 BANCO UNITED S.A"

    },
    {
      value: "737 THECA", label: "737 THECA"

    },
    {
      value: "738 MARADA", label: "738 MARADA"

    },
    {
      value: "739 BGN", label: "739 BGN"

    },
    {
      value: "740 BCN BARCLAYS", label: "740 BCN BARCLAYS"

    },
    {
      value: "741 BRP", label: "741 BRP"

    },
    {
      value: "742 EQUATORIAL", label: "742 EQUATORIAL"

    },
    {
      value: "743 BANCO EMBLEMA S.A", label: "743 BANCO EMBLEMA S.A"

    },
    {
      value: "744 THE FIRST NATIONAL BANK OF BOSTON", label: "744 THE FIRST NATIONAL BANK OF BOSTON"

    },
    {
      value: "746 MODAL S.A. ", label: "746 MODAL S.A. "

    },
    {
      value: "747 RABOBANK DO BRASIL,", label: "747 RABOBANK DO BRASIL,"

    },
    {
      value: "748 SICREDI", label: "748 SICREDI"

    },
    {
      value: "749 BRMSANTIL SA", label: "749 BRMSANTIL SA"

    },
    {
      value: "750 BANCO REPUBLIC NATIONAL OF NEW YORK(BRA ", label: "750 BANCO REPUBLIC NATIONAL OF NEW YORK(BRA "

    },
    {
      value: "751 DRESDNER BANK LATEINAMERIKA - BRASIL S / A", label: "751 DRESDNER BANK LATEINAMERIKA - BRASIL S / A"

    },
    {
      value: "752 BANCO BANQUE NATIONALE DE PARIS BRASIL S", label: "752 BANCO BANQUE NATIONALE DE PARIS BRASIL S"

    },
    {
      value: "753 BANCO COMERCIAL URUGUAI S.A. ", label: "753 BANCO COMERCIAL URUGUAI S.A. "

    },
    {
      value: "755 BANCO MERRILL LYNCH S.A", label: "755 BANCO MERRILL LYNCH S.A"

    },
    {
      value: "757 BANCO KEB DO BRASIL S.A. ", label: "757 BANCO KEB DO BRASIL S.A. "

    },
    {
      value: "260 Nu Pagamentos S.A,", label: "260 Nu Pagamentos S.A,"

    },
    {
      value: "102 XP INVESTIMENTOS", label: "102 XP INVESTIMENTOS"

    },
    {
      value: "336 BANCO C6 S.A.,", label: "336 BANCO C6 S.A.,"

    },
    {
      value: "290 PagSeguro Internet S.A.,", label: "290 PagSeguro Internet S.A.,"

    },
    {
      value: "323 MercadoPago.com Representações Ltda.,", label: "323 MercadoPago.com Representações Ltda.,"

    },
    {
      value: "332 Acesso Soluções de Pagamento S.A.,", label: "332 Acesso Soluções de Pagamento S.A.,"

    },
    {
      value: "325 Órama DTVM S.A.,", label: "325 Órama DTVM S.A.,"

    },
    {
      value: "85 OOPERATIVA CENTRAL DE CREDITO - AILOS", label: "85 OOPERATIVA CENTRAL DE CREDITO - AILOS"

    },
    {
      value: "125 PLURAL S.A.BANCO MULTIPLO", label: "125 PLURAL S.A.BANCO MULTIPLO"

    },
    {
      value: "197 STONE PAGAMENTOS S.A.", label: "197 STONE PAGAMENTOS S.A."

    }


  ]
  const optionsGenre = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outros', label: 'Outros' },
  ]

  const optionsBankAccountType = [
    { value: 'corrente', label: 'Corrente' },
    { value: 'poupanca', label: 'Poupança' },
  ]

  const nameRef = useRef('');
  const cpfRef = useRef('');
  const rgRef = useRef('');
  const phoneRef = useRef('');
  const dtBirthdayRef = useRef('');
  const genderRef = useRef('');
  const zipCodeRef = useRef('');
  const addressRef = useRef('');
  const addressNumberRef = useRef('');
  const complementAddressRef = useRef('');
  const neighborhoodRef = useRef('');
  const cityRef = useRef('');
  const cityStateRef = useRef('');
  const bankRef = useRef('');
  const agencyRef = useRef('');
  const bankAccountRef = useRef('');
  const hometownRef = useRef('');
  const bankAccountTypeRef = useRef('');

  const { updateProfile, nome, email, cpf, rg, logout, phone, dataNacimento, cep, genero, endereco, enderecoNumero, enderecoComplemento, enderecoBairro,
    enderecoEstado, enderecoCidade, cidadeNatal, instituicao, conta, agencia, tipoConta, userId } = useAuth();

  const [cpfs, setCpfs] = useState(cpf)
  const [rgs, setRgs] = useState(rg)
  const [phones, setPhones] = useState(phone)
  const [bankAccountTypes, setBankAccountTypes] = useState([tipoConta])
  const [genders, setGenders] = useState(genero)
  const [banks, setBanks] = useState(instituicao)

  const [button, setButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState()

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);


  const [selectedTag, setSelectedTag] = useState([])

  const history = useHistory();
  function editProfileInfo() {
    setButton(!button)
    if (button === false) {
      window.location.reload();
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {

      setError("");
      setLoading(true);
      await updateProfile(
        nameRef.current.value, cpfRef.current.value, rgRef.current.value,
        phoneRef.current.value, dtBirthdayRef.current.value, genderRef.current.value,
        zipCodeRef.current.value, addressRef.current.value, addressNumberRef.current.value,
        complementAddressRef.current.value, neighborhoodRef.current.value, cityRef.current.value,
        cityStateRef.current.value, bankRef.current.value, agencyRef.current.value,
        bankAccountRef.current.value, hometownRef.current.value, bankAccountTypeRef.current.value);
      history.push('/profile')
      setButton(!button)
    } catch {
      setError("Erro ao editar usuario")
    }
    setLoading(false)
  }

  async function handleLogout(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true);

      await logout()
      history.push('/profile')
      // setButton(!button)
    } catch {
      setError("Erro ao deslogar")
    }
    setLoading(false)
  }

  const opt = [
    {
      tipo: 'corrente'
    },
    {
      tipo: 'poupanca'
    }

  ]
  useEffect(() => {
    setCpfs(cpf)
    setRgs(rg)
    setPhones(phone)
    setBankAccountTypes(tipoConta)
    setBanks(instituicao)
    setGenders(genero)
  }, [cpf, rg, phone, tipoConta, instituicao, genero])
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12 p-2">
        <div className="mb-3">
          <h2 className="title-h2-plan">Olá {nome}!</h2>
          <h4 className="description-h4-plan">Seu código de usuário é: <h6>{userId}</h6></h4>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <br />
        <div className="card" style={{ padding: '31px' }}>
          <Form onSubmit={handleSubmit} className="row">
            <Form.Group id="name" className="col-md-4 col-xs-12">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" ref={nameRef} disabled={button} defaultValue={nome}></Form.Control>
            </Form.Group>
            <Form.Group id="email" className="col-md-4 col-xs-12">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={email} disabled value={email}></Form.Control>
            </Form.Group>
            <Form.Group id="cpf" className="col-md-4 col-xs-12">
              <Form.Label>CPF</Form.Label>
              <Form.Control id="cpf" type="text" className="form-control" maxLength={14} ref={cpfRef} disabled={button} value={cpfs} onChange={e => { setCpfs(cpfMask(e.target.value)) }}></Form.Control>
            </Form.Group>
            <Form.Group id="rg" className="col-md-4 col-xs-12">
              <Form.Label>RG</Form.Label>
              <Form.Control id="rg" ref={rgRef} type="text" disabled={button} value={rgs} onChange={e => { setRgs(rgMask(e.target.value)) }} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group id="phone" className="col-md-4 col-xs-12">
              <Form.Label>Telefone</Form.Label>
              <Form.Control id="phone" ref={phoneRef} type="text" disabled={button} value={phones} onChange={e => { setPhones(phoneMask(e.target.value)) }} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group id="dtBirthday" className="col-md-4 col-xs-12">
              <Form.Label>Data nascimento</Form.Label>
              <Form.Control id="dtBirthday" ref={dtBirthdayRef} type="text" disabled={button} defaultValue={dataNacimento} maxLength={10} ></Form.Control>
            </Form.Group>
            <Form.Group id="gender" className="col-md-4 col-xs-12">
              <Form.Label>Genero</Form.Label>
              <Form.Control id="gender" ref={genderRef} width='200px' defaultValue={genero} disabled={button} />
            </Form.Group>
            <Form.Group id="zipCode" className="col-md-4 col-xs-12">
              <Form.Label>Cep</Form.Label>
              <Form.Control id="zipCode" ref={zipCodeRef} type="text" disabled={button} defaultValue={cep} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group id="address" className="col-md-4 col-xs-12">
              <Form.Label>Endereco</Form.Label>
              <Form.Control id="address" ref={addressRef} type="text" disabled={button} defaultValue={endereco} ></Form.Control>
            </Form.Group>
            <Form.Group id="addressNumber" className="col-md-4 col-xs-12">
              <Form.Label>Numero</Form.Label>
              <Form.Control id="addressNumber" ref={addressNumberRef} type="text" disabled={button} defaultValue={enderecoNumero} ></Form.Control>
            </Form.Group>
            <Form.Group id="complementAddress" className="col-md-4 col-xs-12">
              <Form.Label>Complemento</Form.Label>
              <Form.Control id="complementAddress" ref={complementAddressRef} type="text" disabled={button} defaultValue={enderecoComplemento} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group id="neighborhood" className="col-md-4 col-xs-12">
              <Form.Label>Bairro</Form.Label>
              <Form.Control id="neighborhood" ref={neighborhoodRef} type="text" disabled={button} defaultValue={enderecoBairro} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group id="city" className="col-md-4 col-xs-12">
              <Form.Label>Cidade</Form.Label>
              <Form.Control id="city" ref={cityRef} type="text" disabled={button} defaultValue={enderecoCidade} ></Form.Control>
            </Form.Group>
            <Form.Group id="cityState" className="col-md-4 col-xs-12">
              <Form.Label>Estado</Form.Label>
              <Form.Control id="cityState" ref={cityStateRef} type="text" disabled={button} defaultValue={enderecoEstado} ></Form.Control>
            </Form.Group>
            <Form.Group id="bank" className="col-md-4 col-xs-12 select-edit">
              <Form.Label>Banco</Form.Label>
              <Form.Control id="bank" ref={bankRef} defaultValue={instituicao} width='200px' disabled={button} />
            </Form.Group>
            <Form.Group id="agency" className="col-md-4 col-xs-12">
              <Form.Label>agencia</Form.Label>
              <Form.Control id="agency" ref={agencyRef} type="text" disabled={button} defaultValue={agencia} maxLength={4} ></Form.Control>
            </Form.Group>
            <Form.Group id="bankAccount" className="col-md-4 col-xs-12">
              <Form.Label>Conta(com digito)</Form.Label>
              <Form.Control id="bankAccount" ref={bankAccountRef} type="text" disabled={button} defaultValue={conta} ></Form.Control>
            </Form.Group>
            <Form.Group id="bankAccountType" className="col-md-4 col-xs-12">
              <Form.Label>Conta(tipo)</Form.Label>
              <Form.Control id="bankAccountType" ref={bankAccountTypeRef} defaultValue={tipoConta} width='200px' disabled={button} />
            </Form.Group>

            <Form.Group id="hometown" className="col-md-4 col-xs-12">
              <Form.Label>Cidade natal</Form.Label>
              <Form.Control id="hometown" ref={hometownRef} type="text" disabled={button} defaultValue={cidadeNatal} onChange={e => { setRgs(rgMask(e.target.value)) }} maxLength={14} ></Form.Control>
            </Form.Group>
            <Form.Group className=" col-md-12 col-xs-12 justify">
              <Button className="ml-2" onClick={editProfileInfo}>{button !== false ? 'editar' : 'cancelar'}</Button>
              <Button disabled={loading} type="submit" className="btn-danger ml-2" style={{ display: button !== false ? 'none' : ' ' }}>Salvar</Button>
            </Form.Group>
          </Form>
        </div>


        <div className="d-flex col-md-12 col-xs-12 justify-content-center">
          <Button className="w-50 button-logout" onClick={handleLogout}>desconectar</Button>
        </div>



      </div >
    </>
  )
}
