import articles from '@/data/articles.json'
import Link from 'next/link'

interface Article {
  id: number
  title: string
  slug: string
  author: string
  date: string
  content: string
  image: string
  category: string
}

export default async function Home() {
  return (
    <main>
      {(articles as Article[]).map((article) => (
  <div key={article.id}>
    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
    <p>{article.date}</p>
  </div>
))}
    </main>
  )
}

