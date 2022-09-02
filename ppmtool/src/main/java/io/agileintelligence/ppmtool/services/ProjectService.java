package io.agileintelligence.ppmtool.services;

import io.agileintelligence.ppmtool.domain.Project;
import io.agileintelligence.ppmtool.exceptions.ProjectIdException;
import io.agileintelligence.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project createOrUpdateProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch (Exception ex){
            throw new ProjectIdException("Project ID "+project.getProjectIdentifier().toUpperCase()+ " already exists");
        }
    }

    public Map<String, String> getErrors(BindingResult result) {
        Map<String, String> errors = new HashMap<String, String>();
        for(FieldError error: result.getFieldErrors()){
            errors.put(error.getField(), error.getDefaultMessage());
        }

        return errors;
    }

    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId);

        if(project == null) {
            throw new ProjectIdException("Project ID "+projectId+" doesn't exists");
        }
        return project;
    }

    public Iterator<Project> findAllProjects(){
        return (Iterator<Project>) projectRepository.findAll();
    }
}
