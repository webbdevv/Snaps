import React, { Component } from 'react'
import AppHeader from './header/app_header'
import Sidebar from './sidebar/sidebar'
import Main from './main-content/main'
export default class Lackx extends Component {
    componentDidMount(){
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
    }

    render() {
        return (
            <div className="app-container">
                <AppHeader/>
                <Sidebar/>
                <Main/>
            </div>
        )
    }
}
