import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
import * as sinon from 'sinon'

configure({ adapter: new Adapter() })
global.sinon = sinon
global.mount = mount
global.shallow = shallow
