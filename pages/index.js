import React from 'react'
import Head from 'next/head'
import { HashRouter, Route, history } from 'react-router-dom'

import Posts from '../components/Posts'

function FirstPage() {
    return(
        <div className="App">
            <Head>
                <link rel="stylesheet" href="/static/app.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <HashRouter history={history}>
                <div id="Routes">
                    <Route path='/' component={Posts}/>
                </div>
            </HashRouter>
        </div>
    )
}

export default FirstPage