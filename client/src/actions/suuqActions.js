import axios from "axios";

import {
  SUUQ_DETAILS_FAIL,
  SUUQ_DETAILS_REQ,
  SUUQ_DETAILS_SUCCESS,
  SUUQ_LIST_FAIL,
  SUUQ_LIST_REQ,
  SUUQ_LIST_SUCCESS,
} from "../actionTypes/suuqTypes";

export const listSuuqs = () => async (dispatch) => {
  try {
    dispatch({ type: SUUQ_LIST_REQ });

    const { data } = await axios.get(`/api/suuq`);

    dispatch({ type: SUUQ_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUUQ_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singleSuuqDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUUQ_DETAILS_REQ });

    const { data } = await axios.get(`/api/suuq/${id}`);

    dispatch({ type: SUUQ_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUUQ_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
