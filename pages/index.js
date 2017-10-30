import withPage from '../HOCs/page';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Home = (props) => {
  return (
    <Card>
    <CardHeader title={props.board.title} />
    <CardText>
      {
        props.board.items.map((x,i) => {
          return (<p key={i}>{x.name}</p>)
        })
      }
    </CardText>
    </Card>
  )
}

export default withPage(Home);
