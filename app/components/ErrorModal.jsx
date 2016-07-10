var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    // After the component is initiaizled, this is all ran.

    // es6 destructoring and is used down below
    var { title, message } = this.props;

    // creating a variable for the JSX code we have so we can pass it to ReactDOMServer
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{ title }</h4>
        <p>{ message }</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );

    // this is a jquery selector, but ReactDOMServer is converting our modalMarkup into a string we can render into the template AFTER it has already been loaded.
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // finding where to place. Which this = the modal itself.
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    // React requires you to return at least one element in render. Thus the blank div tags..

    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
