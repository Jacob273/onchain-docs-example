var http = require("http");

http.createServer(function (request, response) {
  const url = request.url;

  if (url === "/connect") {

    const WebSocket = require('ws');
    const url = 'wss://ws.onchain.coinapi.io/v1';
    const wsConnection = new WebSocket(url, {headers: {'X-CoinAPI-Key' : 'ED802AF4-YOUR-API-KEY'}});

    wsConnection.onopen = () => {
      const subscribeMessage = JSON.stringify(
        {
          'type': 'SUBSCRIBE',
          'dapp_id': 'SUSHISWAP',
          'data_type': 'TOKENS',
          'request_id': 'MY-REQUEST-IDENTIFIER--001',
        });
      wsConnection.send(data);
    }

    wsConnection.onerror = (error) => {
      console.log(`WebSocket error: ${JSON.stringify(error)}`)
      console.log(error);
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
