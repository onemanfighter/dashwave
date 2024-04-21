import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { privateRouter, publicRouter } from '@router';
import { AuthSelector } from '@store/selectors';

/**
 * Router declaration for the demo app.
 */
export default function AppRouterProviderComponent() {
    const { authToken } = useSelector(AuthSelector);

    return (
        <RouterProvider
            router={authToken !== '' ? privateRouter : publicRouter}
        />
    );
}
