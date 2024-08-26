import Article from "./Article"

const articles = ['Article1', 'Article2', 'Article3']

function MainContent() {
  return (
    <main>
      {articles.map((item, index) => (
        <Article key={index} title={item} />
      ))}
    </main>
  );
}

export default MainContent;