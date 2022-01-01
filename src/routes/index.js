import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import { Spinner } from '@chakra-ui/react';

const Loadable = (Component) => (props) => {
    //Todod: add loading spinner in Suspense
    // fallback=
    //     {<Spinner
    //         thickness='6px'
    //         speed='0.75s'
    //         emptyColor='gray.100'
    //         color='orange.300'
    //         size='xl'
    //     />}
  
    return (
      <Suspense fallback="loading">
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
