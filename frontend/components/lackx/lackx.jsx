import React, { useState, useEffect } from 'react'
// import AppHeader from './header/app_header'
import AppHeaderContainer from './header/app_header_container'
import Main from './main-content/main'
import SidebarContainer from './sidebar/sidebar_container'
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/react'
import message_options_container from './main-content/message_options_container'
// import ChannelDescriptionModalContainer from '../modals/channel_description_container'
export default function Lackx(props){
    const [mount, setMount] = useState(false)
    const [loading, setLoading] = useState(true)
    const color = '#2164a3'

    const override = css`
        position: absolute;
    `
    useEffect(() => {
        if(props.history.location.pathname === '/workspaces') return null;
        props.fetchWorkspace(props.match.params.workspaceId).then(() => {
            setTimeout(() => {
                setLoading(false);
                document.body.style.overflow = 'hidden'
            }, 1000)
            App.cable.subscriptions.create({
                channel: "WorkspaceNotification",
                workspace_id: props.workspace.id
            }, {
                received: (data) => {
                    debugger
                    if(data){

                    }
                }
            })
        })
    }, [mount])

    if(loading) return <div className='loading'>
        <ClipLoader className="loader" color={color} override={override} loading={loading} size={200}/>
        <img className="slack-loading" src={window.slack} alt="" />
        <div className="load-container">
            <div className="load-msg">Launching Lackx</div>
            <div className="load-description">Preparing for liftoff, please wait while we get things ready</div>
        </div>
    </div>
    return (
        <div className="app-container">
            <AppHeaderContainer workspace={props.workspace}/>
            <SidebarContainer/>
            <Main/>
        </div>
    )
}
