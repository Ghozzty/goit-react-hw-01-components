import PropTypes from "prop-types";
import css from './Statistics.module.css'
  
export const Statistics = ({title, stats}) => {
    return(
 <section className={css.statistics}>
    {title && (
        <h2 className={css.title}>{title}</h2>
      )}
    <ul className={css.itemList}>
        {stats.map(user => (
        <li key={user.id} className={css.item} style={{backgroundColor: getRandomHexColor()}} >
            <span className={css.item}>{user.label}</span>
            <span className={css.percentage}>{user.percentage}</span>
  </li>))}
    </ul>
</section>)};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}))
};



