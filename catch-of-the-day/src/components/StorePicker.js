import React from 'react';
import PropTypes from "prop-types";
import { getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history:  PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    //console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

    render() {
        return (
        <form className='store-selector' onSubmit={this.goToStore}>
            { /* comment */ }
            <h2>Please Enter A Store</h2>
            <input type='text' 
                ref={this.myInput}
                required placeholder='Store Name' 
                defaultValue={getFunName()}>
            </input>
            <button type='submit'>Visit Store -></button>
        </form>
        )
    }
}

export default StorePicker;