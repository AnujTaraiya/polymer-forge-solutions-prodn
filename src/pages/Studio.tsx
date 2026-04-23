import { Studio } from 'sanity'
import config from '../sanity/sanity.config'
import { useEffect } from 'react'

const SanityStudio = () => {
  useEffect(() => {
    // Inject global styles to reset tailwind/shadcn interventions on Sanity UI if needed
    // Typically Sanity handles its own isolation, but ensuring body scrolling handles ok
    document.body.style.overflow = 'auto'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="h-screen w-full">
      <Studio config={config} />
    </div>
  )
}

export default SanityStudio
