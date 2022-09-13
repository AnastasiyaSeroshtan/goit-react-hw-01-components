import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Header } from "./Header/Header";
import { StatsList } from "./Stats/StatsList";

export const Statistics = ({title, stats}) => {
    return (
        <Box as="section" bg="white" m="0 auto" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)" borderRadius="normal" width="25%" mb={4}>
        {title && <Header title={title}/>}
        <StatsList stats={stats} />
    </Box>
    )
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
};