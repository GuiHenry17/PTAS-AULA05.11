import http from 'http'

//- HTTP
//   - Método
//   - URL

//GET, POST, PUT, PATCH, DELETE
//GET -> Buscar uma informação do backend
//POST -> Criar um recurso no backend
//PUT -> Atualizar um recurso do backend
//PATCH -> Atualizar uma informação específica de um recurso do backend
//DELETE -> Deletar um recurso do backend

//GET /users -> Buscar usuário no backend
//POST /users -> Criar usuário no backend


const server = http.createServer((req, res) => {
	const {method, url} = req

	if(method === 'GET' && url === '/users'){
 	   return res.end('Usuarios recuperados')
	}

	if(method === 'POST' && url === '/users'){
 	   return res.end('Usuarios cadastrado')
	}
	res.end('Hello World')
})

server.listen(3333)