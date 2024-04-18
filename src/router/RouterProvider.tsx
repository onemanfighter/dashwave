import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { privateRouter, publicRouter } from 'router';

/**
 * Router declaration for the demo app.
 */
export default function RouterProviderComponent() {
    const state = useSelector((state: RootState) => state.auth.authToken);

    return (
        <RouterProvider router={state !== '' ? privateRouter : publicRouter} />
    );
}
