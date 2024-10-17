import{createServer} from 'node:http'

const servidor = createServer((req, resp)=>{
    console.log('qualquer coisa')
    resp.write('ta funcionando2')

    return resp.end()

})


servidor.listen(8000)