const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
};

const actualFullName = getFullName('Cristian', 'Tovar')

const expectedFullName = 'Cristian F. Tovar'

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}
