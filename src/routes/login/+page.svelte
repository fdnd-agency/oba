  <section>
  <div>
      <h1>Welkom bij OBA!</h1>
      <h3>Inloggen</h3>
      <form action="/action_page.php">
        <label for="fname">Emailadres</label>
        <input type="text" id="fname" name="email">
        <label for="fname">Wachtwoord</label>
        <input type="text" id="lname" name="password">
        <article>
          <input type="submit1" value="Log in">
          <a href="/signup" type="submit2">Registreer hier</a>
        </article>
      </form>
    </div>
  </section>

<style>
  
  div {
    text-align: center;
    border-radius: 10px;
    background-color: var(--primary-accent-color);
    padding: 2.5rem;
    height: 27rem;
    width: 40rem;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
      text-align: left;
  }

  label{
      display: block;
      margin-bottom: 5px;
  }

  article {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  h1, h3 {
      color: var(--primary-light-color);
  }


  input[type=text] {
    text-align: left;
    width: 100%;
    padding: 20px 20px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #F5F5F5;
  }
  
  input[type=submit1] {
    width: fit-content;
    background-color: var(--primary-dark-color);
    color: var(--primary-light-color);  
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: .9rem;
  }

  label{
    color: var(--primary-light-color);
  }

  a {
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    section{
      scale: .85;
    }
}
    </style>

  
