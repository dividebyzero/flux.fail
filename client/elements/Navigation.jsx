import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import Statistics from 'material-ui/svg-icons/action/assessment';
import ContentAdd from 'material-ui/svg-icons/content/add';

const appBarStyle = {
  position: 'fixed',
  top: '0px',
};

const drawerStyle = {
  top: '64px',
};

const fabStyle = {
  position: 'fixed',
  right: '24px',
  bottom: '24px',
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onNavigate(target) {
    this.setState({
      open: false
    });
    this.props.onNavigate(target);
  }

  onLogout(target) {
    this.setState({
      open: false
    });
    this.props.onLogout();
  }

  render() {
    let fab = null;
    if (this.props.allowAddDelay) {
      fab = (
        <FloatingActionButton
          style={fabStyle}
          onClick={this.props.onAddDelay}
        >
          <ContentAdd />
        </FloatingActionButton>
      );
    }
    return (
      <nav>
        <AppBar
          title="Flux.Fail"
          style={appBarStyle}
          onLeftIconButtonClick={(event) => {
            this.setState({
              open: !this.state.open,
            });
          }}
        />
        <Drawer
          open={this.state.open}
          containerStyle={drawerStyle}
        >
          <MenuItem
            primaryText="Home"
            leftIcon={<Home />}
            onClick={_ => this.onNavigate('home')}
            disabled={this.props.view === 'home'}
          />
          <MenuItem
            primaryText="Statistics"
            leftIcon={<Statistics />}
            onClick={_ => this.onNavigate('stats')}
            disabled={this.props.view === 'stats' || !this.props.user.id}
          />
          <Divider />
          <MenuItem
            primaryText="Log out"
            onClick={_ => this.onLogout()}
            disabled={!this.props.user.id}
          />
          <MenuItem
            primaryText="About Flux.Fail"
            onClick={_ => this.onNavigate('about')}
            disabled={this.props.view === 'about'}
          />
        </Drawer>
        {fab}
      </nav>
    );
  }
}

export default Navigation;
