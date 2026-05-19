import articles from '@/data/articles.json'

export async function GET() {
  return Response.json(articles)
}
