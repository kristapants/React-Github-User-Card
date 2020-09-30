import React from 'react';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      username: '',
      picture: '',
      location: '',
      url: '',
      followers: '',
      following: '',
      bio: '',
      contributions: '',
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    console.log('fetching')
    fetch(`https://api.github.com/users/kristapants`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          username: data.login,
          picture: data.avatar_url,
          location: data.location,
          url: data.html_url,
          followers: data.followers,
          following: data.following,
          bio: data.bio,
          contributions: `https://ghchart.rshah.org/${data.login}`,
        })
        return fetch(data.followers_url)
          .then((res) => res.json());
      })
      .then((data) => {
        const friendFetch = data.map(friend => {
          return fetch(`https://api.github.com/users/${friend.login}`)
            .then((res) => res.json());
          })
        return Promise.all(friendFetch)
      })
      .then((data)=> {
        this.setState({
          friends: data,
        }, ()=>{
          console.log(this.state)
        });
      })
      .catch((err) => console.log(err));
  };

  fetchFriend = (friend) => {
    fetch(`https://api.github.com/users/${friend}`)
  }
  // handleUserSearch = (e) => {
  //   this.setState({
  //     search: e.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Git Connected</h1>
            <p className="lead text-muted">Quickly visualize your connections on linked in. One place, all your followers and the most important information about them that matters to you.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
              </div>
            </div>
          </div>
        </section>

        <CardContainer 
          data={this.state}
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
