import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: '1',
    brokers: ['localhost: 29092']
});

const consumer = kafka.consumer({ groupId: '123' });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({topic: 'test', fromBeginning: true});
    await consumer.run({
        eachMessage: async (payload) => {
            console.log({
                topic: payload.topic,
                message: {
                    timestamp: payload.message.timestamp,
                    value: payload.message.value.toString(),
                    header: payload.message.headers['pub'].toString()
                }
            })
        }
    });
}

runConsumer().catch(console.error);