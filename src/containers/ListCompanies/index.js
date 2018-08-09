import React from "react";
import JobList from "../../components/CompanyItem";
import CompanyList from "../../components/CompanyList";
import ApiFetcher from "../../components/Fetcher";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "80%",
    margin: "auto"
  },
  chip: {
    marginLeft: "auto",
    padding: "0 !important",
    marginTop: "auto",
    marginRight: "20px"
  },
  heading: {
    marginTop: "auto",
    marginLeft: "10px"
  }
});

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };

    this.fetcher = ApiFetcher;
  }

  componentDidMount() {
    try {
      this.fetcher.all("companies").then(result => {
        this.setState({ companies: result });
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { classes } = this.props;
    const panels = this.state.companies.map(company => {
      return (
        <ExpansionPanel key={company.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar alt="" src={company.logo} />
            <Typography variant="title" className={classes.heading}>
              {company.name}
            </Typography>
            <Chip
              label={"size - " + company.size}
              color="primary"
              className={classes.chip}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Email" secondary={company.email} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" secondary={company.contact} />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Tech Stack"
                  secondary={company.techStack}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Description"
                  secondary={company.description}
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <h1>List of Companies</h1>
          </Grid>
          <Grid item xs={12}>
            {panels}
          </Grid>
        </Grid>
      </div>
    );
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
