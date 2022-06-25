import { sum } from "../src";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
}) // toBe utiliza Object.is para testar a igualdade exata. Se você quer checar o valor de um objeto, use toEqual