import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [
        {
          quoteText: "Fall seven times and stand up eight.",
          quoteAuthor: "Japanese Proverb"
        },
        {
          quoteText:
            "There are no secrets to success. It is the result of preparation, hard work and learning from failure.",
          quoteAuthor: "Colin Powell"
        },
        {
          quoteText:
            "Be willing to go all out, in pursuit of your dream. Ultimately it will pay off. You are more powerful than you think you are.",
          quoteAuthor: "Les Brown"
        },
        {
          quoteText:
            "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
          quoteAuthor: "Paulo Coelho"
        },
        {
          quoteText:
            "You cannot control everything that happens to you; you can only control the way you respond to what happens. In your response is your power.",
          quoteAuthor: "Unknown"
        },
        {
          quoteText:
            "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
          quoteAuthor: " Thomas J. Watson"
        },
        {
          quoteText:
            "Failure is a prerequisite for great success. If you want to succeed faster, double your rate of failure.",
          quoteAuthor: "Brian Tracy"
        },
        {
          quoteText:
            "If you really want to do something you’ll find a way, if you don’t you’ll find an excuse.",
          quoteAuthor: "Jim Rohn"
        },
        {
          quoteText:
            "Success consists of going from failure to failure without loss of enthusiasm.",
          quoteAuthor: "Winston Churchill"
        },
        {
          quoteText: "In the middle of every difficulty lies opportunity.",
          quoteAuthor: "Albert Einstein"
        },
        {
          quoteText:
            "If we don’t change, we don’t grow. If we don’t grow, we aren’t really living.",
          quoteAuthor: "Gail Sheehy"
        }
      ],
      currentQuote: "",
      currentQuoteAuthor: "",
      currentQuoteEncoded: ""
    }
    this.handleQuoteClick = this.handleQuoteClick.bind(this)
  }
  componentDidMount() {
    //Get a random quote from the list on component mount, just reusing handleQuoteClick instead of duplicating. If functionality of handleQuoteClick changes evaluate its use here
    this.handleQuoteClick()
  }

  handleQuoteClick() {
    const newQuote = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ]
    const encodedQuote = encodeURI(newQuote.quoteText)
    this.setState({
      currentQuote: newQuote.quoteText,
      currentQuoteAuthor: newQuote.quoteAuthor,
      currentQuoteEncoded: encodedQuote
    })
  }

  render() {
    //This could be improved, and made more "react-like" by building seperate components for the current quote and the quoteactions, passing info between with props. In this case, the app scope is so simple that might be overkill.
    return (
      <div className="is-half" id="quote-box">
        <h2 className="is-size-3 has-text-centered" id="text">
          {this.state.currentQuote}
        </h2>
        <h2 className="has-text-right is-size-2 is-italic" id="author">
          -{this.state.currentQuoteAuthor}
        </h2>
        <button
          id="new-quote"
          className="button is-primary is-medium is-rounded"
          onClick={this.handleQuoteClick}
        >
          Get New Quote
        </button>
        <a
          id="tweet-quote"
          className="button is-primary is-small is-rounded is-outlined"
          href={
            "https://twitter.com/intent/tweet?text=" +
            this.state.currentQuoteEncoded
          }
        >
          Get New Quote
        </a>
      </div>
    )
  }
}

export default App
