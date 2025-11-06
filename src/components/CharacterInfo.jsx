export const CharacterInfo = ({ data }) => {
if(!data) return <h1>nada</h1>
  return <>
<h1> {data?.name}</h1>
<h1> {data?.id}</h1>
  </>;
};

// 3. Agregar navegación entre personajes
// Incorporar un botón adicional que permita ver los personajes anteriores.
// Tener en cuenta que no debe ser posible buscar un personaje con un id menor a 1, si el personaje actual tiene id = 1, el botón “Anterior” debe estar deshabilitado.
// Puntos Clave
// No se deben usar librerías externas.
// No es necesario utilizar navegación.
// Si se utiliza CSS, debe implementarse mediante un archivo externo con extensión .css. No se permite el uso de frameworks de estilos ni la aplicación de estilos en línea.
// Se recomienda intentar resolver la actividad leyendo la documentación y el código de práctica proporcionado, sin recurrir a herramientas de inteligencia artificial, con el objetivo de aprender a equivocarse, analizar y resolver problemas de forma autónoma.
