//Você pode verificar strings contra expressões regulares com toMatch

test('Não existe I em team',()=>{
    expect('team').not.toMatch(/I/) 
})