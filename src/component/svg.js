import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

const colorList = ['r', 'g', 'b', 'a']
function getColor(tcolor){
  const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'],
        colorArr = [],
        color = tcolor.split(',')
  for (var i = 0; i < color.length; i++) {
    const num1 = Math.floor(color[i]/16),
          num2 = Math.floor(color[i]%16)
    if(i<3) colorArr.push(arr[num1])
    colorArr.push( i<3 ? arr[num2] : '/'+Number(color[3]).toFixed(1))
  }
  return colorArr.join('')
}

class SVG extends Component {
  constructor(props) {
    super(props)
    this.change=this.change.bind(this)
    this.changeText=this.changeText.bind(this)
    this.handleColor=this.handleColor.bind(this)
    this.handlePos=this.handlePos.bind(this)
    this.state={
      len: 50,
      text: '这里是SVG文字',
      x: 0,
      y: 20,
      r: 51,
      g: 153,
      b: 204,
      a: 1.0,
    }
  }
  change(e) {
    const num = e.target.value
    this.setState({
      len: num
    })
  }
  changeText(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleColor(e){
    const el = e.target, tempRGBA = {}, color = el.getAttribute('color')
    if(color==='a') {
      tempRGBA.a = parseFloat(el.value/100)
    } else {
      tempRGBA[color] = el.value
    }
    this.setState(tempRGBA)
  }
  handlePos(e){
    const el = e.target, tempPos = {}, dir = el.getAttribute('dir')
    tempPos[dir] = el.value
    this.setState(tempPos)
  }
  componentDidMount() {
    this.svg = findDOMNode(this.refs.svg),
    this.img = findDOMNode(this.refs.img),
    this.canvas = findDOMNode(this.refs.canvas),
    this.tempImg = new Image(),
    this.ctx = this.canvas.getContext('2d')
  }
  componentDidUpdate() {
    if(this.isPainting) return
    const svgURL = 'data:image/svg+xml;utf8,' + this.svg.outerHTML
    this.img.setAttribute('src', svgURL)
    this.tempImg.src = svgURL
    this.ctx.clearRect(0, 0, 200, 200)
    this.ctx.drawImage(this.tempImg,0,0,200,200,0,0,200,200)
    setTimeout(() => {this.isPainting = false}, 100)
    this.isPainting = true
  }
  render() {
    const circleColor = colorList.map(d => this.state[d]).join(',')
    return (
      <div>
        <ul className='svg'>
          <li>
          <svg width='200' height='200' ref='svg' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='100' cy='100' r={this.state.len} stroke='black' strokeWidth='2' fill={'rgba('+ circleColor + ')'}/>
            <text x={this.state.x} y={this.state.y}>{this.state.text}</text>
          </svg>
          </li>
          <li><img width='200' height='200' ref='img' src=''/></li>
          <li><canvas width='200' height='200' ref='canvas' /></li>
        </ul>
        <form className='form-horizontal'>
          <div className='field-group'>
            <label className="field-label">Radius</label>
            <div className="fields-inline">
              <input type="range" min="1" max="100" className="col3" onChange={this.change}/>
            </div>
          </div>
          <div className='field-group'>
            <label className="field-label">Text</label>
            <div className="fields-inline">
              <input type="text" value={this.state.text} onChange={this.changeText}/>
            </div>
          </div>
          <div className='field-group'>
            <label className="field-label">Color <br/>{getColor(circleColor)}</label>
            <div className="fields-inline">
              <span className='help-inline'>R&nbsp;</span>
              <input type="range" min="0" max="255" className="col2" color='r' value={this.state.r} onChange={this.handleColor}/>
              <span className='help-inline'>G&nbsp;</span>
              <input type="range" min="0" max="255" className="col2" color='g' value={this.state.g} onChange={this.handleColor}/>
              <span className='help-inline'>B&nbsp;</span>
              <input type="range" min="0" max="255" className="col2" color='b' value={this.state.b} onChange={this.handleColor}/>
              <span className='help-inline'>A&nbsp;</span>
              <input type="range" min="0" max="100" className="col2" color='a' value={this.state.a*100} onChange={this.handleColor}/>
            </div>
          </div>
          <div className='field-group'>
            <label className="field-label">Position</label>
            <div className="fields-inline">
              <span className='help-inline'>X&nbsp;</span>
              <input type="range" min="0" max="200" className="col2" dir='x' value={this.state.x} onChange={this.handlePos}/>
              <span className='help-inline'>Y&nbsp;</span>
              <input type="range" min="0" max="200" className="col2" dir='y' value={this.state.y} onChange={this.handlePos}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SVG
