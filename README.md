# eslint-config-prodest
>Configurações [ESLint](http://eslint.org/) para projetos do [PRODEST](http://www.prodest.es.gov.br)

Garante que o código adere ao *coding style* [idiomatic js](https://github.com/rwaldron/idiomatic.js/) realizando o *linting*
do código usando [ESLint](http://eslint.org/).

## Coding Style: [idiomatic js](https://github.com/rwaldron/idiomatic.js/) + customizações
`eslint-config-prodest` é amplamente baseado nas regras de estilo de código [idiomatic js](https://github.com/rwaldron/idiomatic.js/)

**Exemplo de código com estilo Idiomatic:**
```js
const thing = 'Hello',
  another = 'World';

function idiomatic( arg ) {
  let out = 'Bye';
  if ( !arg ) {
    out = thing;
  } else if ( arg === thing ) {
    out = another;
  }
  return out;
}
```

`eslint-config-prodest` também customiza algumas poucas regras de 'linting' do idiomatic, usadas em projetos
do PRODEST. Dessa maneira, o *coding style* PRODEST pode ser adicionado a qualquer projeto facilmente.

## Instalação
```
npm install --save-dev @prodest/eslint-config-prodest
```

Observação: use a versão `^1.0.0` para o ESLint versão `^1.x.x`.

## Uso
Em seu arquivo `.eslintrc`:
```json
{
  "extends": "prodest"
}
```
### *Overrides*
Você pode facilmente sobrescrever regras de `eslint-config-prodest` em seu próprio arquivo `.eslintrc`. Por exemplo, para usar identação
com 2 espaços ao invés de 4(padrão), use:

```json
{
  "extends": "prodest",
  "rules": {
    "indent": [2, 2]
  }
}
```

### ES5
`eslint-config-prodest` é ES6+ por padrão. Para usar ES5, extenda `prodest/es5`
em seu arquivo `.eslintrc`:
```json
{
  "extends": "prodest/es5"
}
```
