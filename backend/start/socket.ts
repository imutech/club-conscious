// import WebSocket, { WebSocketServer } from 'ws'
// import Ws from '../app/entities/websockets/connectionHandler.js'
// import logger from '@adonisjs/core/services/logger'

// let clientId: number = 0
// Ws.boot()

// const serverIo = Ws.wss as WebSocket.Server
// /**
//  * Listen for incoming socket connections
//  */
// interface ExtWebSocket extends WebSocket {
//   isAlive: boolean
// }

// serverIo.on('connection', function connection(ws: WebSocket) {
//   const extWs = ws as ExtWebSocket
//   clientId++
//   logger.info(clientId + ' connected')
//   extWs.isAlive = true

//   ws.send('hello')
//   ws.on('pong', () => (extWs.isAlive = true))

//   ws.on('close', function () {
//     logger.info(clientId + ' disconnected')
//   })

//   ws.on('message', function message(data, isBinary) {
//     logger.info('arrived message')
//     logger.info(data)
//     broadcastMessage(data, isBinary)
//   })
// })

// export function broadcastMessage(data: any, isBinary: boolean) {
//   try {
//     logger.info('arrived broadcastMessage')
//     logger.info(data)
//     logger.info('serverIo', serverIo)
//     logger.error('serverIo.clients', serverIo.clients)

//     serverIo.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary })
//       }
//     })
    
//   } catch (error) {
//     logger.error(error)
//   }
// }

// serverIo.on('close', function close() {
//   logger.info(clientId + ' disconnected..')
// })
