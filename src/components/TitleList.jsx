import Title from './Title';

const TitleList = ({ name, titles }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{name}</h1>
        <div className="titles-wrapper">
          {titles.map((title) => (
            <Title key={title.id} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleList;
