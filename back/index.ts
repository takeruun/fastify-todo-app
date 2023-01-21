import { appConfig } from './config';
import server from './server';

const start = async () => {
  server.listen({ port: appConfig.APP_PORT }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
