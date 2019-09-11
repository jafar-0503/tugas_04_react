import React, {Component} from 'react';

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.daftarMenu
    };
  }

  render(){
    return(
      <div>
        <img src={this.state.daftarMenu} alt="Product Makanan" width="150" />
      </div>
    )
  }
}

export default ListMakanan;
