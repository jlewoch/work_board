import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const changeStatus = createAction(types.UPDATE_STATUS)
