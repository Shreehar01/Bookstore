import React from 'react'
import nodeapi from './API'
import BookList from './BookList';
import BookDetail from './BookDetail';
import {Link} from 'react-router-dom';
import { Header, Segment,Image } from 'semantic-ui-react';
class App extends React.Component{
  state = { books: [], selectedBook: null };
  componentDidMount() {
     this.onTermSubmit();
   }


  onTermSubmit = async() => {
    const Authentication =`Bearer ${localStorage.token} `;
    console.log(Authentication);
      const response = await nodeapi.get('/books/me', {
        params:{
          Authentication: `Bearer ${localStorage.token}`
        }
      });
      this.setState({
          books: response.data
      });
      await localStorage.setItem('selectedBook', this.state.selectedBook);
    };

    onBookSelect = book => {
      this.setState({ selectedBook: book });
    };



  render(){
    console.log(this.state.selectedBook);
    return(

            <div>
            <Segment clearing >
          <Header as='h3' floated='right' >
            <Link to={'/signout'}> SignOut </Link>
          </Header>

          <Header  as='h3' floated='right' >
          <Link to={'/mybooks'}>Free Tokens </Link>
          </Header>
          <Header  as='h3' floated='right' >
          <Link to={'/mybooks'}>My Information </Link>
          </Header>
          <Header  as='h3' floated='right' >
          <Link to={'/mybooks/add'}>Add Books </Link>
          </Header>
          <Header as='h3' color="blue" floated='left'>
          <Image circular src="https://lh3.googleusercontent.com/proxy/_XQYEt9X1SB2pHAujjvvnE09U9Sv2Az4lOY46XkkwJB-2bwIvQRx8FML5IeqaFZ9DvN8yF1lvyVBkLW7iNfDE6eykXk6Qq_gLpwgJ2gWJRhUssFPooMkJNw" /> <Link to={'/homepage'}> BOOKSTORE </Link>
          </Header>
        </Segment>




      <BookDetail book={this.state.selectedBook} />

      <BookList
        onBookSelect={this.onBookSelect}
        books={this.state.books}
        />
      </div>
    );
  }
}
export default App;
