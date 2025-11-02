import express from 'express';
import { LegalDocRoutes } from '../modules/legal-doc/legalDoc.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/legal-docs',
    route: LegalDocRoutes,
  },
];

moduleRoutes.forEach(module => router.use(module.path, module.route));
export const applicationRoutes = router;
