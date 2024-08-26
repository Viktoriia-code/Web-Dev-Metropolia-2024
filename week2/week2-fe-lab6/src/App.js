import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header title="JSX and Props Showcase" />
      <Section heading="Section 1" content="This is the content of section 1." />
      <Article title="Article 1" text="Content of Article 1." />
      <Sidebar content="Sidebar content goes here." />
      <Section heading="Section 2" content="This is the content of section 2." />
      <Footer text="Copyright © 2023 JSX Props App" />
    </div>
  );
}

export default App;
