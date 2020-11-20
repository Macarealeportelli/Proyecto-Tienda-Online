Querida Maca, 

En primer lugar quiero felicitarte por un gran trabajo. Se nota que aca pusiste esfuerzo, y que te esmeraste en entregar un producto lo mas finalizado posible. El diseño esta muy bien hecho y seguis muy bien las pautas. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes adecuados. Tus imagenes tienen el atributo alt, y tu uso de etiquetas aria es perfecto. Muy buen trabajo aca. 

Nota que tus label del checkout no tienen el atributo "for" completado, lo que tiene la consecuencia de que hacer click en la frase "tarjeta de descuento" por ejemplo no me marca el checkbox. Los checkbox y radio son muy pequeños, y ampliarlos para que puedan marcarse con el label es muy importante para quienes tienen dificultades con la motricidad fina.

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. La unica falla que encuentro es si filtro productos en desktop y luego me voy a mobile - los filtros de desktop quedan puestos aunque no se vean. Es un detalle, porque en general los usuarios no cambian el tamaño de su ventana (eso lo hacemos los desarrolladores), pero para que tengas en cuenta.

Tu funcion resultadoDeProductosMostrados esta hecha a la perfeccion, no entiendo por que la dejaste comentada. Solo hace falta llamarla al final de filtrarTarjetas(). 

### Carrito

Tu carrito esta muy bien! Bien maquetado, muy hermoso, siguiendo todas las pautas. Lo unico a comentar es que si "vacio" el carrito me sigue informando que hay dos productos, y no puedo volver a agregarlos de ninguna manera. No es un detalle muy importante pero puede ser algo confuso para quien vea este trabajo sin conocer las consgnas. 

### Checkout

Si bien las funciones de calculo para el carrito estan bien, tenes muchisima logica repetida. Seria ideal que pudieras achicarla un poco - pensa en funciones: que reciban parametros, esos parametros te van a servir para reutilizar el codigo pero agregando y quitando la informacion que necesitas. 

Un solo error es que si entro al carrito y lo unico que marco es "Necesito envio", voy a tener un NaN en lugar del precio. Recorre con atencion tu codigo: hay una condicion en donde asumis que vas a tener un recargo, y no lo tenes. Ahi falla el calculo y terminas con un NaN. 

Ocasionalmente ocurre que las sumas de los totales dan decimales algo extraños. No es culpa de tus calculos, sino de como se comportan los numeros flotantes, tanto en JS como en cualquier otro lenguaje. Por ejemplo si sumamos 0.1 + 0.2 notaras que el total no es 0.3 sino 0.30000000000000004. En tu carrito, si selecciono la playstation 4 y le agrego tarjeta de credito, veo como recargo $5999.900000000001. Algo muy, muy molesto cuando trabajamos con numeros en web. Podes solucionarlo con un toFixed(2) en todos los numeros para que se vean solo 2 decimales.

Como tu etiqueta form se cierra antes de los botones de enviar y seguir comprando, tu formulario propiamente nunca se envia (y podemos finalizar la compra incluso sin haber completado los campos requeridos). Un formulario no puede cerrarse sin incluir el boton de envio. 

### Misc 

Tu HTML esta muy bien, prolijo, claro y ordenado. Tu CSS esta muy prolijo y bien hecho tambien: se nota mucho el esfuerzo puesto. Noto bastante dependencia del codigo de Ada para resolver algunas cosas que podrias haber hecho mas sencillas con las herramientas que vimos en clase (el ::before en el banner por ejemplo)

Con respecto al aspecto visual de tu web, donde no esta perfecto, se nota que fue el tiempo lo que faltó. En donde se nota que tuviste tiempo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. 

Se habria apreciado un transition al pasar el mouse por las imagenes, como ocurre en la web de Ada. Podes agregarlo a .imagen-producto para que funcione. El responsive no esta logrado cuando las tarjetas estan puestas en forma de columna en lugar de grilla, quiza quieras mejorar eso. Un detalle es que cuando pongo las tarjetas en columna y luego vuelvo a grilla, el puntaje de cada tarjeta se corre a la izquierda: fijate que tenes un par de clases que te estan afectando eso. 

Si "compro" un producto (es decir, hago click en "finalizar compra") despues ya no puedo hacer scroll en tu web. Atencion a las clases que agregas y quitas: esta quedando en algun lugar la clase no-scroll agregada al body. 

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento --> por los puntos mencionados
✔️  Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅ Funciones pequeñas.
✅ Commits con mensajes adecuados.
✅ Cumple con las condiciones de accesibilidad avanzada.


NOTA FINAL: 8







