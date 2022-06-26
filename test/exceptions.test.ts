//Se você quiser testar se uma determinada função lança um erro quando é chamada, use toThrow.

function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
}
  
test('compilando para android segue conforme esperado', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // Você também pode usar a mensagem exata de erro ou uma regexp
  expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

//Nota: a função que lança uma exceção precisa ser chamada dentro de uma função de arrow function, caso contrário a afirmação toThrow falhará.