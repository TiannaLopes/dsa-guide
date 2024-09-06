import styles from '../styles/TopicCard.module.css';

interface TopicCardProps {
  title: string;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TopicCard;
