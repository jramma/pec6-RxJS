# Preguntas

1. ¿Qué son los interceptores?
2. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los
   pasos que se están desarrollando y explica en qué caso usarías este código:

```
this.wines$ = this.searchSubject
.startWith(this.searchTerm)
.debounceTime(300)
.distinctUntilChanged()
.merge(this.reloadProductsList)
.switchMap((query) =>
this.wineService.getWine(this.searchTerm));
```
