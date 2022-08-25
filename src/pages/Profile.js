import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  return (
    <>
      <Header statusButton={ false } pageTitle="Profile" />
      <section>
        <h1 data-testid="profile-email">{ email }</h1>

        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>

        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>

        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>

      </section>
      <Footer />
    </>
  );
}
