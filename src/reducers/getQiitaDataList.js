import {
  GET_QIITA_DATA_LIST_REQUEST, GET_QIITA_DATA_LIST_SUCCESS, GET_QIITA_DATA_LIST_FAILURE
} from '../actions/getQiitaDataList';

const initalState = {
  isFetching: false,
  data: null
}

const getQiitaDataList = (state = [initalState], action) => {
  switch (action.type) {
    case GET_QIITA_DATA_LIST_REQUEST:
      return {
        isFetching: true,
        data: null
      }
    case GET_QIITA_DATA_LIST_SUCCESS:
      return {
        isFetching: false,
        data: action.data
      }
    case GET_QIITA_DATA_LIST_FAILURE:
      return {
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default getQiitaDataList;