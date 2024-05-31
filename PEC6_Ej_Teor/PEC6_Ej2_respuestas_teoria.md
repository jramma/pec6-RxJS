# Preguntas

1. ¿Cuál es la diferencia entre definir un servicio usando el decorador
    @Injectable o @NgModule? Referencia: https://angular.io/guide/providers

        La principal diferencia entre definir un servicio usando el decorador `@Injectable` y `@NgModule` radica en cómo y dónde se proporciona el servicio en tu aplicación Angular.

        - `@Injectable`: Este decorador se utiliza directamente en la clase del servicio. Cuando se utiliza el decorador `@Injectable`, puedes especificar en qué nivel del inyector se debe proporcionar el servicio utilizando la propiedad `providedIn`. Por ejemplo, si quieres que tu servicio esté disponible en toda la aplicación, puedes usar `providedIn: 'root'`.

        ```typescript
        @Injectable({
        providedIn: 'root',


        })


        export class MyService {
        // ...
        }
        ```

        - `@NgModule`: Este decorador se utiliza en una clase de módulo. Los servicios se pueden proporcionar en un módulo específico utilizando la propiedad `providers` del decorador `@NgModule`. Los servicios proporcionados de esta manera solo están disponibles en el módulo en el que se proporcionan (y en cualquier módulo que importe ese módulo).

        ```typescript
        @NgModule({
        providers: [MyService],
        })
        export class MyModule {
        // ...
        }
        ```

        En resumen, `@Injectable` te permite controlar el alcance del servicio directamente en la clase del servicio, mientras que `@NgModule` te permite controlar el alcance del servicio a nivel de módulo.

2. ¿Qué otras opciones admiten el decorador @Injectable para la
    propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?
    Referencia: https://dev.to/christiankohler/improved-dependeny-injection-
    with-the-new-providedin-scopes-any-and-platform-30bb

        La propiedad `providedIn` del decorador `@Injectable` en Angular admite las siguientes opciones:

        - `'root'`: Cuando se proporciona en `'root'`, el servicio se convierte en un singleton y está disponible en toda la aplicación.

        - `'platform'`: Cuando se proporciona en `'platform'`, el servicio está disponible en la plataforma de nivel superior. Esto significa que el servicio es un singleton en todos los módulos de la aplicación, incluso si se cargan de forma perezosa. Esto es útil para compartir un único servicio en todas las aplicaciones en un contexto de múltiples aplicaciones.

        - `'any'`: Cuando se proporciona en `'any'`, un nuevo servicio se creará para cada módulo que lo solicite. Esto significa que cada módulo cargado de forma perezosa tendrá su propia instancia del servicio.

        - Un módulo específico: También puedes proporcionar un servicio en un módulo específico. En este caso, el servicio solo estará disponible en ese módulo y en cualquier módulo que importe ese módulo.

        Estas diferentes opciones te permiten controlar el alcance de tus servicios y decidir dónde deben estar disponibles en tu aplicación.
