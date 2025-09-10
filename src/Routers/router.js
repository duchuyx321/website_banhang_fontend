import { config } from '~/Config';
// import layouyt
import DefaultLayout from '~/Layout/DefaultLayout';
//  import page
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import { Orders, PersonalInfo, Security, Settings } from '~/Pages/Profile/SubPages';

//  public router
const PublicRouter = [
    { path: config.router.home, component: Home },
    {
        path: config.router.PersonalInfo,
        component: PersonalInfo,
        layout: Profile,
        
    },
    {
        path: config.router.Security,
        component: Security,
        layout: Profile,
        
    },
    {
        path: config.router.Orders,
        component: Orders,
        layout: Profile,
        
    },
    {
        path: config.router.Settings,
        component: Settings,
        layout: Profile,
        
    },
];

// user router
const UserRouter = [];

// admin router
const AdminRouter = [];

export { PublicRouter, UserRouter, AdminRouter };
