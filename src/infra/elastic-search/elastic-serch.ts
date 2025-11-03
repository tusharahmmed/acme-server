/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client } from '@elastic/elasticsearch';
import httpStatus from 'http-status';
import config from '../../config';
import { mockLegalDocs } from '../../constant/db';
import { ELASTIC_INDEX } from '../../enums/elasticIndex';
import ApiError from '../../errors/ApiError';

export const elasticClient = new Client({
  node: config.elastic_node,
  auth: {
    apiKey: config.elastic_api_key as string,
  },
});

export const initialize_elastic_search = async () => {
  try {
    // chekc exist index
    const isIndexExist = await elasticClient.indices.exists({
      index: ELASTIC_INDEX.LEGAL_DOCS,
    });

    if (isIndexExist) {
      return;
    }

    // create index
    await elasticClient.indices.create({
      index: ELASTIC_INDEX.LEGAL_DOCS,
      body: {
        mappings: {
          properties: {
            id: { type: 'keyword' },
            title: {
              type: 'text',
              fields: {
                keyword: { type: 'keyword' },
              },
            },
            category: { type: 'keyword' },
            content: { type: 'text' },
            summary: { type: 'text' },
            jurisdiction: { type: 'keyword' },
            year: { type: 'integer' },
            tags: { type: 'keyword' },
          },
        } as any,
      },
    });

    // feed data
    const operations = [];
    for (const item of mockLegalDocs) {
      operations.push({
        index: { _index: ELASTIC_INDEX.LEGAL_DOCS, _id: item.id },
      });
      operations.push(item);
    }

    await elasticClient.bulk({
      refresh: true,
      operations,
    });
  } catch (err) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Elastic search initialization error',
    );
  }
};
