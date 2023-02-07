
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { renderHook } from '@testing-library/react-hooks';
import usePhaseComp from './usePhaseComp'
import {
singleFoundationData,
singlePendingData,
singleDataThird,
} from '../../utilis/foundation.data';
import '@testing-library/jest-dom';

describe('Foundation <usePhaseComp />', () => {
    test('NO_COMPLETED_TASK_FOR_FOUNDATION_RETURNS_NOT_STARTED',() => {
        const {result} = renderHook(() => usePhaseComp(singleFoundationData));
        expect(result?.current?.isTasksCompleted).toBe('Not Started');
    })

     test('1_COMPLETED_TASK_of_2_FOR_FOUNDATION_RETURNS_IN_PROGRESS',() => {
        const {result} = renderHook(() => usePhaseComp(singlePendingData));
        expect(result?.current?.isTasksCompleted).toBe('In Progress');
    })

    test('COMPLETED_TASK_of_2_FOR_FOUNDATION_RETURNS_IN_*',() => {
        const {result} = renderHook(() => usePhaseComp(singleDataThird));
        expect(result?.current?.isTasksCompleted).toMatch(/completed/i);
    })

    // TEST FOR NO LIST
})
