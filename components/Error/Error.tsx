import Container from 'components/common/Container';
import Message from './Error.styles';

const Error = ({ error }) => {
  return (
    <Container>
      <Message children={error} />
    </Container>
  );
};

export default Error;
