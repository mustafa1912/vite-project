import React from 'react';
import Image from 'next/image';

// Import local optimized image that exists in assets
import blogThumb from '../../assets/img/dashboed1_result.webp';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  image: any;
  date: string;
  category: string;
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How to Own Your Audience by Creating an Email List",
    excerpt: "Building an email list is the single most effective way to protect your brand from algorithm changes and connect directly with your core audience...",
    url: "#",
    image: blogThumb,
    date: "14 May 2026",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Top 10 Toolkits for Deep Learning in 2026",
    excerpt: "An in-depth review of the leading deep learning libraries and developer toolkits that are powering modern artificial intelligence applications...",
    url: "#",
    image: blogThumb,
    date: "02 April 2026",
    category: "AI & Tech",
  },
  {
    id: 3,
    title: "Everything You Need to Know About Web Accessibility (a11y)",
    excerpt: "Web accessibility ensures that people of all abilities can perceive, understand, navigate, and interact with digital content. Learn key principles...",
    url: "#",
    image: blogThumb,
    date: "25 March 2026",
    category: "Accessibility",
  },
  {
    id: 4,
    title: "How to Inject Humor & Comedy Into Your Brand Identity",
    excerpt: "Humor is a powerful catalyst for human connection. In modern marketing, aligning comedy with your brand voice can build unbreakable client loyalty...",
    url: "#",
    image: blogThumb,
    date: "19 February 2026",
    category: "Branding",
  },
  {
    id: 5,
    title: "Women in Web Design: Achieving Enterprise SaaS Success",
    excerpt: "Celebrating the revolutionary designers and engineering leaders who are paving the way in standardizing accessible UX interfaces in global enterprise platforms...",
    url: "#",
    image: blogThumb,
    date: "08 January 2026",
    category: "Design",
  },
  {
    id: 6,
    title: "Evergreen versus Topical Content: A Developer's SEO Overview",
    excerpt: "Maximizing organic discovery requires a careful balance between trending topics and timeless, high-value technical resources. Here is the perfect mix...",
    url: "#",
    image: blogThumb,
    date: "21 December 2025",
    category: "SEO",
  },
];

export default function BlogPage() {
  return (
    <section className="blog at-top" aria-labelledby="blog-title">
      {/*<!-- Page Title Starts -->*/}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <h1 id="blog-title">my <span>blog</span></h1>
        <span className="title-bg" aria-hidden="true">posts</span>
      </section>
      {/*<!-- Page Title Ends -->*/}

      {/*<!-- Main Content Starts -->*/}
      <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-below">
        <div className="container">
          <div className="row">
            {/*<!-- Articles Starts -->*/}
            {POSTS.map((post) => (
              <article 
                key={post.id} 
                className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
                aria-label={`Blog post: ${post.title}`}
              >
                <div className="post-container rounded overflow-hidden">
                  <div className="post-thumb position-relative overflow-hidden">
                    <a href={post.url} className="d-block" tabIndex={-1}>
                      <Image
                        src={post.image}
                        alt={`Thumbnail for ${post.title}`}
                        className="img-fluid post-thumb-img"
                        placeholder="blur"
                      />
                    </a>
                  </div>
                  <div className="post-content p-4">
                    <div className="entry-meta open-sans-font mb-2 d-flex gap-3 text-uppercase">
                      <span className="post-date">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        {post.date}
                      </span>
                      <span className="post-cat">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        {post.category}
                      </span>
                    </div>
                    <div className="entry-header">
                      <h2 className="h5 font-weight-bold entry-title">
                        <a href={post.url} className="text-light">
                          {post.title}
                        </a>
                      </h2>
                    </div>
                    <div className="entry-content open-sans-font">
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            {/*<!-- Articles Ends -->*/}

            {/*<!-- Pagination Starts -->*/}
            <nav className="col-12 mt-4" aria-label="Blog posts pagination">
              <ul className="pagination justify-content-center mb-0 list-unstyled d-flex gap-2">
                <li className="page-item active">
                  <a className="page-link rounded" href="#" aria-current="page">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded" href="#">3</a>
                </li>
              </ul>
            </nav>
            {/*<!-- Pagination Ends -->*/}
          </div>
        </div>
      </section>
    </section>
  );
}
