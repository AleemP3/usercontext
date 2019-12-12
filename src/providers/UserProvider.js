import React from "react";

//setting up initial contect 
const UserContext = React.createContext();

//Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer; 

//Create the provider using traditional React.Component class
class UserProvider extends React.Component {

  state = { 
    firstname: "Naruto",
    lastname: "Uzumaki",
    description: "I am the Hokage, Believe it!",
    email: "NaruMaki@Hokage.com",
    date: "12/12/2019",
    updateUser: (user) => this.updateUser(user)
   }

   updateUser = (user) => {
    this.setState({...user, })
   }


  render () {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    );
  };
};

export default UserProvider;