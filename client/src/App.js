import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BookContainer from "./containers/BookContainer";
import WriterContainer from "./containers/WriterContainer";
import BookList from "./components/books/BookList";
import WriterList from "./components/writers/WriterList";
import NewMember from "./components/members/NewMember";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={BookContainer} />
          <Route path="/" exact component={WriterContainer} />
          <Route path="/books" exact component={BookList} />
          <Route path="/writers" exact component={WriterList} />
          <Route path="new_member" exact component={NewMember} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import BookContainer from "./containers/BookContainer";
// import WriterContainer from "./containers/WriterContainer";
// import UserContainer from "./containers/UserContainer";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="ui grid container">
//           <BookContainer />
//           <WriterContainer />
//           <UserContainer />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";

// import routes from "./routes";

// export default () => <>{routes}</>;
