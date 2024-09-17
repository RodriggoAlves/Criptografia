# Visão Geral

Este código JavaScript implementa um algoritmo de criptografia/descriptografia simples conhecido como cifra de César. Ele desloca cada caractere no texto de entrada por um número específico de posições no alfabeto.

## Variáveis e Funções

- **shift:** Uma variável global que representa o número de posições para deslocar os caracteres no alfabeto.
- **encryptText():** Criptografa o texto no campo de entrada com o valor de deslocamento atual e exibe o resultado em uma modal.
- **decryptText():** Descriptografa o texto no campo de entrada com o valor de deslocamento atual e exibe o resultado em uma modal.
- **showModal(title, text):** Exibe uma modal com o título e o conteúdo do texto fornecidos.
- **closeModal():** Fecha a modal.
- **setShift(newShift):** Define o valor de deslocamento para um novo valor.

## Como Funciona

1. **Entrada:** O usuário insere o texto no campo de entrada.
2. **Criptografia/Descriptografia:** A função `encryptText()` ou `decryptText()` é chamada, dependendo da operação desejada.
3. **Processamento:**
   - A função itera sobre cada caractere no texto de entrada.
   - Obtém o código ASCII do caractere.
   - Adiciona ou subtrai o valor de `shift` ao código ASCII para realizar o deslocamento.
   - Converte o código ASCII deslocado de volta para um caractere e o anexa ao texto criptografado/descriptografado.
4. **Exibição:** O texto criptografado/descriptografado é exibido em uma modal.

## Uso

1. **Definir Deslocamento:** Se necessário, use a função `setShift()` para alterar o valor de deslocamento.
2. **Inserir Texto:** Insira o texto que você deseja criptografar ou descriptografar no campo de entrada correspondente.
3. **Criptografar/Descriptografar:** Clique no botão apropriado para executar a operação desejada.
4. **Visualizar Resultado:** O texto criptografado ou descriptografado será exibido na modal.

## Limitações

- **Algoritmo Simples:** A cifra de César é um algoritmo relativamente simples e pode ser facilmente quebrado com análise de frequência.
- **Deslocamento Fixo:** A implementação atual usa um valor de deslocamento fixo. Para uma criptografia mais segura, um deslocamento variável ou aleatório poderia ser usado.

## Tradução dos Nomes das Funções

- **encryptText():** Criptografar Texto
- **decryptText():** Descriptografar Texto
- **showModal(title, text):** Mostrar Modal
- **closeModal():** Fechar Modal
- **setShift(newShift):** Definir Deslocamento

## Explicação Detalhada da Lógica

O código funciona percorrendo cada caractere do texto de entrada. Para cada caractere:

1. **Obtém o Código ASCII:** O código ASCII é um número associado a cada caractere.
2. **Desloca o Código:** Adiciona ou subtrai o valor de `shift` ao código ASCII para "mover" o caractere no alfabeto.
3. **Converte de Volta para Caractere:** O novo código ASCII é convertido de volta para o caractere correspondente.
4. **Acrescenta ao Texto Final:** O novo caractere é adicionado ao texto criptografado ou descriptografado.

### Exemplo

Se o texto for "ABC" e o deslocamento for 3, o resultado da criptografia será "DEF". Cada letra foi "avançada" três posições no alfabeto.
