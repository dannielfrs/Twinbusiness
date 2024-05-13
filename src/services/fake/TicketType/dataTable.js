import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      image: faker.helpers.arrayElement(['/images/icons/estadio.jpg']),
      name: faker.helpers.arrayElement(['General', 'Plata', 'Oro', 'Vip']),
      color: faker.helpers.arrayElement(['Morado']),
      cupos: faker.helpers.arrayElement(['00001 A 5.000']),
      number: faker.helpers.arrayElement(['01']),
      incluye: faker.helpers.arrayElement(['Ej. Mesas, etc...']),
      door: faker.helpers.arrayElement(['Puerta 1']),
      type: faker.helpers.arrayElement(['Presencial']),
      price: faker.helpers.arrayElement(['$5,000.00']),
      date_inicio: faker.helpers.arrayElement(['11/11/2023']),
      date_final: faker.helpers.arrayElement(['11/11/2023']),
      price_ticket: faker.helpers.arrayElement(['$300.00 MXN']),
      total_ticket: faker.helpers.arrayElement(['30,000']),
      add_ticket: faker.helpers.arrayElement(['Editar boletos'])
    }
  })
  return elementArray
}

export default dataTable
