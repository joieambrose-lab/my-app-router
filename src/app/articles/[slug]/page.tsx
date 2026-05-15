import articles from '@/data/articles.json'
import Link from 'next/link'

type Article = (typeof articles)[number]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = (articles as Article[]).find((a) => a.slug === slug)
  if (!article) {
    return <p>Article not found</p>
  }
  return (
    <main>
      <Link href="/">← Back to Homepage</Link>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.date}</p>
      <p>{article.content}</p>
    </main>
  )
}
