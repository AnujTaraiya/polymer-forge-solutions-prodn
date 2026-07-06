import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Tailwind configurations for Portable Text rendering
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(800).url()}
          className="my-8 rounded-xl object-cover shadow-lg mx-auto"
        />
      )
    },
    dataTable: ({ value }: any) => {
      if (!value?.headers || !value?.rows) return null;
      return (
        <div className="my-8 overflow-x-auto rounded-xl border border-white/10 shadow-lg">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-brand-orange/15 border-b border-brand-orange/30">
                {value.headers.map((h: string, i: number) => (
                  <th key={i} className="px-5 py-3 font-bold text-brand-orange uppercase tracking-wider text-xs whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.map((row: string[], ri: number) => (
                <tr key={ri} className={`border-b border-white/5 ${ri % 2 === 0 ? 'bg-card/50' : 'bg-card/30'} hover:bg-brand-orange/5 transition-colors`}>
                  {row.map((cell: string, ci: number) => (
                    <td key={ci} className={`px-5 py-3 ${ci === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-12 mb-4 text-foreground">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-foreground">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg text-muted-foreground leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-orange pl-6 py-2 my-6 italic text-xl text-foreground bg-brand-orange/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-lg text-muted-foreground space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-lg text-muted-foreground space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-brand-orange hover:underline underline-offset-4 decoration-2">
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-bold text-foreground">{children}</strong>,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          mainImage,
          body,
          "authorName": author->name,
          "categories": categories[]->title
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link to="/blog">
            <Button variant="outline" className="gap-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />
      
      <main className="flex-grow pb-20">
        {/* Full-width Hero Banner */}
        <div className="relative w-full h-[70vh] min-h-[550px] flex items-end pb-32 pt-40">
          {post.mainImage ? (
            <div className="absolute inset-0 z-0">
              <img
                src={urlFor(post.mainImage).width(1920).height(1080).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {/* Layer 1: Dark film for text readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top,
                    rgba(0,0,0,0.7) 0%,
                    rgba(0,0,0,0.5) 40%,
                    rgba(0,0,0,0.25) 70%,
                    rgba(0,0,0,0.1) 100%
                  )`
                }}
              />
              {/* Layer 2: Ultra-smooth bottom diffusion into page background */}
              <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                  height: '60%',
                  background: `linear-gradient(to top,
                    hsl(var(--background)) 0%,
                    hsl(var(--background) / 0.98) 2%,
                    hsl(var(--background) / 0.94) 5%,
                    hsl(var(--background) / 0.88) 8%,
                    hsl(var(--background) / 0.8) 12%,
                    hsl(var(--background) / 0.71) 16%,
                    hsl(var(--background) / 0.6) 21%,
                    hsl(var(--background) / 0.5) 26%,
                    hsl(var(--background) / 0.4) 32%,
                    hsl(var(--background) / 0.3) 39%,
                    hsl(var(--background) / 0.22) 46%,
                    hsl(var(--background) / 0.15) 54%,
                    hsl(var(--background) / 0.1) 62%,
                    hsl(var(--background) / 0.06) 72%,
                    hsl(var(--background) / 0.03) 83%,
                    hsl(var(--background) / 0) 100%
                  )`
                }}
              />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-slate-900" />
          )}

          {/* Hero Content overlaid on image */}
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0 max-w-4xl">
                <Link to="/blog" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories?.map((cat: string) => (
                    <span key={cat} className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm border border-brand-orange/30">
                      {cat}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase leading-tight drop-shadow-lg break-words hyphens-auto">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-white/80 font-medium">
                  {post.authorName && (
                    <div className="flex items-center gap-2">
                      <span>{post.authorName}</span>
                    </div>
                  )}
                  {post.authorName && <span className="opacity-50">•</span>}
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="mt-8 flex-shrink-0 group relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                aria-label="Copy link to clipboard"
                title="Copy link to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400 transition-all" />
                ) : (
                  <Share2 className="w-5 h-5 text-white/80 group-hover:text-white transition-all" />
                )}
                {copied && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-green-400 font-medium whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="container mx-auto px-4 max-w-4xl mt-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
