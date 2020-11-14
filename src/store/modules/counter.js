import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

// 액션 생섬함수 정의
export const changeColor = createAction(CHANGE_COLOR, text => text);

// **** 초기상태 정의
const initialState = {
  color: 'red',
};

// **** 리듀서 작성
export default handleActions(
  {
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      color: action.payload,
    }),
  },
  initialState,
);