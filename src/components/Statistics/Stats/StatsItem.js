import PropTypes from 'prop-types';
import { StatsLi, StatsLabel, StatsPercentage } from './StatsItem.styled';

export const StatsItem = ({label, percentage}) => {
    return (
        <StatsLi>
         <StatsLabel>{label}</StatsLabel>
         <StatsPercentage>{percentage}%</StatsPercentage>
        </StatsLi>
    )
}

StatsItem.prototype = {
    label: PropTypes.string.isRequired,
    performance: PropTypes.number.isRequired,
}

