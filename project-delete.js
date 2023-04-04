//delete projects under a folder using folder id

const {google} = require('googleapis');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const resource = google.cloudresourcemanager('v1');

const folderId = '225406908443'; // Replace with the ID of the folder containing the projects to be deleted

async function deleteProject(projectId) {
  try {
    const request = {
      auth: auth,
      projectId: `${projectId}`,
    };

    // await console.log(". "+projectId);
    const res = await resource.projects.delete(request);
    console.log(`Project ${projectId} deleted.`);
    console.log(res.data);
  } catch (err) {
    console.error(`Error deleting project: ${err}`);
  }
}

async function listProjects() {
  try {
    const request = {
      auth: auth,
      filter: `parent.id:${folderId}`,
    };

    const res = await resource.projects.list(request);
    const projects = res.data.projects || [];
    console.log(`Found ${projects.length} projects under folder ${folderId}.`);

    for (const project of projects) {
      await deleteProject(project.projectId);
      // console.log(project.projectId);
    }
  } catch (err) {
    console.error(`Error listing projects: ${err}`);
  }
}

listProjects();


//-------------------------------------------------------------------------------------------


// delete-specific-projects-using-project-id

// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// //const folderId = 'FOLDER_ID'; // Replace with the ID of the folder containing the project to be deleted

// async function deleteProject(projectId) {
//   try {
//     const request = {
//       auth: auth,
//       projectId: `${projectId}`,
//     };

//     const res = await resource.projects.delete(request);
//     console.log(`Project ${projectId} deleted.`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error deleting project: ${err}`);
//   }
// }

// const projectIdToDelete = 'winter-accord-382206'; // Replace with the ID of the project to be deleted
// deleteProject(projectIdToDelete);


//-------------------------------------------------------------------------------------------

