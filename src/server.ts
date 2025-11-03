import { Server } from 'http';
import app from './app';
import config from './config';
import { initialize_elastic_search } from './infra/elastic-search/elastic-serch';

async function bootstrap() {
  let server: Server;

  try {
    server = app.listen(config.port, async () => {
      // logger.info(`Server running on port ${config.port}`);
      console.log(`Server running on port ${config.port}`);

      await initialize_elastic_search();
    });
  } catch (error) {
    console.log(error);
  }

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        // logger.info('Server closed');
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    // errorlogger.error(error);
    console.log(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    // logger.info('SIGTERM received');
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();
