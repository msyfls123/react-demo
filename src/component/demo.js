import React, { Component, PropTypes } from 'react'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      willUpdate: false
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      willUpdate: true
    })
  }
  componentDidUpdate(){
    if(!this.state.willUpdate) return
    setTimeout(() => {
      this.setState({
        willUpdate: false
      })
    }, 2000)
  }
  render() {
    const {displayNum, couldPost, resultText, add_num, sub_num, post_num} = this.props
    return (
      <div>
      <table className='table table-bordered table-zebra demo'>
        <tbody>
          <tr>
            <td> His extra Time </td>
            <td>
              <code> {displayNum} </code>
            </td>
            <td>
              <span
                href='javascript:;'
                className = {'help-inline ' + (resultText ?
                  (this.state.willUpdate ? (couldPost? 'short' : 'long') :
                  'fade' ): '')}>
                 {resultText || '你们总想搞个大新闻'}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type = "button"
                className = {couldPost ? 'btn btn-large' : 'btn btn-disabled btn-large'}
                disabled = {couldPost? '' : 'disabled'}
                value = {couldPost ? '+1' : '...'}
                onClick = {add_num.bind(null,1)} />
            </td>
            <td>
              <input
                type = "button"
                className = {couldPost ? 'btn btn-large' : 'btn btn-disabled btn-large'}
                disabled = {couldPost? '' : 'disabled'}
                value = {couldPost ? '-1' : '...'}
                onClick = {sub_num.bind(null,1)} />
            </td>
            <td>
              <input
                type = "button"
                className = {couldPost ? 'btn btn-green' : 'btn btn-disabled'}
                onClick = {this.handleClick}
                disabled = {couldPost? '' : 'disabled'}
                value = {couldPost ? 'Post' : '...'}
                onClick = {post_num} />
            </td>
          </tr>
        </tbody>
      </table>
      <div id='lists'>
        <ul className='list-col list-col5 demo-pic'>
          <li className={ displayNum%2!==0 ? 'active' : ''}>odd</li>
          <li className={ displayNum&&(displayNum%2==0) ? 'active' : ''}>even</li>
          <li className={ !displayNum ? 'active' : ''}>zero</li>
        </ul>
      </div>
      </div>
    )
  }
}

Demo.propTypes = {
  displayNum: PropTypes.number.isRequired,
  couldPost: PropTypes.bool.isRequired,
  resultText: PropTypes.string.isRequired,
  add_num: PropTypes.func.isRequired,
  sub_num: PropTypes.func.isRequired,
  post_num: PropTypes.func.isRequired
}

export default Demo
