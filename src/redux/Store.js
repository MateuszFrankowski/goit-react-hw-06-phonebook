import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './Reducer';

const enhancer = devToolsEnhancer();
export const Store = configureStore(rootReducer, enhancer);
