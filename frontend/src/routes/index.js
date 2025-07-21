<<<<<<< HEAD
import { companyRoutes } from './CompanyRoutes';
import { universityRoutes } from './UniversityRoutes';

export const routes = [
  ...companyRoutes,
  ...universityRoutes,
  // ...other routes
];
=======
export { default as AdminRoutes } from './AdminRoutes';
export { default as UniStudentRoutes } from './UniStudentRoutes';
import { companyRoutes } from './CompanyRoutes';
import { universityRoutes } from './UniversityRoutes';
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
