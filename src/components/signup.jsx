import React, { Component } from 'react'


export default class SignUp extends Component {
  render() {
    return (
      
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            id="nom"
            required
          />
          <div class="invalid-feedback">
        Veuillez entrer un nom
         </div>
        </div>
        <div className="mb-3">
          <label>Prenom</label>
          <input type="text" className="form-control form-control-success" placeholder="Prenom" id="prenom" required/>
          
        </div>
        <div className="mb-3">
          <label>CIN</label>
          <input type="text" className="form-control " maxlength="8" placeholder="CIN" id="cin" pattern="[0-9]{8}" title="Three letter country code" required/>
        </div><div className="mb-3">
          <label>Telephone</label>
          <input type="tel" className="form-control" maxlength="8" placeholder="Telephone" id="telephone" required />
        </div>
        <div className="mb-3">
          <label>Adresse amil</label>
          <input
            type="email"
            className="form-control "
            placeholder="Entrez email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrez mot de passe"
            id="password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary fa fa-home">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}