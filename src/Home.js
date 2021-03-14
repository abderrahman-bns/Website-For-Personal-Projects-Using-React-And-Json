import ProjectList from "./ProjectList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { projects && <ProjectList projects={projects} /> }
    </div>
  );
}
 
export default Home;
