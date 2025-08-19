import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-10-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// API Functions
export async function getProjects(limit) {
  const query = `*[_type == "project"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    title,
    slug,
    description,
    category,
    location,
    completionDate,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url
  }`
  
  return await client.fetch(query)
}

export async function getProject(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    category,
    location,
    completionDate,
    content,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url
  }`
  
  return await client.fetch(query, { slug })
}

export async function getBlogPosts(limit) {
  const query = `*[_type == "post"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->name,
    "mainImage": mainImage.asset->url
  }`
  
  return await client.fetch(query)
}

export async function getBlogPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    excerpt,
    publishedAt,
    "author": author->name,
    "mainImage": mainImage.asset->url
  }`
  
  return await client.fetch(query, { slug })
}
