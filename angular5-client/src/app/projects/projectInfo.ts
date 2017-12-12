import { ProjectStatus } from "./projectStatus";

export class ProjectInfo {
    projectId: number;
    projectName: string;
    projectSummary: string;
    dueDate: Date;
    requiredSkills: string;
    estimatedCost: number;
    statusId: number;
    projectStatus: ProjectStatus;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    lastupdatedBy: string;
}

