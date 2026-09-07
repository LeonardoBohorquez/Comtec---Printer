# Bitácora de cambios

## Proyecto Comtec Printer

### Historial de cambios

| Fecha | Commit | Cambios realizados |
|---|---|---|
| 21/08/2026 | `08b2d3c` | Inicio del proyecto Comtec Printer. |
| 23/08/2026 | `869cf2f` | Actualización de las validaciones en los formularios de entrada. |
| 01/09/2026 | `4ab79be` | Creación del módulo de monitoreo, menú inicial y carga de datos de impresoras. |
| 02/09/2026 | `02cafeb` | Mejoras visuales en el menú: colores, estilos e iconos. |
| 03/09/2026 | `f928353` | Incorporación de nuevas opciones al menú de monitoreo e iconos adicionales. |
| Pendiente | Cambios locales | Actualización del registro de usuarios, autenticación con `localStorage`, recuperación de contraseña e inicio del componente Dashboard. |

## Cambios locales pendientes de commit

### Aplicación principal

En `src/App.jsx`:

- Se eliminó el estado temporal de usuarios.
- Las rutas dejaron de recibir usuarios mediante propiedades.
- Se mantienen las rutas de inicio, recuperación de contraseña, creación de usuario y monitoreo.
- Se actualizó la importación del componente de inicio de sesión para utilizar `Login`.

### Inicio de sesión

En `src/components/Login/Login.jsx`:

- Se cambió el componente de `login` a `Login` para cumplir la convención de nombres de React.
- Se eliminó la dependencia de la lista de usuarios recibida mediante propiedades.
- Se agregó la lectura de usuarios desde `localStorage` utilizando la clave `usuarios`.
- Se valida el usuario junto con su contraseña antes de permitir el acceso.
- Se mantiene la redirección al módulo de monitoreo cuando las credenciales son correctas.

### Creación de usuarios

En `src/components/CrearUsuario/CrearUsuario.jsx`:

- Se validan los campos obligatorios.
- Se valida que el correo electrónico no esté registrado.
- Se valida que las contraseñas coincidan.
- Se exige una contraseña de mínimo 8 caracteres.
- Los usuarios se almacenan en `localStorage`.
- Se agregaron mensajes de éxito y advertencia mediante notificaciones.
- Se agregó una función para limpiar el formulario.
- Se incluyó el número de contacto en los datos del usuario.

### Recuperación de contraseña

En `src/components/RecuperarContraseña/RecuperarContraseña.jsx`:

- Se eliminó la dependencia de la lista de usuarios recibida mediante propiedades.
- Se agregó la lectura de usuarios desde `localStorage` utilizando la clave `usuarios`.
- Se valida que el correo electrónico esté registrado antes de continuar con la recuperación.
- Se actualizaron los mensajes de validación para campos vacíos y correos no registrados.

### Módulo de monitoreo

En `src/components/Monitoreo/Monitoreo.jsx`:

- Se inició la integración del componente Dashboard.
- Se mantiene el menú lateral del sistema de monitoreo.

En `src/components/Monitoreo/DashBoard/Dashboard.jsx`:

- Se creó la estructura inicial del componente Dashboard.
- La funcionalidad visual y los datos del dashboard están pendientes.

## Estado actual

El proyecto cuenta con la navegación principal, el módulo de creación de usuarios y la base inicial del sistema de monitoreo. El Dashboard está creado, pero todavía no contiene componentes visuales ni datos.

## Próximas tareas sugeridas

1. Completar el diseño y la funcionalidad del Dashboard.
2. Conectar las opciones del menú con sus respectivas rutas.
4. Eliminar o utilizar los imports no utilizados en el módulo de monitoreo.
5. Crear un commit para registrar los cambios locales pendientes.
