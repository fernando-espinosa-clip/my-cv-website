import { headers } from 'next/headers'
import { en, es, type Dictionary } from './dictionaries'

export type Lang = 'en' | 'es'

export async function getDictionary(): Promise<{ t: Dictionary; lang: Lang }> {
  const headersList = await headers()
  const lang: Lang = headersList.get('x-lang') === 'es' ? 'es' : 'en'
  return { t: lang === 'es' ? es : en, lang }
}
