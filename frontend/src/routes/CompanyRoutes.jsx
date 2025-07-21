<<<<<<< HEAD
import { Dashboard,Dashboardedit, Internship, AdPublish,Announcement,Announcementuser,Course,Courseuser,Internshipuser } from '../pages/Company';
=======
import { Internship, AdPublish, Announcement, Announcementuser, Course, Courseuser, Internshipuser } from '../pages/Company';
import Dashboard from '../pages/Company/Dashboard'; // user dashboard
import Dashboardedit from '../pages/Company/Dashboardedit'; // admin dashboard
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d

export const companyRoutes = [
  {
    path: '/company/dashboard',
<<<<<<< HEAD
    element: <Dashboard />,
  },
  {
    path: '/company/dashboard-edit',
    element: <Dashboardedit />,
=======
    element: <Dashboard />, // USER dashboard
  },
  {
    path: '/company/dashboard-edit',
    element: <Dashboardedit />, // ADMIN dashboard
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
  },
  {
    path: '/company/internship',
    element: <Internship />,
  },
  {
<<<<<<< HEAD
    path: '/company/internship-user',
=======
    path: '/company/internshipuser',
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
    element: <Internshipuser />,
  },
  {
    path: '/company/ad-publish',
    element: <AdPublish />,
  },
  {
    path: '/company/announcement',
    element: <Announcement />,
  },
<<<<<<< HEAD
  
  {
    path: '/company/announcement-user',
=======
  {
    path: '/company/announcementuser',
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
    element: <Announcementuser />,
  },
  {
    path: '/company/course',
    element: <Course />,
  },
  {
<<<<<<< HEAD
    path: '/company/course-user',
    element: <Courseuser />,
  }
  
=======
    path: '/company/courseuser',
    element: <Courseuser />,
  }
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
];