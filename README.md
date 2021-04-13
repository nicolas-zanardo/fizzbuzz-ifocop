# TP DIW59 - DEV PHP - 13/04/1984

## EXERCICE 2

### Enoncé

FizzBuzz

Ecrivez un programme qui affiche dans la console tous les nombres entre 1 et 100 avec les exceptions suivantes :

Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
Utiliser l'opérateur modulo % qui renvoie le reste de la division d'un entier par un autre.

Aide
chiffre % 3 == 0 -> divisible par 3
chiffre % 5 == 0 -> divisible par 5

## Exercice réalisé avec Webpack et TypeScript

Demo: https://stackblitz.com/edit/fizzbuzz-ifocop?file=index.ts

GitHub: https://github.com/nicolas-zanardo/fizzbuzz-ifocop

``` bash
npm install
```

To use webpack local server on port 4000
``` bash
npm start
```

To build app
``` bash
npm run build
```