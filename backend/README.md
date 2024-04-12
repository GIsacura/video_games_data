
# Video Games Database (BackEnd)

Api para consulta a base de datos de videojuegos basado en el dataset de "" con informacion hasta el año 2020


## Tech Stack

Node, Nest, Typescript


## Demo

https://video-games-data-be.onrender.com

## API Reference

#### Get all games

```http
  GET /games
```

| QueryParam | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Optional**. Name of a game to filter by |
| `page` | `string` | **Optional**. Page of the list to fetch |
| `limit` | `string` | **Optional**. Quantity of games to fetch |
| `platforms` | `string` | **Optional**. List of platforms. Un string hecho de los nombres de las plataforms separadas por %  |
| `genres` | `string` | **Optional**. List of genres. Un string hecho de los nombres de los generos separados por %  |

#### Get game

```http
  GET /games/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of game to fetch |

#### get autocompleted games

```http
  GET /games/autocomplete
```

| QueryParam | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Optional**. Nombre del juego para obtener una lista de nombres de juegos como posibles opciones de autocompletado |