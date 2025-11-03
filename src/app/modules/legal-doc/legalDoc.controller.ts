import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { LEGAL_DOC_FILTER_FIELDS } from './legalDoc.constant';
import { LeagalDocService } from './legalDoc.service';

const getAllDocs = catchAsync(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters = pick(req.query as any, LEGAL_DOC_FILTER_FIELDS);

  const result = await LeagalDocService.getAllDocs(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Doc retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

export const LegalDocController = {
  getAllDocs,
};
