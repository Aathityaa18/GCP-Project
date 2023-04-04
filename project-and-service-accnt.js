// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const iam = google.iam('v1');
// const projectIdPrefix = 'sam-proj-';
// const numProjects = 2;
// const folderId = '225406908443';

// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${projectId}`;
//     const request = {
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: 'Account',
//         },
//       },
//     };
//     const res = await iam.projects.serviceAccounts.create(request);
//     console.log(`Service account ${serviceAccountName} created for project ${projectId}.`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// async function createProjectsAndServiceAccounts() {
//   for (let i = 1; i <= numProjects; i++) {
//     const projectId = `${projectIdPrefix}${i}`;
//     const projectName = `${projectId} Name`;
//     try {
//       const request = {
//         auth: auth,
//         requestBody: {
//           projectId: projectId,
//           name: projectName,
//           parent: {
//             type: 'folder',
//             id: folderId,
//           },
//         },
//       };
//       const res = await google.cloudresourcemanager('v1').projects.create(request);
//       console.log(`Project ${projectId} created.`);
//       console.log(res.data);
//       await createServiceAccount(projectId);
//     } catch (err) {
//       console.error(`Error creating project: ${err}`);
//     }
//   }
// }

// createProjectsAndServiceAccounts();








// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');
// const folderId = '850542238081'; // replace with your folder ID

// const projectIdPrefix = 'lab-';
// const projectNamePrefix = 'cloud-user-';
// const numProjects = 2;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create a project with a random ID and name
// async function createProject() {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         parent: {
//           type: 'folder',
//           id: folderId,
//         },
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);
//     await createServiceAccount(projectId);
    
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Loop through and create multiple projects with random IDs and names
// async function createProjectsAndServiceAccounts() {
//   for (let i = 1; i <= numProjects; i++) {
//     await createProject();
//   }
// }

// // Call the function to create the projects and service accounts
// createProjectsAndServiceAccounts();


//--------------------------------------------------


// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// const folderId = '850542238081'; // replace with your folder ID

// const projectIdPrefix = 'lab-';
// const projectNamePrefix = 'cloud-user-';
// const numProjects = 2;

// // Function to generate a random 6-character hex string
// // function getRandomHex() {
// //   return crypto.randomBytes(3).toString('hex');
// // }

// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// async function createProject(projectId, projectName, parent) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         parent: {
//           type: 'folder',
//           id: parent,
//         },
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Create a service account in the newly created project
//     //await createServiceAccount(projectId);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName, folderId);
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }



// // Create multiple projects with random IDs and names
// // for (let i = 1; i <= numProjects; i++) {
// //   const projectId = `${projectIdPrefix}${getRandomHex()}`;
// //   const projectName = `${projectNamePrefix}${getRandomHex()}`;
// //   createProject(projectId, projectName, folderId);
// // }

// for (const projectId of projectId) {
//   createServiceAccount(projectId);
// }


//--------------------------------------------------------------------------------------------



// CREATING PROJECTS AND ADDING SERVICE ACCOUNTS IN THAT PROJECT 👍👍👍👍👍


// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// //const folderId = '815996818015'; // replace with your folder ID

// const projectIdPrefix = 'a-';
// const projectNamePrefix = 'a-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Function to create a project and then create a service account in it
// async function createProjectAndServiceAccount(projectId, projectName) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         // parent: {
//         //   type: 'folder',
//         //   id: parent,
//         // },
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Create a service account in the newly created project
//     await createServiceAccount(projectId);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProjectAndServiceAccount(projectId, projectName);
// }


//-----------------------------------------------------------------------------------------



// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// //const folderId = '888756369690'; // replace with your folder ID

// const projectIdPrefix = 'aa-';
// const projectNamePrefix = 'aa-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Function to create a project and then create a service account in it
// async function createProjectAndServiceAccount(projectId, projectName) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         // parent: {
//         //   type: 'folder',
//         //   id: parent,
//         // },
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Create a service account in the newly created project
//     await createServiceAccount(projectId);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProjectAndServiceAccount(projectId, projectName);
// }



//-----------------------------------------------------------------------------------------


//👍👍👍


// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');
// const member = 'aathityaaravichandran@gmail.com'; // replace with your email address
// //const role = 'roles/owner'; // replace with the desired role

// //const folderId = '225406908443'; // replace with your folder ID

// const projectIdPrefix = 'hi-';
// const projectNamePrefix = 'hi-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Function to create a project and then create a service account in it
// async function createProjectAndServiceAccount(projectId, projectName, parent) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         parent: {
//           type: 'folder',
//           id: parent,
//         },
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Create a service account in the newly created project
//     await createServiceAccount(projectId);

//     // Add the specified member to the project with the specified role
//     await addMemberToProject(projectId, member, role);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }


