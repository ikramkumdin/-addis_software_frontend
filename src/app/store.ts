import { configureStore } from '@reduxjs/toolkit'
import employeesSlice from './employeeState'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: {
      employees: employeesSlice
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
