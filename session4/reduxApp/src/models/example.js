import {query} from '../services/example'

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({dispatch, history}) { // eslint-disable-line
    }
  },

  effects: {
    *fetch({
      payload
    }, {call, put}) { // eslint-disable-line
      const data = yield call(query)
      console.log(data)
      yield put({type: 'save', payload: {
          data: data.data
        }});
    }
  },

  reducers: {
    save(state, {payload}) {
      console.log(payload)
      return {
        ...state,
        data:payload.data
      };
    }
  }
};
