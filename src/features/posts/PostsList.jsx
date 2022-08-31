import { useSelector }  from 'react-redux'
import PostsExcerpt     from './PostsExcerpt'
import { selectPostIds, getPostsStatus, getPostsError } from './postsSlice'

const PostsList = () => {
  const postsError  = useSelector(getPostsError)
  const postsStatus = useSelector(getPostsStatus)
  const orderedPostIds = useSelector(selectPostIds)

  let content
  if (postsStatus === 'loading') content = <p>"Loading..."</p>
  else if (postsStatus === 'succeeded') {
    content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
  } else if (postsStatus === 'failed') content = <p>{postsError}</p>

  return (
    <section>
        {content}
    </section>
  )
}

export default PostsList
