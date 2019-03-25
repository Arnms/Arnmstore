import React from 'react';
import { Link } from 'gatsby';
import Comments from './Comments';
import Content from './Content';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>

      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} />
      </div>

      <div className={styles['post__footer']}>
        <Tags tags={tags} tagSlugs={tagSlugs} />
      </div>

      <div className={styles['post__underline']}></div>

      <Link className={styles['post__home-button']} to="/">Home</Link>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
