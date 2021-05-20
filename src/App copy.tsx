import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

const MY_QUERY = gql`
  query MyQuery {
    users {
      id
      name
      email
    }
  }
`;

function App() {
  interface ICard {
    id: number;
    name: string;
    email: string;
  }

  const { loading, error, data } = useQuery(MY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const cards: ICard[] = data.users; // Data Array

  // Card Component
  const Card: React.FC<{ card: ICard }> = ({ card }) => {
    return (
      <div>
        <p>{card.name}</p>
        <p>{card.email}</p>
      </div>
    );
  };

  const renderCards = () => {
    return cards.map((card) => {
      return <Card key={card.id} card={card} />;
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      {renderCards()}
    </div>
  );
}

export default App;
