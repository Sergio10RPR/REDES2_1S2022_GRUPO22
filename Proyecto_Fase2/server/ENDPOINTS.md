# DOCUMENTACION ENDPOINTS

## GET ADMINS

Obtiene la lista con todos los administradores en la base de datos
* Tipo: *GET*
* Endpoint-> `http://localhost:3000/getAdmins`
* Recibe: *No tiene parametros*
* Devuelve:

```
{
  "data": [
    {
      "id_administrador": 1,
      "nombre_admin": "Justo Rufuno",
      "apellido_admin": "Barrios",
      "descripcion": "Presidente de Guatemala, a la cabeza del ejecutivo",
      "cod_rol": 1,
      "link_imagen": null
    },
    {
      "id_administrador": 2,
      "nombre_admin": "Juanito",
      "apellido_admin": "Alcachofa",
      "descripcion": "Se encarga de otras tareas relegadas por el presidnete y propias del puesto",
      "cod_rol": 2,
      "link_imagen": null
    },
    {
      "id_administrador": 3,
      "nombre_admin": "Juanito",
      "apellido_admin": "Juanez",
      "descripcion": "Administra y gestiona el ministro de Educacion",
      "cod_rol": 3,
      "link_imagen": null
    }
  ],
  "flag": true,
  "msg": "Consulta correcta"
}
```


## GET DEVPS
Obtiene la lista con todos los desarrolladores en la base de datos
* Tipo: *GET*
* Endpoint-> `http://localhost:3000/getDevs`
* Recibe: *No tiene parametros*
* Devuelve:

```
{
  "data": [
    {
      "id_desarrollador": 1,
      "nombre_dev": "Airton Yelstin de Leon",
      "carnet": 201602836,
      "cod_curso": 1,
      "cod_rol": 2,
      "link_imagen": null,
      "descripcion": "Encargado de App en Front-End"
    },
    {
      "id_desarrollador": 2,
      "nombre_dev": "Cristian Suy",
      "carnet": 20170099,
      "cod_curso": 1,
      "cod_rol": 3,
      "link_imagen": null,
      "descripcion": "Encargado de gestionar plataforma Cloud-Computing AWS"
    }
  ],
  "flag": true,
  "msg": "Consulta correcta"
}
```


## GET IMAGES
Obtiene la lista con todas las imagenes en la base de datos
* Tipo: *GET*
* Endpoint-> `http://localhost:3000/getImages`
* Recibe: *No tiene parametros*
* Devuelve:

```
{
  "data": [],
  "flag": true,
  "msg": "Consulta correcta"
}
```
