import React from 'react'
import { connect } from 'react-redux'

// const Posts = ({posts}) => {
class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      postId: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.props.dispatch({
          type: 'LOAD_POSTS',
          payload: json
        })
      })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // alert('submitted', this.state.value)
    console.log('submitted', this.state.value)
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })
    this.setState({postId: this.state.postId + 1})
  }

  render () {
    return (
      <div>
        <h1>
          Posts!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            />
          <button
            type="submit"
            onClick={this.handleSubmit}
            >
            Send it!
          </button>
        </form>
        <ul>
          {this.props.posts.map(post => {
            return(
              <li key={post.id}>{post.title}</li>
              )
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {posts: state.posts}
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Posts)