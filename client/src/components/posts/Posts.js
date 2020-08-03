import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Forum</h1>
      <p className='lead'>
        <i className='fas fa-users'></i> Welcome to the femBOSS Network!
      </p>
      <div className='posts'>
          {posts.map(post => (
              <PostItem key={post._id} post={post} />
          ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

// mapStateToProps to get the post state
export default connect(mapStateToProps, { getPosts })(Posts);
