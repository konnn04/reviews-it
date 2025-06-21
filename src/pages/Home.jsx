import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

function Home({ appData }) {
  if (!appData) return <div>No data available</div>;

  return (
    <div className="home-page">
      <div className="jumbotron bg rounded p-4 mb-4">
        <h1 className="display-4">{appData.name}</h1>
        <p className="lead">{appData.description}</p>
      </div>
      
      <h2 className="mb-4">Các khóa học</h2>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {appData.courses.map(course => (
          <div className="col" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;