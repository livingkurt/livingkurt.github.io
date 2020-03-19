import React from "react";
import "./page_styles/pages.css"
import BlogPost from "../Blog_Post/Blog_Post"
import blog_posts from "../../utils/blog_posts.json"
import "./page_styles/media_queries.css"
import "./page_styles/animations.css"

function Blog() {
  return (
    <div>
      <h1 id="projects_h1" className="text-center">Blog</h1>
      <div>
        <div id="project_div">
          {blog_posts.map(blog_post => (
            <BlogPost key={blog_post.id} name={blog_post.name} image={blog_post.image} image_gallery={blog_post.image_gallery} route={blog_post.route} description={blog_post.description} url={blog_post.url} github_url={blog_post.github} date_created={blog_post.date_created} date_completed={blog_post.date_completed} technologies={blog_post.technologies} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
