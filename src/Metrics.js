import { useSelector } from 'react-redux';

import * as classes from './styles/Metrics.module.scss';

const Metrics = () => {
  const counter = useSelector(state => state.counter);

  const numEvents = counter.events.length;

  const greenPercent = (counter.up / numEvents) * 100;
  const redPercent = (counter.down / numEvents) * 100;

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <h2>
          {Math.ceil(greenPercent) || 0}% / {Math.floor(redPercent) || 0}%
        </h2>
        <div className={classes.barContainer}>
          {numEvents === 0 ? (
            <div className={classes.gray} style={{ width: '100%' }} />
          ) : (
            <>
              <div className={classes.green} style={{ width: `${greenPercent}%` }} />
              <div className={classes.red} style={{ width: `${redPercent}%` }} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
