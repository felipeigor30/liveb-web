import React, { useContext, useEffect, useState } from 'react'
import { auth, firestore } from '../services/db/firebaseConnect'

import handleData from '../services/handleData'
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [phone, setPhone] = useState();
  const [possuiPlano, setPossuiPlano] = useState(false)
  const [possuiCotaComprada, setPossuiCotaComprada] = useState(false)
  const [dataNacimento, setDataNacimento] = useState();
  const [genero, setGenero] = useState();
  const [cep, setCep] = useState();
  const [endereco, setEndereco] = useState();
  const [enderecoNumero, setEnderecoNumero] = useState();
  const [enderecoComplemento, setEnderecoComplemento] = useState();
  const [enderecoBairro, setEnderecoBairro] = useState();
  const [enderecoCidade, setEnderecoCidade] = useState();
  const [enderecoEstado, setEnderecoEstado] = useState();
  const [instituicao, setInstituicao] = useState();
  const [agencia, setAgencia] = useState();
  const [conta, setConta] = useState();
  const [cidadeNatal, setCidadeNatal] = useState();
  const [tipoConta, setTipoConta] = useState();
  const [payments, setPayments] = useState([])
  const [payResult, setPayResult] = useState([])
  const [qtdCotas, setQtdCotas] = useState();
  const [valorInvestido, setValorInvestido] = useState();
  const [planoEscolhido, setPlanoEscolhido] = useState();
  const [plano, setPlano] = useState();
  const [rentabilidade, setRentabilidade] = useState()
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  const [qtdRecebida, setQtdRecebida] = useState(0)
  const [userId, setUserId] = useState()
  function signup(name, email, password, cpf, rg, phone) {
    return (
      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const userID = userCredentials.user.uid;
          firestore.collection('users').doc(userID).set({
            name: name,
            email: email,
            phone: phone,
            cpf: cpf,
            rg: rg,
            possuiPlano: false,
            possuiCotaComprada: false,
            possuiContaBancaria: false,
            confirmouContrato: false,
            nomePlano: '',
            numeroPlano: 0,
            valorInvestido: '',
            agencia: '',
            instituicao: '',
            conta: '',
            dataNacimento: '',
            cep: '',
            genero: '',
            endereco: '',
            enderecoNumero: '',
            enderecoComplemento: '',
            enderecoBairro: '',
            enderecoEstado: '',
            enderecoCidade: '',
            cidadeNatal: '',
            tipoConta: '',
            qtdRecebida: 0,
          })
        })
    )
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function handlePlanGold() {
    const userID = auth.currentUser.uid
    firestore.collection('users').doc(userID).update({
      possuiPlano: true,
      nomePlano: 'Plano Liveb',
      numeroPlano: 4,
      rentabilidade: 2,
      dataEscolhaPlano: new Date()
    }).then(auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection('pagamentos').doc(userID).set({
          pags: [
            { id: 1, pagar: handleData(1), statusPagamento: false, },
            { id: 2, pagar: handleData(2), statusPagamento: false, },
            { id: 3, pagar: handleData(3), statusPagamento: false, },
            { id: 4, pagar: handleData(4), statusPagamento: false, },
            { id: 5, pagar: handleData(5), statusPagamento: false, },
            { id: 6, pagar: handleData(6), statusPagamento: false, },
            { id: 7, pagar: handleData(7), statusPagamento: false, },
            { id: 8, pagar: handleData(8), statusPagamento: false, },
            { id: 9, pagar: handleData(9), statusPagamento: false, },
            { id: 10, pagar: handleData(10), statusPagamento: false, },
            { id: 11, pagar: handleData(11), statusPagamento: false, },
            { id: 12, pagar: handleData(12), statusPagamento: false, },
            { id: 13, pagar: handleData(13), statusPagamento: false, },
            { id: 14, pagar: handleData(14), statusPagamento: false, },
            { id: 15, pagar: handleData(15), statusPagamento: false, },
            { id: 16, pagar: handleData(16), statusPagamento: false, },
            { id: 17, pagar: handleData(17), statusPagamento: false, },
            { id: 18, pagar: handleData(18), statusPagamento: false, },
            { id: 19, pagar: handleData(19), statusPagamento: false, },
            { id: 20, pagar: handleData(20), statusPagamento: false, },
            { id: 21, pagar: handleData(21), statusPagamento: false, },
            { id: 22, pagar: handleData(22), statusPagamento: false, },
            { id: 23, pagar: handleData(22), statusPagamento: false, },
            { id: 24, pagar: handleData(24), statusPagamento: false, },
          ],
          result: [
            { id: 1, valorReceber: 0, rentabilidade: 0 },
            { id: 2, valorReceber: 0, rentabilidade: 0 },
            { id: 3, valorReceber: 0, rentabilidade: 0 },
            { id: 4, valorReceber: 0, rentabilidade: 0 },
            { id: 5, valorReceber: 0, rentabilidade: 0 },
            { id: 6, valorReceber: 0, rentabilidade: 0 },
            { id: 7, valorReceber: 0, rentabilidade: 0 },
            { id: 8, valorReceber: 0, rentabilidade: 0 },
            { id: 9, valorReceber: 0, rentabilidade: 0 },
            { id: 10, valorReceber: 0, rentabilidade: 0 },
            { id: 11, valorReceber: 0, rentabilidade: 0 },
            { id: 12, valorReceber: 0, rentabilidade: 0 },
            { id: 13, valorReceber: 0, rentabilidade: 0 },
            { id: 14, valorReceber: 0, rentabilidade: 0 },
            { id: 15, valorReceber: 0, rentabilidade: 0 },
            { id: 16, valorReceber: 0, rentabilidade: 0 },
            { id: 17, valorReceber: 0, rentabilidade: 0 },
            { id: 18, valorReceber: 0, rentabilidade: 0 },
            { id: 19, valorReceber: 0, rentabilidade: 0 },
            { id: 20, valorReceber: 0, rentabilidade: 0 },
            { id: 21, valorReceber: 0, rentabilidade: 0 },
            { id: 22, valorReceber: 0, rentabilidade: 0 },
            { id: 23, valorReceber: 0, rentabilidade: 0 },
            { id: 24, valorReceber: 0, rentabilidade: 0 },
          ],
        })
        firestore.collection('users').doc(userID).onSnapshot(doc => {
          var status = doc.data().valorInvestido
          if (status > 0) {
            firestore.collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
              setPayments([...snapshot.data().pags])
            })
            firestore.collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
              setPayResult([...snapshot.data().result])
            })
          }
        })
      }
    }))
  }

  function saveAmountQuotas(count, valor, calc) {
    const userID = auth.currentUser.uid
    firestore.collection('users').doc(userID).update({
      quantidadeValorCotas: count,
      valorInvestido: valor,
      investimentoPago: false,
      possuiCotaComprada: true,

    }).then(auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection('users').doc(userID).onSnapshot(doc => {
          if (user) {
            firestore.collection('pagamentos').doc(userID).update({
              result: [
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 },
                { valorReceber: calc, rentabilidade: 2 }
              ],
            })
          }
        })
      }
    }))
  }

  function logout() {
    auth.signOut()
    window.location.reload()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateProfile(nome, cpf, rg, phone, dataNacimento, genero, cep, endereco, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado, instituicao, agencia, conta, cidadeNatal, tipoConta) {
    const userID = auth.currentUser.uid
    firestore.collection('users').doc(userID).update({
      name: nome,
      cpf: cpf,
      rg: rg,
      phone: phone,
      dataNacimento: dataNacimento,
      genero: genero,
      cep: cep,
      endereco: endereco,
      enderecoNumero: enderecoNumero,
      enderecoComplemento: enderecoComplemento,
      enderecoBairro: enderecoBairro,
      enderecoCidade: enderecoCidade,
      enderecoEstado: enderecoEstado,
      instituicao: instituicao,
      agencia: agencia,
      conta: conta,
      cidadeNatal: cidadeNatal,
      tipoConta: tipoConta

    })
  }

  function listPaymentsReceivable() {
    const userID = auth.currentUser.uid
    firestore.collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
      setPayments([...snapshot.data().pags])
    })
    firestore.collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
      setPayResult([...snapshot.data().result])
    })
  }

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      if (user) {
        const userID = auth.currentUser.uid
        firestore.collection('users').doc(userID).onSnapshot(doc => {
          setUserId(userID)
          var nome = doc.data().name
          var email = doc.data().email
          var cpf = doc.data().cpf
          var rg = doc.data().rg
          var qtdCotas = doc.data().quantidadeValorCotas
          var valorInvestido = doc.data().valorInvestido
          var planoEscolhido = doc.data().nomePlano
          var numPlano = doc.data().numeroPlano
          var phone = doc.data().phone
          var dataNacimento = doc.data().dataNacimento
          var genero = doc.data().genero
          var cep = doc.data().cep
          var endereco = doc.data().cep
          var enderecoNumero = doc.data().enderecoNumero
          var enderecoComplemento = doc.data().enderecoComplemento
          var enderecoBairro = doc.data().enderecoBairro
          var enderecoCidade = doc.data().enderecoCidade
          var enderecoEstado = doc.data().enderecoEstado
          var instituicao = doc.data().instituicao
          var agencia = doc.data().agencia
          var conta = doc.data().conta
          var cidadeNatal = doc.data().cidadeNatal
          var tipoConta = doc.data().tipoConta
          var possuiPlano = doc.data().possuiPlano
          var possuiCotaComprada = doc.data().possuiCotaComprada
          var rentabil = doc.data().rentabilidade
          var qtdRecebido = doc.data().qtdRecebida
          setQtdRecebida(qtdRecebido)
          setRentabilidade(rentabil)
          setPossuiCotaComprada(possuiCotaComprada)
          setPossuiPlano(possuiPlano)
          setNome(nome)
          setEmail(email)
          setCpf(cpf)
          setRg(rg)
          setQtdCotas(qtdCotas)
          setValorInvestido(valorInvestido)
          setPlanoEscolhido(planoEscolhido)
          setPlano(numPlano)
          setPhone(phone)
          setDataNacimento(dataNacimento)
          setGenero(genero)
          setCep(cep)
          setEndereco(endereco)
          setEnderecoNumero(enderecoNumero)
          setEnderecoComplemento(enderecoComplemento)
          setEnderecoBairro(enderecoBairro)
          setEnderecoCidade(enderecoCidade)
          setEnderecoEstado(enderecoEstado)
          setInstituicao(instituicao)
          setAgencia(agencia)
          setConta(conta)
          setCidadeNatal(cidadeNatal)
          setTipoConta(tipoConta)
        })
        firestore.collection('users').doc(userID).onSnapshot(doc => {
          var status = doc.data().valorInvestido
          if (status > 0) {
            firestore.collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
              setPayments([...snapshot.data().pags])
              setPayResult([...snapshot.data().result])
            })
          }
        })
      }

    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userId,
    nome,
    email,
    cpf,
    rg,
    qtdCotas,
    valorInvestido,
    planoEscolhido,
    plano,
    phone,
    dataNacimento,
    genero,
    cep,
    endereco,
    enderecoNumero,
    enderecoComplemento,
    enderecoBairro,
    enderecoCidade,
    enderecoEstado,
    instituicao,
    agencia,
    conta,
    cidadeNatal,
    tipoConta,
    payments,
    payResult,
    possuiPlano,
    possuiCotaComprada,
    qtdRecebida,
    resetPassword,
    listPaymentsReceivable,
    login,
    signup,
    handlePlanGold,
    saveAmountQuotas,
    logout,
    updateProfile



  }

  return (
    <AuthContext.Provider value={value} >
      {!loading && children}
    </AuthContext.Provider>
  )
}
