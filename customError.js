class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  const name = 'Marilzon de Sousa';

  const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
      type: 'Server error'
    }
  });
  throw myError;
} catch (error) {
  console.log(error);
  console.log(error.data);
} finally {
  console.log('Keep going...');
}
