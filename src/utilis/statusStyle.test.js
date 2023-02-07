import { handleStatusStyleName }from './helpers';
describe('<handleStatusStyleName', () => {
    test('NOT_STARTED_WILL_RETURN_PHASE-CIRCLE', () => {
        const status = handleStatusStyleName('Not Started');
        expect(status).toBe('phase-cirle');
    })

 test('IN_PROGRESS_WILL_RETURN_PHASE-CIRCLE-BLACK', () => {
        const status = handleStatusStyleName('In Progress');
        expect(status).toBe('phase-cirle-black');
    })

// test for completed
 test('COMPLETED_WILL_RETURN_PHASE-CIRCLE-GREEN', () => {
        const status = handleStatusStyleName('Completed');
        expect(status).toBe('phase-cirle-green');
    })

    // test for no status
 test('DEFAULT_WILL_RETURN_PHASE-CIRCLE', () => {
        const status = handleStatusStyleName('Default');
        expect(status).toBe('phase-cirle');
    })
})
