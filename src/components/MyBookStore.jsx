import React, {Component} from 'react'
import NavigationBook from"./NavigationBook";
import MyFooter from"./MyFooter";
import MyJumbotron from"./MyJumbotron";
import BookCovers from"./BookCovers";


class MyBookStore extends Component {
   
    render() {
    return (
         <>
        <NavigationBook />
        <MyJumbotron />
        <MyFooter />
        <container>
        <BookCovers />
        </container>
        
    </>
    );
  }
}

export default MyBookStore;
