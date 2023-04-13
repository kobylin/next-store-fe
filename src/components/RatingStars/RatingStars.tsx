import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "./RatingStars.module.css";

export default function RatingStars({ rating }: { rating: number }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<StarFilled key={i} />);
    } else {
      stars.push(<StarOutlined key={i} />);
    }
  }

  return (
    <div className={styles.main}>
      {stars}
      {rating}
    </div>
  );
}
