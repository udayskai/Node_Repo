import React, { Component } from 'react';
import axios from 'axios'


class SongList extends Component{



   
     
     componentDidMount() {
      axios.get(`192.168.0.104:3004/songlist`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        }) }
    

    render(){
          return(

            <div className="container text-center m">
              <div className="col-md-12 col-lg-12">
               <div className="form-group">
                    <input type="text" className="form-control" placeholder="search Song"/>
                    <button type="submit" className="btn btn-danger mt-5 btn-md"> Search</button>
              </div>
            </div>
         </div>
        )
    }

}

export default SongList;