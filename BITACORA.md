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
| 08/09/2026 | `26b4c4a` | Reorganización del módulo de monitoreo en nuevas carpetas y componentes, incorporación del encabezado, contenido principal, dashboard y vistas iniciales para las opciones del menú. Se eliminó el archivo de datos de impresoras anterior. |
| Registrado previamente | `add8560` | Actualización del registro de usuarios, autenticación con `localStorage` y recuperación de contraseña. |

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

- Se integraron el encabezado y el contenido principal del módulo de monitoreo.
- Se mantiene el menú lateral del sistema de monitoreo.

### Estructura del módulo de monitoreo

- Se creó `src/components/Monitoreo/Header/Header.jsx` para el encabezado.
- Se creó `src/components/Monitoreo/Main/Main.jsx` para organizar el contenido principal.
- Se reorganizó el dashboard en `src/components/Monitoreo/Main/DashBoard/Dashboard.jsx`.
- Se agregó `ResumenEstadoImpresoras.jsx` con el resumen visual de impresoras totales, operativas, con alertas y fuera de línea.
- Se crearon vistas iniciales para alertas, consumibles, impresoras, regiones, reportes, tareas y usuarios.
- Se actualizaron las rutas y el menú para utilizar la nueva estructura de componentes.
- Se eliminó `src/data/Impresoras.json`, que contenía los datos anteriores de impresoras.

En el dashboard inicial, posteriormente reorganizado en `src/components/Monitoreo/Main/DashBoard/Dashboard.jsx`:

- Se creó la estructura inicial del componente Dashboard.
- Se incorporó el resumen visual de estados de impresoras.

## Estado actual

El proyecto cuenta con la navegación principal, el módulo de creación de usuarios y una estructura inicial del sistema de monitoreo. El módulo ya incluye encabezado, menú, contenido principal, dashboard y vistas iniciales para sus opciones. El resumen del dashboard muestra valores de ejemplo y todavía debe conectarse a datos reales.

## Próximas tareas sugeridas

1. Completar el diseño y la funcionalidad del Dashboard.
2. Conectar las opciones del menú con sus respectivas rutas.
3. Conectar las vistas del módulo de monitoreo con datos reales.
4. Eliminar o utilizar los imports no utilizados en el módulo de monitoreo.
5. Crear un commit para registrar los cambios locales pendientes.
