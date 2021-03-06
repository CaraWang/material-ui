/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var Header = require('../components/header.jsx');
var Footer = require('../components/footer.jsx');

var IndexPage = React.createClass({
  
  render: function() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
  
});

module.exports = IndexPage;