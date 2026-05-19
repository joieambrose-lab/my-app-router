import articles from '@/data/articles.json'
import Article from '@/types/article'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const article = (articles as Article[]).find((a) => a.slug === slug)
  if (!article) {
    return Response.json({ error: 'Article not found' }, { status: 404 })
  }
  return Response.json(article, { status: 200 })
}
