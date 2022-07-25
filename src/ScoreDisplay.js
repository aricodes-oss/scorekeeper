import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';

import { increment, decrement, undo, reset } from './store/counter';

import Metrics from 'Metrics';

import * as classes from './styles/ScoreDisplay.module.scss';

const ScoreDisplay = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  useHotkeys('=, +, up', () => dispatch(increment()));
  useHotkeys('-, _, down', () => dispatch(decrement()));
  useHotkeys('u, ctrl+z', () => dispatch(undo()));
  useHotkeys('r', () => dispatch(reset()));

  return (
    <>
      <Metrics />
      <div className={classes.container}>
        <div
          className={classNames(classes.half, classes.green)}
          onClick={() => dispatch(increment())}
        >
          <h1>+{counter.up}</h1>
        </div>

        <div
          className={classNames(classes.half, classes.red)}
          onClick={() => dispatch(decrement())}
        >
          <h1>-{counter.down}</h1>
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
