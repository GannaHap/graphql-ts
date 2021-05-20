import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './Dashboard.css';
import CardArticle from '../../components/CardArticle/CardArticle';

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
      body
      creaetedAt
      user {
        name
      }
    }
  }
`;

const Dashboard = () => {
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

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const posts: APosts[] = data.posts; //Data Array

  const renderCards = () => {
    return posts.map((card) => {
      return <CardArticle key={card.id} card={card} />;
    });
  };

  return (
    <div className="dashboard">
      <h5>Dashboard</h5>
      <div className="line"></div>

      <div className="board-article">{renderCards()}</div>
    </div>
  );
};

export default Dashboard;
