import withPage from '../HOCs/page';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AddPost from '../features/AddItem';
import ViewItems from '../features/ViewItems';


const Home = (props) => (
    <Card>
      <CardHeader title={props.board.title} />
      <CardText>
        <ViewItems />
        <AddPost />
      </CardText>
    </Card>
);




export default withPage(Home);
