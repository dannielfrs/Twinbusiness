import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      name: faker.helpers.arrayElement(['Recargas generadas', 'Total en efectivo', 'Boletos t.debito', 'Boletos t.cédito', 'Boletos TWIN', 'Boletos TWC']),
      number: faker.helpers.arrayElement(['2,328', '178,250.00', '8,250.00', '250.00', '40,000.00'])
    }
  })
  return elementArray
}

export default dataTable
