const handleData = (qtd) => {

  var dia = new Date().getDate()
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

  if (dia <= 15) {
    var d = new Date();
    d.setDate(17);
    var newDate = new Date(d.setMonth(d.getMonth() + qtd));
    var mes = newDate.getMonth()
    var ano = newDate.getFullYear()
    return d.getDate() + " " + meses[mes] + " " + ano
  }
  else {
    var d = new Date();
    d.setDate(2);
    var newDate = new Date(d.setMonth(d.getMonth() + qtd + 1));
    var mes = newDate.getMonth()
    var ano = newDate.getFullYear()
    return d.getDate() + " " + meses[mes] + " " + ano
  }
}

export default handleData
