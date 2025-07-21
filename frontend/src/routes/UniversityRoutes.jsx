<<<<<<< HEAD
import { Dashboard,Dashboarduser,AdPublish, AcademicContent, Announcement,Announcementuser,Manageportfolio,Manageportfoliouser } from '../pages/University';
=======
import { Dashboard,Dashboarduser,AdPublish, AcademicContent,AcademicContentuser, Announcement,Announcementuser,Manageportfolio,Manageportfoliouser,Mentoruni } from '../pages/University';
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d

export const universityRoutes = [
  {
    path: '/university/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/university/dashboarduser',
    element: <Dashboarduser />,
  },
  {
    path: '/university/ad-publish',
    element: <AdPublish />,
  },
  {
    path: '/university/academic-content',
    element: <AcademicContent />,
  },
  {
<<<<<<< HEAD
=======
    path: '/university/academic-content-user',
    element: <AcademicContentuser />,
  },
  {
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
    path: '/university/announcement',
    element: <Announcement />,
  },
  {
    path: '/university/announcement-user',
    element: <Announcementuser />,
  },
  {
    path: '/university/manage-portfolio',
    element: <Manageportfolio />,
  },
  {
    path: '/university/manage-portfolio-user',
    element: <Manageportfoliouser />,
<<<<<<< HEAD
=======
  },
  {
    path: '/university/mentoruni',
    element: <Mentoruni />,
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
  }
];