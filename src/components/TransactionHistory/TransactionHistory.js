import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import { Head, LineTR, LineTh, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({transactions}) => {
    return (
        <Box as="table" bg="white" m="0 auto" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)" borderRadius="normal" width="25%">

        <Head>
            <LineTR>
            <LineTh>Type</LineTh>
            <LineTh>Amount</LineTh>
            <LineTh>Currency</LineTh>
            </LineTR>
        </Head>

        <Body>
        { transactions.map(transaction => <TransactionHistoryItem key={transaction.id} 
            type={transaction.type} 
            amount={transaction.amount} 
            currency={transaction.currency}/>)}
        </Body>
    </Box>
    )
}

TransactionHistory.prototype = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
        )
    )
};