import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../store/ItemSlice";
import {
  markFetchingStarted,
  markFetchDone,
  markFetchingFinished,
} from "../store/fetchStatusSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatusSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted());
    fetch("http://localhost:8081/items", {
      signal,
    })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItems(items));
      });
    // return () => {
    //   controller.abort();
    // };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItem;
