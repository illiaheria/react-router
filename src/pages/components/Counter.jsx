import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/toolkitStore/toolkitSlice";
import { countSelector } from "../../store/selectors/mainSelectors";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  return (
    <>
      {count}
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
    </>
  );
};
