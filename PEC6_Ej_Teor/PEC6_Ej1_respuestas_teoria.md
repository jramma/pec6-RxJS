# Preguntas

1. **¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)**

   Los componentes y servicios en Angular tienen funciones específicas y complementarias.

   **Componentes**: Son la unidad básica de construcción en una aplicación Angular. Cada componente controla una parte de la pantalla (una vista) a través de su template HTML asociado. Los componentes son responsables de la interacción con el usuario y la presentación de datos en la interfaz de usuario. Se deben utilizar cuando necesitas crear una funcionalidad específica que interactúa con la vista.

   **Servicios**: Son clases con un propósito específico que se utilizan para organizar y compartir código a través de tu aplicación. Los servicios pueden contener métodos y propiedades que pueden ser reutilizados en diferentes componentes. Los servicios son ideales para tareas como obtener datos de un servidor, validar entrada de usuario, o registrar en consola. Se deben utilizar cuando necesitas compartir lógica de negocio, modelos de datos o funciones entre varios componentes.

   En resumen, los componentes se utilizan para controlar vistas y manejar interacciones con el usuario, mientras que los servicios se utilizan para procesar tareas comunes y compartir lógica entre componentes.

2. **¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?**

   La **inyección de dependencias** es un patrón de diseño que se utiliza en programación para aumentar la eficiencia y modularidad del código. En Angular, la inyección de dependencias es fundamental y se utiliza para proporcionar nuevas instancias de clases, conocidas como dependencias, a otras clases o componentes que las soliciten.

   En Angular, la inyección de dependencias se utiliza para definir cómo se resuelven las dependencias en toda la aplicación. Esto permite que los componentes y servicios sean más modulares y reutilizables, ya que no necesitan crear sus propias dependencias, sino que las reciben de un inyector.

   El decorador **@Injectable** en Angular se utiliza para marcar una clase como disponible para ser proporcionada e inyectada como dependencia en otras clases. Cuando una clase está marcada con @Injectable, Angular puede utilizar esta para instanciar y proporcionar a otras clases o componentes.

   En resumen, la inyección de dependencias permite que las clases sean más modulares y reutilizables, y el decorador @Injectable se utiliza para marcar una clase como inyectable.

3. **Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:**

   • **Observable**: En RxJS, un Observable es una función que puede enviar múltiples valores a lo largo del tiempo. Puede emitir tres tipos de valores: normales, errores y un valor de finalización. Los Observables son perezosos, lo que significa que no comienzan a emitir valores hasta que alguien se suscribe a ellos.

   • **Subscription**: Una Subscription es un objeto que representa la ejecución de un Observable. Cuando te suscribes a un Observable, obtienes una Subscription. Puedes cancelar la ejecución de un Observable llamando al método unsubscribe() de la Subscription.

   • **Operators**: Los operadores son funciones puras que permiten manipular los valores emitidos por los Observables. RxJS tiene una gran cantidad de operadores que permiten realizar operaciones como mapeo, filtrado, concatenación, etc. sobre los valores emitidos por un Observable.

   • **Subject**: Un Subject en RxJS es un tipo especial de Observable que permite emitir valores a múltiples Observers. A diferencia de los Observables, los Subjects son multicasting, lo que significa que cuando un valor es emitido, es enviado a todos los Observers suscritos.

   • **Schedulers**: Los Schedulers en RxJS son controladores de concurrencia que pueden controlar cuándo se ejecuta un trabajo en relación con otros trabajos. Por ejemplo, puedes usar un Scheduler para controlar el orden en que los Observables emiten valores, o para introducir un retraso en la emisión de valores.

4. **¿Cuál es la diferencia entre promesas y observables?**

   Las promesas y los observables son constructos que nos ayudan a manejar operaciones asíncronas en JavaScript, pero tienen algunas diferencias clave:

   **Promesas**:

   - Una promesa representa una operación única que eventualmente puede completarse o fallar.
   - Una vez que una promesa se resuelve o se rechaza, no puede ser reutilizada.
   - Las promesas son eager, lo que significa que la operación asíncrona se inicia tan pronto como se crea la promesa.

   **Observables**:

   - Un observable (como los utilizados en RxJS) puede emitir múltiples valores a lo largo del tiempo.
   - Los observables son lazy, lo que significa que la operación asíncrona no se inicia hasta que alguien se suscribe al observable.
   - Los observables proporcionan operadores (como map, filter, reduce) que las promesas no tienen.
   - Los observables pueden ser cancelados, lo que significa que puedes detener la emisión de valores utilizando el método unsubscribe(). Las promesas no pueden ser canceladas.

   En resumen, aunque tanto las promesas como los observables pueden ser utilizados para manejar operaciones asíncronas, los observables proporcionan más flexibilidad y funcionalidad.

5. **¿Cuál es la función de la tubería (pipe) async?**

   La tubería (pipe) `async` en Angular es un operador de plantilla que se utiliza para suscribirse automáticamente a un Observable o Promesa y devolver el valor más reciente que ha emitido. Cuando se utiliza el pipe `async`, Angular se encarga de la suscripción al Observable o Promesa, y también se encarga de la cancelación de la suscripción cuando el componente se destruye, lo que ayuda a prevenir posibles fugas de memoria.

   En resumen, el pipe `async` te permite suscribirte a Observables y Promesas directamente en tu plantilla, y maneja automáticamente la suscripción y cancelación de la suscripción.
