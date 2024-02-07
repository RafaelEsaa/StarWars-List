# Proyecto en React JS


Se usa:

1- axios-hooks (muy similar a react-query para manejar cache en la peticiones de la tabla)

2- manejo de tabla con material-react-table

3- interceptor con axios-hooks

4- dos configuraciones de interceptor (services/apiConfig.js y services/apiConfigUseAxios)

    - services/apiConfig.js: se usa con la configuracion useMakeAxios
    - services/apiConfigUseAxios.js se usa la configuracion config y se llama en el App.jsx