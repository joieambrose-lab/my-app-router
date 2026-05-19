'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Article from '@/types/article'

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching articles:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <main>
      {articles.map((article) => (
        <div key={article.id}>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          <p>{article.date}</p>
        </div>
      ))}
    </main>
  )
}
