import { useState } from 'react';
import './App.css';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState((oldState) => {
      return {
        ...oldState,
        selectedProject: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prev => {
      const newProject = {...projectData, id: Math.random()}
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  let content;
  if(projectsState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if(projectsState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
