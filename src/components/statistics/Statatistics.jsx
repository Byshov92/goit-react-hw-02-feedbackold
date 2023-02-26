import { PropTypes } from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div>
        <h2>Statistics</h2>
        <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>total:{total}</li>
            <li>positivePercentage:{positivePercentage}</li>
        </ul>
    </div>
    );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};