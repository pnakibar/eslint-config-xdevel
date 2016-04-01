# eslint-config-prodest
>Configurações [ESLint](http://eslint.org/) para projetos do [PRODEST](http://www.prodest.es.gov.br)

Garante que o código adere ao *coding style* da PRODEST realizando o *linting*
do código usando [ESLint](http://eslint.org/).

## Coding Style: [eslint-config-idiomatic](https://www.npmjs.com/package/eslint-config-idiomatic) + customizações
`eslint-config-prodest` é amplamente baseado nas regras de estilo de código [idiomatic js](https://github.com/rwaldron/idiomatic.js/), definidas
como regras ESLint no arquivo de configuração [eslint-config-idiomatic](https://www.npmjs.com/package/eslint-config-idiomatic).


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

O que arquivo de configuração (`eslint-config-prodest`) faz é:

 - extende [eslint-config-idiomatic](https://www.npmjs.com/package/eslint-config-idiomatic) customizando(sobrescrevendo) algumas poucas regras. 


## Instalação
```
npm i --save-dev eslint-config-prodest
```

## Uso
Em seu arquivo `.eslintrc`:
```json
{
  "extends": "prodest"
}
```

## Regras
Segue a seguir a listagem com todas as regras do ESLint configuradas por `eslint-config-prodest`:
```json
"rules": {

    // Regras herdadas do estilo *idiomatic*
     
    "array-bracket-spacing": [2, "always"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": false }],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "always"],
    "curly": [2, "all"],
    "dot-location": [2, "property"],
    "eol-last": [2],
    "func-names": [1],
    "indent": [2, 2],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": [2],
    "linebreak-style": [2],
    "no-func-assign": [2],
    "no-inline-comments": [2],
    "no-mixed-spaces-and-tabs": [2],
    "no-multi-spaces": [2],
    "no-spaced-func": [2],
    "no-trailing-spaces": [2],
    "object-curly-spacing": [2, "always"],
    "one-var": [2, "always"],
    "one-var-declaration-per-line": [2, "always"],
    "quotes": [2, "single"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "space-before-blocks": [2],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "always"],
    "space-infix-ops": [2],
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "vars-on-top": [2],
    "comma-dangle": [2, "never"],
    "complexity": [1, 10],
    "dot-notation": [2, { "allowKeywords": false }],
    "eqeqeq": [2],
    "new-parens": [2],
    "no-alert": [2],
    "no-array-constructor": [2],
    "no-catch-shadow": [2],
    "no-cond-assign": [2],
    "no-constant-condition": [2],
    "no-control-regex": [2],
    "no-debugger": [2],
    "no-delete-var": [2],
    "no-div-regex": [2],
    "no-dupe-args": [2],
    "no-dupe-keys": [2],
    "no-duplicate-case": [2],
    "no-empty": [2],
    "no-empty-character-class": [2],
    "no-eq-null": [2],
    "no-eval": [2],
    "no-ex-assign": [2],
    "no-extend-native": [2],
    "no-extra-bind": [2],
    "no-extra-boolean-cast": [2],
    "no-extra-semi": [2],
    "no-fallthrough": [2],
    "no-floating-decimal": [2],
    "no-func-assign": [2],
    "no-implied-eval": [2],
    "no-inner-declarations": [2],
    "no-invalid-regexp": [2],
    "no-invalid-this": [2],
    "no-irregular-whitespace": [2],
    "no-iterator": [2],
    "no-labels": [2],
    "no-lone-blocks": [2],
    "no-lonely-if": [2],
    "no-loop-func": [2],
    "no-multi-str": [2],
    "no-native-reassign": [2],
    "no-negated-in-lhs": [2],
    "no-new": [2],
    "no-new-func": [2],
    "no-new-object": [2],
    "no-new-wrappers": [2],
    "no-obj-calls": [2],
    "no-octal": [2],
    "no-octal-escape": [2],
    "no-param-reassign": [2],
    "no-redeclare": [2],
    "no-regex-spaces": [2],
    "no-return-assign": [2],
    "no-script-url": [2],
    "no-self-compare": [2],
    "no-sequences": [2],
    "no-shadow": [2],
    "no-shadow-restricted-names": [2],
    "no-sparse-arrays": [2],
    "no-throw-literal": [2],
    "no-undef": [2],
    "no-unneeded-ternary": [2],
    "no-unreachable": [2],
    "no-unused-expressions": [2],
    "no-unused-vars": [2],
    "no-useless-concat": [2],
    "no-void": [2],
    "no-warning-comments": [ 1, { "terms": [ "todo", "fixme" ], "location": "anywhere" } ],
    "no-with": [2],
    "radix": [2],
    "use-isnan": [2],
    "valid-typeof": [2],
    


    //Customizações que eslint-config-prodest aplica (sobrescreve) às regras do estilo *idiomatic*

    "valid-jsdoc": 1,
    "dot-notation": [2, {
        "allowKeywords": true
    }],
    "linebreak-style": [2, "windows"],
    "indent": [1, 4],
    "no-inline-comments": 0,
    "func-names": 0,
    "semi": [1, "always"],
    "one-var": [2, {
        "uninitialized": "never",
        "initialized": "never"
    }],
    "no-unused-expressions": [2, {
        "allowShortCircuit": true
    }]

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

