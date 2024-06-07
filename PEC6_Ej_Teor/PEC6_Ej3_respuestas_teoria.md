# Preguntas

1. ¿Qué son los interceptores?
   
   Los interceptores en Angular son una forma de procesar las solicitudes HTTP antes de que sean enviadas al servidor o después de que las respuestas son recibidas. Son útiles para una variedad de tareas, como la manipulación de errores, la adición de cabeceras HTTP, el registro de solicitudes y respuestas, y la implementación de la lógica de autenticación.

   Aquí tienes un ejemplo básico de un interceptor en Angular:

   ```typescript
   import { Injectable } from '@angular/core';
   import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
   import { Observable } from 'rxjs';

   @Injectable()
   export class MyInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const modifiedReq = req.clone({
         headers: req.headers.set('

   Authorization

   ', 'mi-token')
      });

      return next.handle(modifiedReq);
   }
   }
   ```

   En este ejemplo, el interceptor añade una cabecera de autorización a todas las solicitudes HTTP antes de que sean enviadas. Para que Angular utilice este interceptor, tendrías que añadirlo a la lista de proveedores en tu módulo principal:

   ```typescript
   import { HTTP_INTERCEPTORS } from "@angular/common/http";
   import { MyInterceptor } from "./my-interceptor";

   @NgModule({
     // ...
     providers: [
       { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
       // ...
     ],
     // ...
   })
   export class AppModule {}
   ```

   En este código, `HTTP_INTERCEPTORS` es un token de inyección que Angular utiliza para manejar una lista de interceptores. Al añadir tu interceptor a esta lista, le estás diciendo a Angular que lo utilice para todas las solicitudes HTTP.

2. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los
   pasos que se están desarrollando y explica en qué caso usarías este código:

   ```typescript
   this.wines$ = this.searchSubject
   .startWith(this.searchTerm)
   .debounceTime(300)
   .distinctUntilChanged()
   .merge(this.reloadProductsList)
   .switchMap((query) =>
   this.wineService.getWine(this.searchTerm));
   ```

   Este código utiliza varios operadores de RxJS para crear un flujo de datos reactivo. Aquí está lo que hace cada operador:

   1. `this.searchSubject`: Este es probablemente un `Subject` de RxJS que emite valores cada vez que el término de búsqueda cambia.

   2. `.startWith(this.searchTerm)`: Este operador hace que el flujo de datos comience con un valor inicial, en este caso `this.searchTerm`. Esto significa que se realizará una búsqueda inicial con el término de búsqueda actual.

   3. `.debounceTime(300)`: Este operador retrasa los valores emitidos por el `Subject` en 300 milisegundos. Esto es útil para evitar hacer demasiadas solicitudes al servidor mientras el usuario está escribiendo en un campo de búsqueda, por ejemplo.

   4. `.distinctUntilChanged()`: Este operador asegura que el `Subject` sólo emita un valor si es diferente al último valor emitido. Esto evita hacer solicitudes innecesarias al servidor si el término de búsqueda no ha cambiado.

   5. `.merge(this.reloadProductsList)`: Este operador combina el flujo de datos del `Subject` con otro flujo de datos, en este caso `this.reloadProductsList`. Esto podría ser útil si quieres que la lista de vinos se actualice no sólo cuando cambie el término de búsqueda, sino también cuando ocurra otro evento, como el usuario pulsando un botón de "recargar".

   6. `.switchMap((query) => this.wineService.getWine(this.searchTerm))`: Este operador cambia el flujo de datos a un nuevo Observable cada vez que el `Subject` emite un valor. En este caso, cada vez que cambia el término de búsqueda, se realiza una nueva solicitud al servidor para obtener la lista de vinos.

   Este tipo de código sería útil en una aplicación donde los usuarios pueden buscar vinos por un término de búsqueda y también tienen la opción de recargar la lista de vinos. El uso de RxJS permite manejar este tipo de lógica de manera declarativa y reactiva.
