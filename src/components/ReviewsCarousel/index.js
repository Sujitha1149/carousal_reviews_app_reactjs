import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
    totalCount: 0,
  }

  componentDidMount() {
    const {reviewsList} = this.props
    this.setState({
      totalCount: reviewsList.length,
    })
  }

  onClickingLeftArrow = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({
        count: 0,
      })
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  onClickingRight = () => {
    const {count, totalCount} = this.state
    if (count === totalCount - 1) {
      this.setState({
        count: totalCount - 1,
      })
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="card-container">
          <div className="arrow-cont">
            <button
              type="button"
              className="button"
              data-testid="leftArrow"
              onClick={this.onClickingLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-size"
              />
            </button>
          </div>
          <div className="profile-cont">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p className="prof-des">{companyName}</p>
            <p className="prof-des">{description}</p>
          </div>
          <div className="arrow-cont">
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.onClickingRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
