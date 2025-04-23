
const  JogoDaForca = require('./forca')

describe("1 - Verificar se a classe JogoDaForca inicializa corretamente com a palavra secreta oculta e o número de tentativas correto.", () => {
    let novoJogo;
  
    beforeEach(() => {
      novoJogo = new JogoDaForca('banana');
    });
  
    test("Verifica se o número de tentativas é 6.", () => {
      const tentativasMaximas = novoJogo.getTentativasRestantes();
      expect(tentativasMaximas).toBe(6)
  
    });
  
    test("Verifica se a lista de letras chutadas está vazia.", () => {
      const letrasChutadas = novoJogo.getLetrasChutadas()
      expect(letrasChutadas).toStrictEqual([])
  
    });
  });

  describe("2 - Chute de Letra Correta.", () => {
    let novoJogo;
  
    beforeEach(() => {
      novoJogo = new JogoDaForca('banana');
    });
  
    test("Verifica se o número de tentativas é 6.", () => {
      const tentativasMaximas = novoJogo.getTentativasRestantes();
      expect(tentativasMaximas).toBe(6)
  
    });
  
    test("Verifica se a lista de letras chutadas está vazia.", () => {
      const letrasChutadas = novoJogo.getLetrasChutadas()
      expect(letrasChutadas).toStrictEqual([])
  
    });
  });