const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged(data) {
    setTimeout(() => {
      this.emit('User logged', data);
    }, 1000);
  }
}

const users = new Users();

users.on('User logged', data => {
  console.log(data);
});

users.userLogged({ user: 'Marilzon de Sousa' });
users.userLogged({ user: 'Cristiane dos Santos' });
