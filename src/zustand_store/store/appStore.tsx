import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';

import { createThemeSlice } from '@zustand_store/slice';
import { AppStoreState } from './types';

export const appStore = create<AppStoreState>()(
    immer((...api) => ({
        Theme: createThemeSlice(...api),
    }))
);
