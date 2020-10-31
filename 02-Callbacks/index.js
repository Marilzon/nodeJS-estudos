/*
Obter o usuario
  Obter o numero de telefone do usuario por propiedade
    Obter Endereco
*/

function getUser(callbacck) {
  setTimeout(function () {
    return callbacck(null, {
      id: 1,
      name: 'Marilzon'
    })
  }, 1000)
}


function getPhone(idUser, callbacck) {
  setTimeout(() => {
    return callbacck(null, {
      phone: '9 9140 - ZZZZ',
      ddd: 014
    })
  }, 2000)
}

function getLocale(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "Amadeu Amaral",
      number: 332
    })
  }, 2000)
}

function resolveUser(error, user) {
  console.log('user', user)
}

getUser(function resolveUser(errorUser, user) {
  if (errorUser) {
    console.error("Erro na função de usuario", errorUser)
    return;
  }
  getPhone(user.id, function resolvePhone(errorPhone, phone) {
    if (errorPhone) {
      console.error("Erro na função de telefone")
      return;
    }
    getLocale(user.id, function resolveLocale(errorLocale, locale) {
      if (errorLocale) {
        console.error("Error na funcao de local", error)
        return;
      }

      console.log(`
        Nome: ${user.name},
        Endereço: ${locale.street}, ${locale.number}
        Telefone: (${phone.ddd}) ${phone.phone}
      `)
    })
  })
});
