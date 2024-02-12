<section>
  <form>
    <h1> Word lid</h1> 
    <fieldset>
      <legend>Persoonlijke Gegevens</legend>
      <label for="Geslacht">Geslacht</label>
      <input id="Geslacht" required type="text">
  
      <label for="Voormaan">Voornaam*</label>
      <input id="Voornaam" required type="text">
      <p class="feedback">👍</p>

      <label for="Tussenvoegsel">Tussenvoegsel</label>
      <input id="Tussenvoegsel" >
      <p class="feedback">👍</p>

      <label for="Achternaam">Achternaam*</label>
      <input id="Achternaam" required type="text">
      <p class="feedback">👍</p>

      <label for="Geboortedatum">Geboortedatum*</label>
      <input id="Geboortedatum" required type="text">
      <p class="feedback">👍</p>
     </fieldset>
  
     <fieldset>
        <legend>Contact Gegevens</legend>
        <label for="Adres">Adres (straat en huisnummer)*</label>
        <input id="Adres" required type="text">
    
        <label for="Postcode">Postcode (formaat: 1000 AA)*</label>
        <input id="Postcode" required type="text">
        <p class="feedback">👍</p>
  
        <label for="Woonplaats">Woonplaats*</label>
        <input id="Woonplaats" required type="text">
        <p class="feedback">👍</p>
  
        <label for="Emailadres">E-mailadres*</label>
        <input id="Emailadres" required type="text">
        <p class="feedback">👍</p>

        <label for="Emailadres">Bevestiging E-mailadres*</label>
        <input id="Emailadres" required type="text">
        <p class="feedback">👍</p>
  
        <label for="Telefoon">Telefoon*</label>
        <input id="Telefoon" required type="text">
        <p class="feedback">👍</p>
  
       </fieldset>

       <fieldset>
        <legend>Automatische incasso</legend>
        <label for="IBAN">IBAN (voorbeeld: NL11 INGB 1234 5678 90)</label>
        <input id="IBAN" required type="text">
    
        <label for="Benaming">Op naam van</label>
        <input id="Benaming" required type="text">
        <p class="feedback">👍</p>
  
       </fieldset>

<fieldset>
    <a href="/" >WORD LID</a>
  </fieldset>
  </form>

</section>

  <style>



@media only screen and (max-width: 600px) {

}

section{
  min-height: 100vh;
  margin-bottom: 2rem;
}

h1{
  padding-left: .5rem;
}

form {
  display:flex;
  flex-direction:column;
  transition: all .2s;
  max-width:30rem;
  margin:0 auto;
  overflow:hidden;
}
form:invalid {
  background: var(--oba-light-blue);
}
fieldset {
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-bottom: 1em;
  border:none;
  transition: all .2s;
  padding:1em 1em 0;
  position: relative;
  background-color: var(--oba-red);
  color: var(--primary-accent-color);
  border-radius: 1em;
}
fieldset + fieldset {
  opacity:0;
  transition:.25s .25s;
  transform:translateX(-120%)
}
fieldset:valid + fieldset {
  opacity:1;
  transform:translateX(0)
}
fieldset:valid p {
  display:block;
  color: White;
  background:seaGreen;
}

fieldset:invalid p{
  display:none;
}
legend {
  font-weight:bold;
  transform: translateY(1.5rem);
  font-size: 1.5em;
  margin-bottom: 2rem;
  position: relative;
  z-index:5;
  color: var(--primary-dark-color);
}

label {
    font-weight: bolder;
}
input {
  border-color:#000;
  padding:.25em;
  font-size: 1.25em;
  margin-bottom: 1em;
  width:100%;
  transition:all .1   s;
  z-index:2;
  border-radius: 0.5em;
}
input:valid {
  border-color:seaGreen;
  background-color: rgb(232, 245, 233);
} 
input:invalid {
  border-color: var(--oba-ligh);
  /* background: rgba(255, 224, 13, .2); */
}
input:focus {
  transform: scale(1.01, 1.01);
  outline:none;
  box-shadow:0 0 0 3px rgba(0,0,0,.25)
}

input:disabled {
  border-color:#eee;
  background-color: #f9f9f9;
}
input::placeholder {
  color:rgba(0,0,0,.25);
  font-style:italic;
}

.feedback {
  position: absolute;
  top: -2em;
  right: 1em;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 50%;
  transform:translateY(-3rem);
  z-index:10;
  transition:.25s;
}
fieldset:valid .feedback {
  transform:translateY(0)
}

a:link, a:visited {
  background-color: var(--primary-accent-color);
  border-radius: 0.5em;
  color: var(--primary-light-color);
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
}

  </style>
