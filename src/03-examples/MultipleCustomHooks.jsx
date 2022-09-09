import { useFetch, useCounter } from "../hooks";
import { Quote, IsLoadingQuote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    ` https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; //transform undefined to false !!

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <IsLoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
    </>
  );
};
