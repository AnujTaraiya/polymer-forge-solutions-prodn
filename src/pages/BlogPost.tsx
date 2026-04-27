import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
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
    }
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
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-16 pt-32">
          {post.mainImage ? (
            <div className="absolute inset-0 z-0">
              <img
                src={urlFor(post.mainImage).width(1920).height(1080).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {/* Black gradient film for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-slate-900" />
          )}

          {/* Hero Content overlaid on image */}
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase leading-tight drop-shadow-lg">
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
