import './App.css';
// import Header from '../../../GLAB320H2/src/components/feader';
// import Article from '../../../GLAB320H2/src/components/article';
// import Footer from '../../../GLAB320H2/src/components/footer';

import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          title="First Blog Post Title"
          image="/assets/post1.jpg"
          alt="A descriptive alt text for the first blog post image"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur..."
        />
        <Article
          title="Second Blog Post Title"
          image="/assets/post2.jpg"
          alt="A descriptive alt text for the second blog post image"
          content="More lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur..."
        />
      </main>
      <Footer />
    </>
  );
}

export default App;