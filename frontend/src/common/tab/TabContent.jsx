import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './tabActions';
import If from '../operator/If';

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id;
        const visible = this.props.tab.visible[this.props.id];
        return(
            <If test={visible}>
                <div className={`tab-pane ${selected ? 'active' : ''}`} id={this.props.id}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab});
//const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch);

export default connect(mapStateToProps)(TabContent);