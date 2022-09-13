import PropTypes from 'prop-types';
import { Line, LineTd, } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <Line>
            <LineTd>{type}</LineTd>
            <LineTd>{amount}</LineTd>
            <LineTd>{currency}</LineTd>
        </Line>
    )
}

TransactionHistoryItem.prototype = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}