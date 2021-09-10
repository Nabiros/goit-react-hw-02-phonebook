import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { number } from "prop-types";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  nameId = uuidv4();
  telId = uuidv4();

  nameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  Submit = (e) => {
    const { name, value } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSabmit={this.Submit}>
        <h1>Phonebook</h1>
        <label htmlFor={this.nameId}>
          Name
          <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.nameChange}
          />
          <button>add contact</button>
        </label>
        <h2>Contacts</h2>
        <ul>
          <li>Jacob</li>
          <li>Mango</li>
          <li>Poly</li>
        </ul>
        </form>
      )
  };
}

export default App;