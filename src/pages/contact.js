import React, {Component} from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import {
  createUser,
  loadUsers,
} from '../actions';
import PropTypes from 'prop-types';

const FORM_VALUES = {
  albumName: '',
  email: '',
  releaseDate: '',
  inventory: '',
  message: '',

};

class AddUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = FORM_VALUES;

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state
    );

    this.setState(FORM_VALUES);
  }



  render() {
    return (
      <div>
        <Header />
        <div className='contact-body'>
          <h1>
            Contact me
          </h1>
          <h4>
            If you are looking for a Project Manager leave your information and I
            will get back to you as soon as I can. Lets see if I will make a good fit
            with your organization.
          </h4>
          <form onSubmit={this.handleSubmit.bind(this)}>

            band Name:<br />
              <input
                type='text'
                name='albumName'
                placeholder='Band Name'
                value={this.state.bandName}
                onChange={this.handleInputChange.bind(this)}
              />
              <br />
            album: <br />
              <input
                type="text"
                name="email"
                placeholder="Album name"
                value={this.state.email}
                onChange={this.handleInputChange.bind(this)}
              />
              <br />
            releaseDate: <br />
              <input
                type='text'
                name='releaseDate'
                placeholder='releaseDate'
                value={this.state.releaseDate}
                onChange={this.handleInputChange.bind(this)}
              />
              <br />
              inventory: <br />
                <input
                  type='text'
                  name='inventory'
                  placeholder='inventory'
                  value={this.state.inventory}
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />
              Message:<br />
                <input
                  type='text'
                  name='message'
                  placeholder='Message'
                  value={this.state.message}
                  onChange={this.handleInputChange.bind(this)}
                 />
              <br /><br />
            <input type="submit" value="Submit" />

          </form>
        </div>

        <style jsx>{`

          @font-face {
            font-family: 'ebgaramond';
            src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
          }

          @font-face {
            font-family: 'quicksand';
            src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
          }


          h1 {
            font-size: 36px;
            font-family: ebgaramond;
            margin-top: 2em;

          }

          h4 {
            font-family: quicksand;

          }

          form {
              font-family: ebgaramond;
              margin-left: 10%;

          }

          .contact-body {
            margin-top: -5%;
          }




      `}</style>





      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(createUser(values));
    },
    onMount: () => {
      dispatch(loadUsers());
    }
  };
}


AddUserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadUsers: PropTypes.func,
  onMount: PropTypes.func.isRequired,
};

// null will be mapstatetoprops and mapdispatchtoprops
export default withRedux(initStore, null, mapDispatchToProps)(AddUserPage);
