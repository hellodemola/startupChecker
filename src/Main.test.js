import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Main from './Main'

jest.spyOn(window.localStorage, 'removeItem')
describe('<Main />', () => {

    test('WHEN_IS_NOT_COMPLETED_SHOW_KEEP_BUILDING_YOUR_HUSTLE', () => {

    render(<Main />)
    const title = screen.getByLabelText('Keep building your hustle');
    expect(title).toBeInDocument();
    })

})
