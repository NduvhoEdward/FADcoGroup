import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPost } from '@/lib/sanity'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.mainImage }],
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          {post.mainImage && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-primary-500 mb-4">
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-primary-600">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {/* Content would be rendered here from Sanity's portable text */}
            <p className="text-primary-700">
              Blog post content would be rendered here using Sanity's Portable Text component.
              This is where the rich text content from your CMS would appear, including
              paragraphs, headings, images, and other formatted content.
            </p>
          </div>

          {/* Share/Navigation */}
          <div className="border-t border-primary-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog" 
                className="btn-secondary"
              >
                ← All Posts
              </Link>
              <Link 
                href="/contact" 
                className="btn-primary"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}