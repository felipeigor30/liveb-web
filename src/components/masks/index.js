import React from 'react'

export function cpfMask(value) {

  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')
  value = value.replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  return value

}

export function rgMask(value) {

  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{2})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')
  value = value.replace(/(-\d{2})\d+?$/, '$1')

  return value

}

export function phoneMask(value) {
  value = value.replace(/\D/g, "")
  // (11)1111-1111
  value = value.replace(/^(\d{2})(\d)/g, "($1)$2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")

  return value

}