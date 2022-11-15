import nats, { Message } from 'node-nats-streaming'

const stan = nats.connect('ticketing', '123', {
    url: 'http://localhost:4222'
})

stan.on('connect', () => {
    console.log('Listener connected')

    const subscription = stan. subscribe('ticket:created')

    subscription.on('message', (msg: Message) => {
        console.log('Message received')
        const data = msg.getData()

        if (typeof data === 'string') {
            console.log(`Received event #${msg.getSequence()}, with data: ${JSON.stringify(data)}`)
        }
    })
})