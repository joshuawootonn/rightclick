import React from "react";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Paper from 'material-ui/Paper';
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import MoreVertIcon from "material-ui-icons/MoreVert";
import Typography from "material-ui/Typography";
import SkipPreviousIcon from "material-ui-icons/SkipPrevious";
import PlayArrowIcon from "material-ui-icons/PlayArrow";
import SkipNextIcon from "material-ui-icons/SkipNext";

const styles = theme => ({
  card: {
    display: "flex"
    
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200,
    height: 200
  },
  controls: {
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38
  }
});
const LeagueOverviewComponent = props => {
  const { classes, theme } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.player.name}</Typography>
            
          </CardContent>
        </div>

        <div className={classes.controls}>
          <CardMedia
            className={classes.cover}
            image={props.rankIconPath}
            title="Live from space album cover"
          />
        </div>
      </Card>
      
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(LeagueOverviewComponent);

// <div className="tile box is-12 secondary stripper">
//       <div className="parent">
//         <div className="left">
//           <h1 className="title ">
//             {player.name}
//           </h1>
//           <h4 className="title is-5">
//             {wr}WR
//           </h4>
//         </div>
//         <div className="middle">
//           <img
//             alt="rank icon"
//             className="is-pulled-right rank-icon"
//             src={props.rankIconPath}
//           />
//           <h1 className="title is-5">
//             {league.leaguePoints}LP
//           </h1>
//         </div>
//         <div className="right">
//           <h1 className="title is-5">
//             {league.tier + " " + league.rank}
//           </h1>
//           <h4 className="title">
//             {league.wins}W / {league.losses}L
//           </h4>
//         </div>
//       </div>
//     </div>
