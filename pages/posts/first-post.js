import React, { Component } from 'react'
import Link from 'next/link';
import Head from 'next/head';

export default class FirstPost extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>First Post</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>First Post</h1>
                <Link href="/" >
                    <a className="card">
                        <h3>Back To Home &rarr;</h3>
                    </a>
                </Link>
            </div>
        )
    }
}
