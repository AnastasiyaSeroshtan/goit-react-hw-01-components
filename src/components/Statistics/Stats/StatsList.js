import PropTypes from 'prop-types';
import { StatsItem } from "./StatsItem";
import { StatsUl} from "./StatsList.styled";

export const StatsList = ({stats}) => {
    return (
        <StatsUl>
            { stats.map(item => ( <StatsItem key={item.id} label={item.label} percentage={item.percentage} />))}
        </StatsUl>
    )
}

StatsList.prototype = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
        )
    )
}