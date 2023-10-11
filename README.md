# Kafka and ZooKeeper with Docker Compose

This Docker Compose configuration sets up Apache Kafka and Apache ZooKeeper using Docker containers. It's a simple way to get started with Kafka for development and testing purposes.

## Prerequisites

Before running the provided Docker Compose file, ensure you have the following prerequisites installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)
- Node.js: [Install Node.js](https://nodejs.org/)

## Getting Started

1. Clone or download this repository to your local machine.

2. Open a terminal and navigate to the directory containing the `docker-compose.yml` file.

3. Run the following command to start the Kafka and ZooKeeper containers:

   ```bash
   docker-compose up -d
4. Install the necessary Node.js dependencies by running the following command:

   ```bash
   npm install
5. Navigate to the src folder to run the Kafka consumer and producer:

   ```bash
   cd src
6. Run the Kafka consumer and producer from the src folder:
   
  - To run the Kafka producer:
     ```bash
     node producer.js
    
  - To run the Kafka consumer:
      ```bash
      node consumer.js

## Stopping the Containers

To stop the containers, use the following command:
```bash
docker-compose down
