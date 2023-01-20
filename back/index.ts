import server from './server';

const start = async () => {
  server.listen({ port: 3111 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
