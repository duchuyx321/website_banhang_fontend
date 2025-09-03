import { config } from '~/Config';
// import layouyt

//  import page
import Home from '~/Pages/Home';

//  public router
const PublicRouter = [{ path: config.router.home, component: Home }];

// user router
const UserRouter = [];

// admin router
const AdminRouter = [];

export { PublicRouter, UserRouter, AdminRouter };
