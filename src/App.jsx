import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicRouter, UserRouter, AdminRouter } from '~/Routers';

import DefaultLayout from '~/Layout/DefaultLayout';
import ProtectedRoute from '~/Routers/ProtectedRoute';

function App() {
    const router = createBrowserRouter([
        //  public router
        ...PublicRouter.map((item) => {
            let Layout = item.layout || DefaultLayout;

            const Page = item.component;
            return {
                path: item.path,
                element: (
                    <Layout>
                        <Page />
                    </Layout>
                ),
            };
        }),
        // user router
        ...UserRouter.map((item) => {
            let Layout = item.layout || DefaultLayout;
            if (item.layout) {
                Layout = item.layout;
            }
            const Page = item.component;
            return {
                path: item.path,
                element: (
                    <ProtectedRoute role="User">
                        <Layout>
                            <Page />
                        </Layout>
                    </ProtectedRoute>
                ),
            };
        }),
        // Admin router
        ...AdminRouter.map((item) => {
            let Layout = item.layout || DefaultLayout;
            if (item.layout) {
                Layout = item.layout;
            }
            const Page = item.component;
            return {
                path: item.path,
                element: (
                    <ProtectedRoute role="Admin">
                        <Layout>
                            <Page />
                        </Layout>
                    </ProtectedRoute>
                ),
            };
        }),
    ]);
    return (
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    );
}

export default App;
