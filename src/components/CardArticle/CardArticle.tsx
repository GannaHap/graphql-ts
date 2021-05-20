import moment from 'moment';
import './CardArticle.css';

type AUser = {
  name: string;
};

type APosts = {
  id: number;
  title: string;
  body: string;
  creaetedAt: string;
  user: AUser;
};

const CardArticle: React.FC<{ card: APosts }> = ({ card }) => {
  const time = moment(card.creaetedAt).format('MMMM Do YYYY');
  return (
    <div className="card-article">
      <h5>{card.title}</h5>
      <div className="info-writer">
        <span>Penulis: {card.user.name}</span>
        <span>{time}</span>
      </div>
      <p>{card.body}</p>
    </div>
  );
};

export default CardArticle;
