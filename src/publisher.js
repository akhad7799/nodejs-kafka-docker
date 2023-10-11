import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
    clientId: '1',
    brokers: ['localhost:29092'],
});

const producer = kafka.producer({createPartitioner: Partitioners.LegacyPartitioner});
const runProducer = async () => {
    await producer.connect();
    await producer.send({
        topic: 'test',
        messages: [
            {
                value: 'Hello Kafka. This is test message from producer',
                headers: {
                    pub: 'This is test header.'
                }
            }
        ]
    });
    await producer.disconnect();
}

runProducer().catch(console.error);