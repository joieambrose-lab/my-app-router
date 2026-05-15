import articles from '@/data/articles.json'
import Link from 'next/link'

type Article = (typeof articles)[number]

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
