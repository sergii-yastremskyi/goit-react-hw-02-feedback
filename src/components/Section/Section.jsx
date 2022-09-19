import css from './Section.module.css';
import styles from '../shared/shared.module.css';

const Section = ({ title }) => {
  return <h1 className={styles.sectionHeader}>{title}</h1>;
};

export default Section;
