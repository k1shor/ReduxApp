import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { GlobalContextProvider } from './GlobalContext';
import Main from './Main';
import MyRoutes from './MyRoutes';
import { combineReducers, createStore } from 'redux';
import counterReducer from './counterReducer';
import { Provider, useDispatch } from 'react-redux';
import gameReducer from './GameReducer';
import itemReducer from './reducers/itemReducer';
import cartReducer from './reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  // const myStore = createStore(counterReducer)
  // const myStore = createStore(gameReducer)

  const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const myStore = createStore(persistedReducer)
  let persistor = persistStore(myStore)


  return (
    <GlobalContextProvider>
      {/* <Counter/> */}
      {/* <Main /> */}
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </GlobalContextProvider>
  );
}

export default App;
