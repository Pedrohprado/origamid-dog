/* eslint-disable react/prop-types */
import { UserContext } from '../../Context/userContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import React from 'react';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        ref={commentsSection}
        className=' my-2 px-2 py-1 h-full w-full overflow-y-auto break-words'
      >
        {comments.map((comment) => (
          <li className=' mb-2 leading-5' key={comment.comment_ID}>
            <b>{comment.comment_author}</b>:
            <span> {comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
