// const { google } = require('googleapis');

// // Authenticate with your GCP account
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });
// const authClient = auth.getClient();

// // Create a new sub-project
// const projectId = 'my-new-subproject';
// const parentProjectId = 'sampleproject2-381206';
// const displayName = 'My New Sub-Project';
// const cloudresourcemanager = google.cloudresourcemanager({ version: 'v1', auth: authClient });
// try {
//   const project = cloudresourcemanager.projects.create({
//     parent: `projects/${parentProjectId}`,
//     projectId,
//     requestBody: {
//       name: displayName,
//       projectId,
//       parent: {
//         type: 'folder',
//         id: parentProjectId,
//       },
//     },
//   });
//   console.log(`Created sub-project with ID ${project.data.projectId}`);
// } catch (err) {
//   console.error(err);
// }




const { google } = require('googleapis');
const { JWT } = require('google-auth-library');

// Set the desired user properties
const userEmail = 'aathityaaravichandran@gmail.com';
const userPassword = 'Password123!';
const userGivenName = 'New';
const userFamilyName = 'User';

// Set the ID of the GCP project where you want to create the user
const projectId = 'sampleproject2-381206';

// Create a new JWT client using the credentials of your service account
const jwtClient = new JWT({
  keyFile: './keyfile_service1.json',
  scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
});

// Set the desired user properties in an object
const newUser = {
  primaryEmail: userEmail,
  password: userPassword,
  name: {
    givenName: userGivenName,
    familyName: userFamilyName,
  },
};

// Create a new user account in the specified GCP project
const createUser = async () => {
  const admin = google.admin({ version: 'directory_v1', auth: jwtClient });
  const res = await admin.users.insert({
    auth: jwtClient,
    requestBody: newUser,
    userKey: userEmail,
    projectKey: `project/${projectId}`,
  });
  console.log(`Created user: ${res.data.primaryEmail}`);
};

createUser();
