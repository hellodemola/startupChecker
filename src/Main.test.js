/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './Main'
import { stageData } from '../src/utilis/data';

jest.spyOn(window.localStorage, 'removeItem')
describe('<Main />', () => {
    const initialState = {task:
    {startupTasks: stageData
}
};
    const mockStore = configureStore();
    let store;
    test('WHEN_IS_NOT_COMPLETED_SHOW_KEEP_BUILDING_YOUR_HUSTLE', () => {
    store = mockStore(initialState);
    render(
<Provider store={store}>
<Main  />
</Provider>
)
    const title = screen.getByText(/Keep building your hustle/i);
    expect(title).toBeInTheDocument();
    })

})
