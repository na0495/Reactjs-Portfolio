import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { BoxesLoaderComponent } from '../components/Animation/BoxesLoader';

const Loadable = (Component) => (props) => {

    return (
      <Suspense fallback={<BoxesLoaderComponent/>}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function MainRouter() {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/aboutme',
            element: <AboutMePage />
        },
        {
            path: '/skills',
            element: <SkillsPage />
        },
        {
            path: '/project',
            element: <ProjectPage />
        },
        {
            path: '/resume',
            element: <ResumePage />
        },
        {
            path: '/project',
            element: <ProjectPage />
        },
        {
            path: '/singelpage',
            element: <SingelPage />
        },
        {
            path: '/github',
            element: <GithubPage />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])
}

const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const AboutMePage = Loadable(lazy(() => import('../pages/AboutMePage')));
const SkillsPage = Loadable(lazy(() => import('../pages/SkillsPage')));
const ProjectPage = Loadable(lazy(() => import('../pages/ProjectPage')));
const ResumePage = Loadable(lazy(() => import('../pages/ResumePage')));
const SingelPage = Loadable(lazy(() => import('../pages/SingelPage')));
const GithubPage = Loadable(lazy(() => import('../pages/GithubPage')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));
