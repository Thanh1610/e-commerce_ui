import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/redux/slides/counterSlide';
import styled from 'styled-components';

const Button = styled.button({
    background: 'green',
});

export function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
