import { Provider } from 'react-redux';
import { store } from '@store';
import { ReduxServiceProviderProps } from './types';

const ReduxServiceProvider = (props: ReduxServiceProviderProps) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxServiceProvider;
