# Desafío OQO

Hecho con React, axios, react-bootstrap y módulos CSS.

# Proceso

- Lo primero fue planificar las herramientas que iba a usar.
- Decidí utilizar react porque es la tecnología que estoy estudiando y puliendo actualmente.
- Utilicé la librería axios para facilitar hacer request al endpoint de la api y poder desplegar la información fácilmente.
- Luego decidí utilizar bootstrap como librería de estilos pero más específicamente la versión react-bootstrap, que trae componentes de React.
- Luego comencé a planificar la aplicación. Decidí hacer varios componentes que solo muestren estilos, como el Navbar, el Footer y un Layout para poner toda la información.
- Luego, el cuadro con el mapa y la lista de destinos, decidí separarlo en dos componentes MapContainer y DestinationsList, ambos dentro de un componente DestinationsBox. Mantuve el número de componentes anidados al mínimo para facilitar el paso de estados entre componentes debido al tamaño y complejidad de la aplicación. De ser más grande, hubiera aplicado redux para facilitar el traspaso de estados.
- Luego, en el componente de DestinationsBox se hace el request del enpoint para obtener los datos y construir los componentes con los datos y el array que contiene los datos de longitud, latitud y checked de cada ubicación.
Por otra parte en el MapContainer, utilicé la librería @react-google-maps/api que despliega el mapa como un componente y los marcadores. Le cambién el estilo al mapa y le di ciertas configuraciones.
- Luego, al checkbox le añadí una función que busca el respectivo componente y pone el checked como true, esto luego se pasa como prop al mapa, el cual lo toma el respectivo elemento Marker en el atributo visible para mostrarse u ocultarse.
Y por último, para los colores, creé un array con toros los posibles íconos para los marcadores y pasarlo como prop al componente mapa.

- Para finalizar, luego de terminar la funcionalidad importante, solo restó terminar el layout de la página y arreglar los warnings del código para poder hacer build y subir el proyecto;