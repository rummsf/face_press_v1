import React from "react";
import BookListItem from "./BookListItem";

const BookList = ({ books }) => {
  const bookItems = books.map(book => (
    <BookListItem key={book.id} book={book} />
  ));
  return <div className="ui relaxed divided list scroll">{bookItems}</div>;
};

export default BookList;

// import React, { Component } from "react";
// import { connect } from "react-redux";

// class SongList extends Component {
//   renderList() {
//     return this.props.songs.map(song => {
//       return (
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <button className="ui button primary">Select</button>
//           </div>

//           <div className="content">{song.title}</div>
//         </div>
//       );
//     });
//   }
//   render() {
//     return <div className="ui divided list">{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = state => {
//   return { songs: state.songs };
// };

// export default connect(mapStateToProps)(SongList);
