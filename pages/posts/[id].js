import { getAllPostIds, getPostData } from '../../lib/post'
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {

    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <br />
            <Link href="/" >
                <a className="card">
                    <h3>Back To Home &rarr;</h3>
                </a>
            </Link>
        </div>
    )
}
