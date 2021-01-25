const EntityBase = require('./entityBase');
const Util = require('./ultil');

class Employee extends EntityBase {
  static #TAXES_PERCENTUAL = 0.2;
  #grossPay = 5000.40;

  get grossPay() {
    return Util.formatCurrency(this.#grossPay);
  };

  get netPay() {
    const result = this.#grossPay - (this.#grossPay * Employee.#TAXES_PERCENTUAL);
    return Util.formatCurrency(result);
  };
};

module.exports = Employee;
