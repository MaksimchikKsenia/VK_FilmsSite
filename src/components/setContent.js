import Spinner from './Spinner/spinner';
import Error from './Error/error';
const setContent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return <Error />;
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContent;
