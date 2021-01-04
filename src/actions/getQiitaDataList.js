import { qiitaApi } from "../services/api";

export const GET_QIITA_DATA_LIST_REQUEST = 'GET_QIITA_DATA_LIST_REQUEST';
export const GET_QIITA_DATA_LIST_SUCCESS = 'GET_QIITA_DATA_LIST_SUCCESS';
export const GET_QIITA_DATA_LIST_FAILURE = 'GET_QIITA_DATA_LIST_FAILURE';

const getQiitaDataListRequest = () => {
  return {
    type: GET_QIITA_DATA_LIST_REQUEST
  }
}

const getQiitaDataListSuccess = (data) => {
  return {
    type: GET_QIITA_DATA_LIST_SUCCESS,
    data
  }
}

const getQiitaDataListFailure = (error) => {
  return {
    type: GET_QIITA_DATA_LIST_FAILURE,
    error
  }
}

export const getQiitaDataList = (params) => {
  return (dispatch) => {
    dispatch(getQiitaDataListRequest());
    return qiitaApi.get('/items', { params })
      .then((result) =>
        dispatch(getQiitaDataListSuccess(result.data))
      ).catch((e) => 
        dispatch(getQiitaDataListFailure(e))
      )
  }
}