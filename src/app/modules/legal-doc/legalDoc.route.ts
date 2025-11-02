import { Router } from 'express';
import { LegalDocController } from './legalDoc.controller';

const router = Router();

router.get('/', LegalDocController.getAllDocs);

export const LegalDocRoutes = router;
