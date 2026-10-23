import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProcedurePage from '@/app/components/ProcedurePage'
import { PROCEDURES, getProcedure } from '@/app/lib/procedures'

export const dynamicParams = false

export function generateStaticParams() {
  return PROCEDURES.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProcedure(slug)
  if (!p) return {}
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/treatments/${p.slug}` },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProcedure(slug)
  if (!p) notFound()
  return <ProcedurePage p={p} />
}
