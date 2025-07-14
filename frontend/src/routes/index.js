import { companyRoutes } from './CompanyRoutes';
import { universityRoutes } from './UniversityRoutes';

export const routes = [
  ...companyRoutes,
  ...universityRoutes,
  // ...other routes
];