console.log('Iniciando com TDD usando Jest')
import { dataUsers } from "./myTypes"

export const sum = (n1:number,n2:number):number => n1 + n2

export const dataUser = (name:string,lastName:string):object => {
    const data:dataUsers = {}
    data.name = name
    data.lastName = lastName
    return data
}

export const positiveNumbers = ():void => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0);
        }
    }
}


