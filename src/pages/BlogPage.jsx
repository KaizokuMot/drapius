import React from 'react';
import ContactForm from '../components/home/ContactForm';
import './pages.css';
import { executiveSummary, contactInfo, legalName } from '../content/drapiusContent';
import { blogDummyPerspectives, blogDummyUpdates } from '../content/blogDummy';
import STORIES from '../assets/stories.png';
import DIGITAL from '../assets/digital.png';
import GRAIN from '../assets/grain.png';
import MARKET from '../assets/market.png';
import CHANGE from '../assets/change.png';
import OPEN from '../assets/open.png';
import FRESH from '../assets/fresh.png';
import VENDOR from '../assets/vendor.png';

const THUMB_PERSPECTIVES = [STORIES, DIGITAL, GRAIN, MARKET];
const THUMB_UPDATES = [CHANGE, OPEN, FRESH, VENDOR];

function BlogCardGrid({ posts, thumbs }) {
  return (
    <div className="blog-grid">
      {posts.map((post, i) => (
        <article key={post.title} className="page-blog-card">
          <div className="page-blog-card__thumb">
            <img src={thumbs[i]} alt="" />
          </div>
          <div className="page-blog-card__body">
            <p className="page-blog-card__date">{post.date}</p>
            <h3 className="page-blog-card__title">{post.title}</h3>
            <p className="page-blog-card__excerpt">{post.excerpt}</p>
            <span className="page-blog-card__link" tabIndex={0} role="link">
              Read article
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <section className="section bg-white pt-28 md:pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Insights &amp; News</h4>
            <p className="text-text-muted text-lg leading-relaxed">{executiveSummary[2]}</p>
          </div>
        </div>
      </section>

      <section className="section blog-page-muted-section">
        <div className="container">
          <div className="blog-section-head">
            <h2>Perspectives</h2>
            <p>Long-form notes on capital, branding, and implementation—placeholder cards for upcoming articles.</p>
          </div>
          <BlogCardGrid posts={blogDummyPerspectives} thumbs={THUMB_PERSPECTIVES} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="blog-section-head">
            <h2>Updates</h2>
            <p>Shorter field notes, HQ updates, and partner recaps—sample layout only.</p>
          </div>
          <BlogCardGrid posts={blogDummyUpdates} thumbs={THUMB_UPDATES} />
        </div>
      </section>
    </>
  );
}
