import { useRouteError } from "react-router-dom";
import './error.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="titulo">Oops!</h1>
      {/* https://media.tenor.com/A4juFPgw0CMAAAAC/me-voy.gif 
          https://i.pinimg.com/originals/9d/cb/65/9dcb656df62520ce2b580ad6c45c8429.gif
      */}
      <img id="gif" src="https://media.tenor.com/A4juFPgw0CMAAAAC/me-voy.gif" alt="" />
      <p className="mensaje">Sorry, an unexpected error has occurred.</p>
      <p >
        <i >{error.statusText || error.message}</i>
      </p>
    </div>
  );
}