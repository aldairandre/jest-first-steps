import { dataUser, positiveNumbers } from "../src"

test('Retorna um obj com {name,lastName} do user',() =>{
    expect(dataUser('Aldair','Andre')).toEqual({name:'Aldair',lastName:'Andre'})
}) //toEqual recursivamente verifica cada campo de um objeto ou array.

//Você também pode testar o oposto de um "matcher":
test('adicionando números positivos não é zero', () => {
    expect(positiveNumbers()).not.toBe(0)
});