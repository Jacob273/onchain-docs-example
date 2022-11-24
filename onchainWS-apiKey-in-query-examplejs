var http = require("http");

http.createServer(function (request, response) {
  const url = request.url;

  if (url === "/connect") {

    const WebSocket = require('ws');
    const url = 'wss://ws.onchain.coinapi.io/v1/?apiKey=ED802AF4-YOUR-API-KEY';
    const wsConnection = new WebSocket(url);

    wsConnection.onopen = (event) => {
      const data = JSON.stringify(
        {
          'type': 'subscribe',
          'dapp_id': 'SUSHISWAP',
          'data_type': 'tokenss',
          'request_id': 'MY-REQUEST-IDENTIFIER-001',
        });
      wsConnection.send(data);
    }

    wsConnection.onerror = (error) => {
      console.log(`WebSocket error: ${JSON.stringify(error)}`)
    }

    wsConnection.onmessage = (e) => {
      console.log(e.data)
    }
  }       
  //if url is not '/connect', we do the following:
  else {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('CoinAPI rocks!');
  }
}).listen(8081);


console.log('Running at http://127.0.0.1:8081/');
