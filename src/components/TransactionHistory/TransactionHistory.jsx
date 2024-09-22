import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.headerTable}>Type</th>
          <th className={styles.headerTable}>Amount</th>
          <th className={styles.headerTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={styles.mainTable}>{item.type}</td>
            <td className={styles.mainTable}>{item.amount}</td>
            <td className={styles.mainTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
