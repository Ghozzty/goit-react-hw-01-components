import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return(
            <table className={css.transactionHistory}>
        <thead className={css.head}>
            <tr>
            <th className={css.headCell}>Type</th>
            <th className={css.headCell}>Amount</th>
            <th className={css.headCell}>Currency</th>
            </tr>
        </thead>

        {items.map(({id, type, amount, currency}) => (
          <tbody key={id} className={css.item}>
          <tr >
            <td className={css.itemCell}>{type}</td>
            <td className={css.itemCell}>{amount}</td>
            <td className={css.itemCell}>{currency}</td>
          </tr>
        </tbody>
        ))}

        </table> 
)};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
}))
};

