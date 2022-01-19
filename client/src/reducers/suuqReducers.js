import {
  SUUQ_DETAILS_FAIL,
  SUUQ_DETAILS_REQ,
  SUUQ_DETAILS_SUCCESS,
  SUUQ_LIST_FAIL,
  SUUQ_LIST_REQ,
  SUUQ_LIST_SUCCESS,
} from "../actionTypes/suuqTypes";

export const suuqListReducer = (state = { suuqs: [] }, action) => {
  switch (action.type) {
    case SUUQ_LIST_REQ:
      return {
        loading: true,
        suuqs: [],
      };
    case SUUQ_LIST_SUCCESS:
      return { loading: false, suuqs: action.payload };
    case SUUQ_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const suuqDetailsReducer = (
  state = { suuq: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SUUQ_DETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case SUUQ_DETAILS_SUCCESS:
      return { loading: false, suuq: action.payload };
    case SUUQ_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
