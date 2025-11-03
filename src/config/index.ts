import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  elastic_node: process.env.ELASTIC_NODE,
  elastic_api_key: process.env.ELASTIC_API_KEY,
};
