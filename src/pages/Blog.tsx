import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          "authorName": author->name,
          "categories": categories[]->title
        }`
      )
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-4 mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground uppercase">
              PolyNeo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The latest news, technical articles, and innovations in the world of advanced polymer materials.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center">
              <Search className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-medium text-foreground">No posts found</h3>
              <p className="text-muted-foreground mt-2">
                We're currently setting up our CMS. Check back later for new articles!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug.current}`}>
                    <Card className="h-full overflow-hidden bg-card border-white/5 hover:border-brand-orange/50 transition-colors group cursor-pointer hover:shadow-xl hover:shadow-brand-orange/5">
                      <div className="aspect-[16/9] w-full overflow-hidden relative bg-muted">
                        {post.mainImage ? (
                          <img
                            src={urlFor(post.mainImage).width(600).height(400).url()}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary">
                            <span className="text-muted-foreground opacity-50">No Image</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories?.map((cat: string) => (
                            <span key={cat} className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-sm">
                              {cat}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                          <span>{post.authorName || 'PolyNeo Team'}</span>
                          <span>
                            {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
