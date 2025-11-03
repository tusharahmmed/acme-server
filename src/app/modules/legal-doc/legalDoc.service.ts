/* eslint-disable @typescript-eslint/no-explicit-any */
import { ELASTIC_INDEX } from '../../../enums/elasticIndex';
import { elasticClient } from '../../../infra/elastic-search/elastic-serch';
import { ILeagalDocFilter } from './legalDoc.interface';

export const getAllDocs = async (filters: ILeagalDocFilter) => {
  const { q } = filters;

  const andConditons = [];

  if (q) {
    andConditons.push({
      multi_match: {
        query: q,
        fields: ['title^3', 'category^2', 'content^2', 'summary^2', 'tags^1.5'],
        fuzziness: 'AUTO',
        operator: 'or',
      },
    });
  } else {
    andConditons.push({
      match_all: {},
    });
  }

  const result = await elasticClient.search({
    index: ELASTIC_INDEX.LEGAL_DOCS,
    body: {
      query: {
        bool: {
          must: andConditons,
        },
      } as any,
      highlight: {
        fields: {
          title: {},
          summary: {},
        },
        pre_tags: ['<mark>'],
        post_tags: ['</mark>'],
      } as any,
    },
    size: 50,
  });

  const matchFound = result?.hits?.hits.map((item: any) => {
    return {
      ...item?._source,
      score: item?._score,
      heighlight: item?.highlight,
    };
  });

  let total = 0;

  if (typeof result?.hits?.total === 'number') {
    total = result.hits.total;
  } else {
    total = result.hits.total?.value as number;
  }

  return {
    data: matchFound,
    meta: {
      total,
    },
  };
};

export const LeagalDocService = {
  getAllDocs,
};
