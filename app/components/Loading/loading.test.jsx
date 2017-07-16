import React from 'react'
import { shallow } from 'enzyme'
import CircularProgress from 'material-ui/CircularProgress'

import Loading from './loading'

describe('<Loading />', () => {
    it('should show CircularProgress', () => {
        expect(shallow(<Loading />).find(CircularProgress)).toHaveLength(1)
    })
})
