import React, { Component } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import ContactList from "../src/components/ContactList/ContactList";
import Filter from "../src/components/Filter/Filter";
import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperation from "./redux/contacts/contactsOperation";
import selectors from "./redux/selectors";

// import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.props.onFetchComponents();
  }
  render() {
    return (
      <>
        <div className={styles.container}>
          {this.props.isLoadingContacts && <h1>LOADING STUFF ...</h1>}
          <CSSTransition in={true} appear={true} timeout={5000} classNames={styles}>
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: selectors.getLoading(state),
});
const mapDispatchToProps = {
  onFetchComponents: contactsOperation.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
