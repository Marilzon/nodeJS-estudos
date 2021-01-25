class Util {
  static #defaultFormat = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  });

  static unFormatCurrency(value) {
    // hack to convert like: R$ 1000.10 > 100010 > 1000,10
    return Number(value.replace(/\D/g, '')) / 100;
  };

  static formatCurrency(value) {
    return this.#defaultFormat.format(value);
  };
};

module.exports = Util;
