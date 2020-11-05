# BlueFox Info Server
A small express server for sending stats for 
the (upcoming) BlueFox panel.

## Running
First install the dependancies using yarn or
npm
```bash
yarn install
# or
npm install 
```
To start the server make sure there is an
environment variable called `BLUEFOX_PORT` with 
the port to host on. If this is missing the 
server will shutdown.

After that you can run
```bash
node .
```
## Usage
### Sending
To send stats simply make a `POST` request to 
`/`. These requests should be an array or
string with the values to set. This will 
return an object with `error` and `message`
property's. `error` is a boolean stating
whether it errored or not. The message
is the message the server sent. Arrays will
be trimmed to always be a max of 4 values.

### Getting
To get the stats send a `GET` request to `/`.
This will return an array with the values.
This array will be between 0 and 4 values 
long.