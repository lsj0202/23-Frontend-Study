import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {
  
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache : new InMemoryCache() //컴퓨터의 메모리나 디스크에 저장하겠다. //나중에 할것
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
