import { useRouter } from 'next/router'

export default function Home() {

  const { query } = useRouter()

  return (
    <h1>Product: {JSON.stringify(query)}</h1>
  )
}