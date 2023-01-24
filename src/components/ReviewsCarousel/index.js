import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="bg-container">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const currentReviewDetails = reviewsList[index]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
