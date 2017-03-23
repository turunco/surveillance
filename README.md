# surveillance

Capture photographs by video camera.<br>
Client web application sends those photographs to the server.<br>
Server saves those photographs to the storage.<br>

## Warn
- Cut corners :P<br>
  - Error checks<br>
  - Need to register `http://localhost:8080/` to whitelist of CORS<br>

## Preparation.
- USB Video camera

### client
```
> cd client
> npm install
```

### server
```
- Nothing.
```


## Execute.
### client
```
> npm start
```
Access [http://localhost:8080/](http://localhost:8080/) by web browser.


### server
```
> node main.js
```


## References
- Client :<br>
 Video capture - [https://www.html5rocks.com/en/tutorials/getusermedia/intro/](https://www.html5rocks.com/en/tutorials/getusermedia/intro/)<br>
GPS - [https://www.w3.org/TR/geolocation-API/](https://www.w3.org/TR/geolocation-API/)<br>
- Server : [http://www.nodebeginner.org/](http://www.nodebeginner.org/)<br>