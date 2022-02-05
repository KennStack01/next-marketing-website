import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(
  'https://api-us-east-1.graphcms.com/v2/ckz83d4zr0vn701wb4gs04w0u/master'
)

// const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

export default function Home({ greetingMessages }) {
  console.log(greetingMessages)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next - Headless CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://graphcms.com">
            GraphCMS
          </a>
        </h1>

        <div className="mx-auto flex flex-col">
          {/* {greetingMessages?.map((content, index) => (
            <div key={index} className="my-10">
              <h1 className="text-xl font-bold"> {content.greatTitle} </h1>
              <p className="text-md my-5 text-justify font-medium">
                {' '}
                {content.productDescription}{' '}
              </p>
            </div>
          ))} */}
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"></div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

// Query Data
export async function getStaticProps() {
  try {
    const query = `
      query {
        greetingMessages {
          greatTitle
          productDescription
        }
      }
    `

    const { greetingMessages } = await graphcms.request(query)

    return {
      props: {
        greetingMessages,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {},
  }
}
