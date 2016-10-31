import { connect } from 'react-redux'
import * as mapActionToProps from '../action/demo'
import DemoCom from '../component/demo'
import {Help, About} from '../component/other'
import SVG from '../component/svg'

const mapStateToProps = state => state
const Demo = connect(mapStateToProps, mapActionToProps)(DemoCom)

export {
  Demo,
  SVG,
  Help,
  About
}
