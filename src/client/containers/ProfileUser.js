 import React             from 'react';
 import { connect }       from 'react-redux';
 import { fetchUser }     from '../actions'
 import ProfileUserReview from '../components/ProfileUserReview'

 class UserProfile extends React.Component {

  componentWillMount() {
    this.props.fetchUser(this.props.params.email)
  }

  render() {
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <div className="profile-bg">
            <img src={ this.props.user.image } className="profile-img" alt="" />
            <div style={{ 'marginTop': '40px' }}></div>
            <h2>{this.props.user.firstName + ' ' + this.props.user.lastName}</h2>
            <div style={{ 'marginTop': '40px' }}></div>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating">star</i>
            <div style={{ 'marginTop': '40px' }}></div>
              <div className="row">
                <div className="col-md-4 offset-md-1">
                  <span title="Rates"><i className="material-icons profile-icon">attach_money</i></span>
                  <p>$30/hr</p>
                </div>
                <div className="col-md-2 hidden-sm-down" style={{ 'textAlign': 'center' }}>
                  <div className="vr"></div>
                </div>
                <div className="col-md-4">
                  <span title="Volunter Badges"><i className="material-icons profile-icon">stars</i></span>
                </div>
              </div>
          </div>

          <div style={{ 'marginTop': '40px' }}></div>

          <div className="profile-panel">
            <h3>Description</h3>
            <hr />
            <p>{this.props.user.selfDescription}</p>
          </div>

          <div style={{ 'marginTop': '40px' }}></div>

          <div className="container-fluid profile-panel">
            <h3>Reviews</h3>
            <hr />
            { this.props.user.reviews ? ( this.props.user.reviews.map((review, key) => {
              return (
                <ProfileUserReview review={ review } key={ key } />
              )
            }) ) : (<div></div>) }
          </div>
        </div>
      );
    } else {
      return <div style={{ 'marginTop': '120px', 'marginLeft': '20px', 'fontSize': '15px' }}>Loading...</div>
    }
  }
}

var mapStateToProps = function({ user }) {
  return { user };
};

export default connect(mapStateToProps, { fetchUser })(UserProfile);

//         <div style={{ 'marginTop': '40px' }}></div>
// <div className="profile-panel">
//           <h3>Reviews</h3>
//           <hr />
//           <div className="row container-fluid">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="review">
//                 <div className="col-md-3 col-lg-2 container-fluid review-profile">
//                   <img src="http://placehold.it/100x100" className="profile-img" alt="" />
//                   <div className="review-username">Username</div>
//                 </div>
//                 <hr className="review-line-sm" />
//                 <div className="col-md-9 col-lg-10 review-content">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </div>
//                 <div className="clearfix"></div>
//               </div>
//             </div>
//           </div>
//         </div>