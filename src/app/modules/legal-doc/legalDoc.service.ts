import { ILeagalDocFilter } from './legalDoc.interface';

export const getAllDocs = (filters: ILeagalDocFilter) => {
  console.log(filters);
  return {};
};

export const LeagalDocService = {
  getAllDocs,
};
