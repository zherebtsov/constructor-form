import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addField } from 'redux/modules/previewForm';
import { ElementsForm } from 'components';
import PreviewForm from 'containers/PreviewFrom';
import SavedForms from 'containers/SavedForms';
import { Link } from 'react-router-dom';

function mapDispatchToProps(dispatch) {
  return {
    addField: type => dispatch(addField(type))
  };
}

class App extends Component {

  onElementFormClick = (elementName) => {
    this.props.addField(elementName);
  };

  render() {
    return (
      <div>
        <div className="content">
          <header className="app-header">
            <Link className="app-header__link" to="/">
              <h1 className="app-header__name">Констурктор форм</h1>
            </Link>
          </header>

          <main className="app-main container">
            <div className="app-main__a-side">
              <SavedForms />
              <ElementsForm onClick={this.onElementFormClick} />
            </div>
            <PreviewForm/>
          </main>
        </div>

        <footer className="app-footer">
          <p className="app-footer__author">
            Test task created by Dmitry Zherebtsov (
            <a
              href="https://github.com/zherebtsov?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub</a>)
          </p>
        </footer>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App)
