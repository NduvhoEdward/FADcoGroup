'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/sanity'
import { Calendar, User } from 'lucide-react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-primary-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-primary-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto">
            Insights, tips, and inspiration from the world of architecture and construction. 
            Stay updated with the latest trends and project highlights.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-primary-600">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.mainImage || '/placeholder-blog.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-primary-500 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        {post.author && (
                          <>
                            <span className="mx-2">•</span>
                            <User size={16} className="mr-1" />
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-primary-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}