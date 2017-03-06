# Socket IO Playground

Just a kit with a super-simple socket IO echo server.

## Installation

You should have [git][git] and [node and npm][node] installed.

```bash
git clone git@github.com:esmevane/socket-io-playground
cd socket-io-playground
npm i
```

## Usage

It's pretty straightforward stuff.  The server just listens for the client to say something to it, then publishes the packet to the log.

### Start the server:

```bash
npm start
```

### Throw an event at the server:

```bash
bin/client --channel "some.random.channel" --message "Hey you guys!"
```

## License
