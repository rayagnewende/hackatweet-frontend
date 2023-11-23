import { combineReducers, configureStore } from '@reduxjs/toolkit';
import '../styles/globals.css';
import Head from 'next/head';

import { persistStore, persistReducer} from "redux-persist"; 
import { PersistGate } from 'redux-persist/integration/react';
import storage from  "redux-persist/lib/storage"
import user from  "../reducers/user"; 

const reducers = combineReducers({ user }); 
const persistConfig = { key:'twitter app', storage}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck:false})
});

const persistor = persistStore(store); 

function App({ Component, pageProps }) {
  return (
    <>
      <PersistGate persistor={persistor}>
          <Head>
            <title>Next.js App</title>
          </Head>
          <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default App;
