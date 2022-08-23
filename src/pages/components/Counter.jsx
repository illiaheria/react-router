import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  decrementAction,
} from "../../store/reducers/mainReducer";
import { countSelector } from "../../store/selectors/mainSelectors";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  return (
    <>
      {count}
      <button onClick={() => dispatch(incrementAction())}>Add 1</button>
      <button onClick={() => dispatch(decrementAction())}>Minus 1</button>
    </>
  );
};
