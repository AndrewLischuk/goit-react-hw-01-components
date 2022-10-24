import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th className={styles.itemHead}>Type</th>
          <th className={styles.itemHead}>Amount</th>
          <th className={styles.itemHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ type, amount, currency }) => (
          <tr className={styles.tableBody}>
            <td className={styles.itemBody}>
              {type[0].toUpperCase() + type.slice(1)}
            </td>
            <td className={styles.itemBody}>{amount}</td>
            <td className={styles.itemBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
