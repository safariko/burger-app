import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        sideDrawerShow: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ sideDrawerShow: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerShow: !prevState.sideDrawerShow };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    clickDrawerToggle={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    showSideDrawer={this.state.sideDrawerShow}
                    closeSideDrawer={this.sideDrawerCloseHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;