// // Create a project and add the specified member to it with the specified roles
// // async function createProjectAndServiceAccount(projectId, projectName, parent) {
// //   try {
// //     const request = {
// //       auth: auth,
// //       requestBody: {
// //         projectId: projectId,
// //         name: projectName,
// //         // parent: {
// //         //   type: 'folder',
// //         //   id: parent,
// //         // },
// //       },
// //     };

// //     const res = await resource.projects.create(request);
// //     console.log(`Project ${projectId} created.`);
// //     console.log(res.data);

// //     // Create a service account in the newly created project
// //     await createServiceAccount(projectId);

// //     // Add the specified member to the project with the specified roles
// //     const roles = ['roles/owner']; // replace with the desired roles
// //     await addMemberToProject(projectId, member, roles);

// //   } catch (err) {
// //     console.error(`Error creating project: ${err}`);
// //   }
// // }


// // Function to add a member to a project with the specified role
// async function addMemberToProject(projectId, member, role) {
//   try {
//     const policy = await resource.projects.getIamPolicy({
//       auth: auth,
//       resource: projectId,
//     });

//     const binding = policy.data.bindings.find(b => b.role === role);
//     if (!binding) {
//       console.error(`Role ${role} not found.`);
//       return;
//     }

//     if (!binding.members.includes(`user:${member}`)) {
//       binding.members.push(`user:${member}`);
//       await resource.projects.setIamPolicy({
//         auth: auth,
//         resource: projectId,
//         requestBody: {
//           policy: policy.data,
//         },
//       });

//       console.log(`Added member ${member} with role ${role} to project ${projectId}.`);
//     } else {
//       console.log(`Member ${member} already has role ${role} in project ${projectId}.`);
//     }

//   } catch (err) {
//     console.error(`Error adding member to project: ${err}`);
//   }
// }


// // Function to add a member to a project with the specified roles
// async function addMemberToProject(projectId, member, roles) {
//   try {
//     const policy = await resource.projects.getIamPolicy({
//       auth: auth,
//       resource: projectId,
//     });

//     roles.forEach(role => {
//       const binding = policy.data.bindings.find(b => b.role === role);
//       if (!binding) {
//         console.error(`Role ${role} not found.`);
//         return;
//       }

//       if (!binding.members.includes(`user:${member}`)) {
//         binding.members.push(`user:${member}`);
//       } else {
//         console.log(`Member ${member} already has role ${role} in project ${projectId}.`);
//       }
//     });

//     await resource.projects.setIamPolicy({
//       auth: auth,
//       resource: projectId,
//       requestBody: {
//         policy: policy.data,
//       },
//     });

//     console.log(`Added member ${member} with roles ${roles} to project ${projectId}.`);

//   } catch (err) {
//     console.error(`Error adding member to project: ${err}`);
//   }
// }

// // Create multiple projects

// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProjectAndServiceAccount(projectId, projectName);
// }



//---------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// //const folderId = '888756369690'; // replace with your folder ID

// const projectIdPrefix = 'aa-';
// const projectNamePrefix = 'aa-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Function to create a project and then create a service account in it
// async function createProjectAndServiceAccount(projectId, projectName) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Create a service account in the newly created project
//     await createServiceAccount(projectId);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProjectAndServiceAccount(projectId, projectName);
// }



//------------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// const projectIdPrefix = 'ab-';
// const projectNamePrefix = 'ab-';
// const numProjects = 1;

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// async function createProject(projectId, projectName) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//       },
//     };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);
    
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName);
//   createServiceAccount(projectId);
// }




//------------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');

// const projectIdPrefix = 'ad-';
// const projectNamePrefix = 'ad-';
// const numProjects = 1;
// const numServiceAccountsPerProject = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// // Function to generate a random string
// function getRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
// }

// // Function to create multiple projects with random IDs and names
// async function createProjects() {
//   try {
//     for (let i = 1; i <= numProjects; i++) {
//       const projectId = `${projectIdPrefix}${getRandomHex()}`;
//       const projectName = `${projectNamePrefix}${getRandomHex()}`;
//       const request = {
//         auth: auth,
//         requestBody: {
//           projectId: projectId,
//           name: projectName,
//         },
//       };
//       const res = await resource.projects.create(request);
//       console.log(`Project ${projectId} created.`);
//       console.log(res.data);
//       for (let j = 1; j <= numServiceAccountsPerProject; j++) {
//         createServiceAccount(projectId);
//       }
//     }
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Function to create a service account in a project
// async function createServiceAccount(projectId) {
//   try {
//     const serviceAccountName = `sa-${getRandomString(6)}`;
//     const serviceAccount = await iam.projects.serviceAccounts.create({
//       auth: auth,
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: serviceAccountName,
//         },
//       },
//     });

//     console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
//     console.log(serviceAccount.data);

//   } catch (err) {
//     console.error(`Error creating service account: ${err}`);
//   }
// }

// // Update the projectIds array with your own project IDs
// //const projectIds = ['abcd-670bdd', 'abcd-8f9ed', 'abcd-43db1'];

// // Call the createProjects function
// createProjects();



//----------------------------------------------------------------------------------------




