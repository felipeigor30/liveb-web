import React, { useContext, useEffect, useState } from 'react'
import { auth, firestore } from '../services/db/firebaseConnect'
import firebase from 'firebase'
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
  const [qtdCotas, setQtdCotas] = useState();
  const [valorInvestido, setValorInvestido] = useState();
  const [planoEscolhido, setPlanoEscolhido] = useState();
  const [plano, setPlano] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  const [qtdRecebida, setQtdRecebida] = useState(0)
  const [userId, setUserId] = useState()
  const [novoValorInvestido, setNovoValorInvestido] = useState()
  const [auxiliar, setAuxiliar] = useState()

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
            dataCadastro: dataAtualFormatada(),
            possuiPlano: false,
            possuiCotaComprada: false,
            possuiContaBancaria: false,
            confirmouContrato: false,
            nomePlano: '',
            numeroPlano: 0,
            valorInvestido: '0',
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
            auxiliar: '0'
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
      dataEscolhaPlano: new Date()
    })
  }

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = (dia.length === 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length === 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  function saveAmountQuotas(count, valor, calc, checkBox) {
    const userID = auth.currentUser.uid

    firestore.collection('users').doc(userID).onSnapshot(snapshot => {
      const a = snapshot.data().valorInvestido
      const result = a + valor
      setNovoValorInvestido(result)
    })

    firestore.collection('users').doc(userID).update({
      quantidadeValorCotas: count,
      valorInvestido: valor,
      investimentoPago: false,
      possuiCotaComprada: true,
    }).then(auth.onAuthStateChanged((user) => {

      if (user) {
        firestore.collection('users').doc(userID).onSnapshot(doc => {
          if (user) {
            if (checkBox === 'Juros Mensais') {
              for (var i = 1; i <= 24; i++) {
                const query = firestore.collection("pagamentos").doc(userID)
                query.set({
                  pags: firebase.firestore.FieldValue.arrayUnion({
                    pagar: handleData(i),
                    statusPagamento: false,
                    valorReceber: calc,
                    rentabilidade: 1.5,
                    disponivel: false,
                    opcaoInvestimento: checkBox,
                    data: new Date()
                  }),
                }, { merge: true })
              }
            } else {
              const query = firestore.collection("pagamentos").doc(userID)

              query.set({
                pags: firebase.firestore.FieldValue.arrayUnion({
                  pagar: handleData(24),
                  statusPagamento: false,
                  valorReceber: calc,
                  rentabilidade: 38.8,
                  disponivel: false,
                  opcaoInvestimento: checkBox,
                  data: new Date()

                })
              }, { merge: true })
            }
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
          var endereco = doc.data().endereco
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
          var auxiliar = doc.data().auxiliar
          var qtdRecebido = doc.data().qtdRecebida
          setQtdRecebida(qtdRecebido)
          setPossuiCotaComprada(possuiCotaComprada)
          setPossuiPlano(possuiPlano)
          setNome(nome)
          setEmail(email)
          setCpf(cpf)
          setRg(rg)
          setQtdCotas(qtdCotas)
          setValorInvestido(valorInvestido)
          setAuxiliar(auxiliar)
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
    updateProfile,
    novoValorInvestido,
    auxiliar


  }

  return (
    <AuthContext.Provider value={value} >
      {!loading && children}
    </AuthContext.Provider>
  )
}
