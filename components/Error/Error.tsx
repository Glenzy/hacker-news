import Grid from 'components/common/Grid';
import GridItem from 'components/common/GridItem';
import Container from 'components/common/Container';
import Message from './Error.styles';

const Error = ({ error }) => {
  return (
    <Container>
      <Grid>
        <GridItem>
          <Message children={error} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Error;
