import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'
import Header from '../components/Header'
import Feature from '../components/Feature'
import NewsLetter from '../components/NewsLetter'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

export default function Home({ productInfos, features }) {
  console.log(features)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Watch Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="">
        {productInfos.map((productInfo, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="absolute z-40 mx-4 mt-10 flex flex-col justify-items-center text-white md:mt-20">
              <h1 className="text-5xl font-bold md:my-8 md:text-8xl">
                {productInfo.nameOfProduct}
              </h1>
              <h2 className="my-10 text-lg font-medium md:w-3/4 md:text-2xl">
                {productInfo.productDescription}
              </h2>
            </div>
            <img
              src={productInfo.picture.url}
              loading="lazy"
              placeholder="blurred"
              className="relative inset-0 z-0 w-full bg-cover bg-center object-cover brightness-50 filter"
              alt="Photo by Vitaly Vlasov from Pexels"
            />
          </div>
        ))}
      </div>
      <main className="my-5 flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"> */}
        <div className="md:grid md:grid-cols-2 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <Feature
                title={feature.title}
                description={feature.description}
                imageSrc={feature.image.url}
              />
            </div>
          ))}
        </div>
      </main>

      <NewsLetter />

      <footer className="flex h-20 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://codewithkenn.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'  '}
          <span className="mx-2 font-bold hover:underline"> CodeWithKenn</span>
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
        productInfos(first: 1) {
          nameOfProduct
          picture {
            url
          }
          productDescription
        }

        features {
          title
          description
          image {
            url
          }
        }
      }
    `

    const { productInfos, features } = await graphcms.request(query)

    return {
      props: {
        productInfos,
        features,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {},
  }
}
