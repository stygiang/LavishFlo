import React, { useEffect } from "react";
import styled from "styled-components";
import { config } from "../../../config";
import { useSelector, useDispatch } from "react-redux";
import { GetProject } from "../../../actions/ProjectActions";

const ProjectsContainer = styled.div`
  display: grid;
  gap: 1.5em;
  background-color: #f6f6f6;
  padding: 1em;
  border-radius: 5px;
`;
const ProjectsHeader = styled.div`
  letter-spacing: 1px;
  line-height: 1.4;
  h3 {
    font-size: ${config.FontSizes.large};
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  p {
    font-size: ${config.FontSizes.small};
    text-transform: capitalize;
  }
`;
const ProjectItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 0.3fr 5fr 1.3fr;
  gap: 1em;
`;
const ProjectPhoto = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: blue;
`;
const ProjectInfoBox = styled.div`
  h3 {
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  p {
    display: inline-block;
    text-transform: capitalize;
    :not(last-child) {
      margin-right: 0.5em;
    }

    span {
      font-weight: 600;
    }
  }
`;
const ProjectsOptionsBox = styled.div`
  display: flex;
  align-items: center;
`;
const ProjectMangage = styled.p`
  display: inline-block;
  font-size: ${config.FontSizes.medium};
  margin-right: 0.3em;
  padding: 0.1em 0.5em;
  border-radius: 10px;
  text-transform: capitalize;
  transition: background-color 500ms, color 500ms;
  &:hover {
    background-color: ${config.colors.primary};
    color: ${config.colors.light};
  }
  /* background-color: #e3e3e3; */
`;
const ProjectEdit = styled.div`
  display: inline-block;
  padding: 0.5em;
  /* background-color: #e3e3e3; */
  i {
    font-size: ${config.FontSizes.medium};
    transition: color 500ms;
    &:hover {
      color: ${config.colors.primary};
    }
  }
`;
const Notification = styled.p`
  font-size: 1.3rem;
  color: ${config.colors.light};
  display: inline-block;
  padding: 0.4em;
  border-radius: 5px;
  margin-left: 0.3em;
  background-color: ${config.colors.primary};
`;

const Projects = () => {
  const dispatch = useDispatch();
  const singleProject = useSelector((s) => s.singleProject);
  const { loading, project, error } = singleProject;
  useEffect(() => {
    dispatch(GetProject());
  }, [dispatch]);
  return (
    <div>
      <ProjectsContainer>
        <ProjectsHeader>
          <h3>
            Open Projects
            <Notification>
              {loading ? 0 : error ? 0 : project.length}
            </Notification>
          </h3>

          <p>Your Data Status</p>
        </ProjectsHeader>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error..</h1>
        ) : (
          project.map((item) => (
            <ProjectItem>
              <ProjectPhoto />
              <ProjectInfoBox>
                <h3>{item.name}</h3>
                <p>
                  <span>{item.Tasks.length}</span> tasks
                </p>
                <p>
                  <span>{item.CompletedTasks.length}</span> UnCompleted tasks
                </p>
              </ProjectInfoBox>
              <ProjectsOptionsBox>
                <ProjectMangage>Manage</ProjectMangage>
                <ProjectEdit>
                  <i class='fas fa-cog'></i>
                </ProjectEdit>
              </ProjectsOptionsBox>
            </ProjectItem>
          ))
        )}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
