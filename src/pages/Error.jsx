import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import notFound from '../assets/images/not-found.svg';
import badError from '../assets/images/bad-error.svg';
import { Image } from 'react-bootstrap';
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <Image
            src={notFound}
            alt='not found'
          />
          <h3>Ohhh! page Not Found</h3>
          <p>We cant seem to find the page you are looking for</p>
          <Link to='/dashboard'>Home Page</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <Image
          src={badError}
          alt='Something happened'
        />
        <h3>Something went wrong</h3>
        <p>We are working on it, please try again later</p>
        <Link to='/'>Home Page</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
