import React, { useEffect, useState } from 'react';

import { selectData } from '~lib/fetch';
import { Api } from './Api';

export type Post = Partial<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;

export const postsUrl = '/posts';
export const api = Api(postsUrl);

export const Posts = () => {
  const [ fetching, setFetching ] = useState(false);
  const [ posts, setPosts ] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      setFetching(true);
      const posts = await api.get<Post[]>('/').then(selectData);
      setPosts(posts);
      setFetching(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {fetching && (
        <div>
          Fetching posts...
        </div>
      )}
      {!fetching && posts.length && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <pre>
                {JSON.stringify(post, null, 2)}
              </pre>
              <a href={`${postsUrl}/${post.id}`} target="_blank">
                <code>Jump to post -></code>
              </a>
            </li>
          ))}
        </ul>
      )}
      {!fetching && !posts.length && (
        <div>
          No posts are available at this time.
        </div>
      )}
    </div>
  );
};
