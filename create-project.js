//WORKS GOOD 👍
// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectId = 'sample-2-783416'; // Replace with your desired project ID
// const projectName = 'My Project'; // Replace with your desired project name

// async function createProject() {
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

// createProject();





// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIds = ['project-6', 'project-7']; // Replace with your desired project IDs
// const projectNames = ['Project 6', 'Project 7']; // Replace with your desired project names

// async function createProjects() {
//   try {
//     for (let i = 0; i < projectIds.length; i++) {
//       const projectId = projectIds[i];
//       const projectName = projectNames[i];

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
//     }
//   } catch (err) {
//     console.error(`Error creating projects: ${err}`);
//   }
// }

// createProjects();


//-----------------------------------------------------------------------------------------


// WORKS GOOD for folder id

// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIdPrefix = 'my-project-';
// const projectNamePrefix = 'Project-';
// const numProjects = 0;
// const folderId = '555495213046'; // Replace with the ID of the folder to create projects under

// // Function to generate a random integer between 0 and max
// const getRandom = (max) => {
//   return Math.floor(Math.random() * max);
// };

// async function createProject(projectId, projectName, parent) {
  // try {
  //   const request = {
  //     auth: auth,
  //     requestBody: {
  //       projectId: projectId,
  //       name: projectName,
  //       parent: {
  //         type: 'folder',
  //         id: parent,
  //       },
  //     },
  //   };

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names under the specified folder
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}-${i}`;
//   const projectName = `${projectNamePrefix}-${i}`;
//   createProject(projectId, projectName, folderId);
// }



//---------------------------------------------------------------------------------------------



// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIdPrefix = 'my-project-';
// const projectNamePrefix = 'Project-';
// const numProjects = 1;

// // Function to generate a random integer between 0 and max
// const getRandom = (max) => {
//   return Math.floor(Math.random() * max);
// };

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

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandom(100)}-${i}`;
//   const projectName = `${projectNamePrefix}${getRandom(100)}-${i}`;
//   createProject(projectId, projectName);
// }


//--------------------------------------------------------------------------------------------



// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIdPrefix = 'lab-';
// const projectNamePrefix = 'cloud-user-';
// const numProjects = 5;
// const folderId = '555495213046'; // Replace with the ID of the folder to create projects under

// // Function to generate a SHA-256 hash from a string
// const getHash = (str) => {
//   return crypto.createHash('sha256').update(str).digest('hex');
// };

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
//     console.log(`Project ${projectId} created with ID ${res.data.projectId}.`);
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with hash-generated IDs and random names under the specified folder
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}-${getHash(i.toString())}`; // Use the hash function to generate project ID

//   // const projectName = `${projectNamePrefix}-${getHash(getRandom(10000).toString())}`; // Use the hash function to generate project name
//   createProject(projectId, projectName, folderId);
// }


//////////////////------------------------------------------>



// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIdPrefix = 'lab-';
// const projectNamePrefix = 'cloud-user-';
// const numProjects = 1;

// // Function to generate a SHA-256 hash from a string
// function getHash(str) {
//   return crypto.createHash('sha256').update(str).digest('hex');
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

// // Create multiple projects with hash-generated IDs and random names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}-${getHash(i.toString())}`;
//   const projectName = `${projectNamePrefix}-${getHash(i.toString())}`;
//   createProject(projectId, projectName);
// }


//--------------------------------------------------------------------------------------------

// const {google} = require('googleapis');
// // const crypto = require('crypto');


// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');

// const projectIdPrefix = 'my-project-';
// const projectNamePrefix = 'Project-';
// const numProjects = 0;
// const folderId = '555495213046'; // Replace with the ID of the folder to create projects under

// // Function to generate a random integer between 0 and max
// const getRandom = (max) => {
//   return Math.floor(Math.random() * max);
// };

// function getHash(str) {
//   return crypto.createHash('sha256').update(str).digest('hex');
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
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names under the specified folder
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}-${i}`;
//   const projectName = `${projectNamePrefix}-${i}`;
//   createProject(projectId, projectName, folderId);
// }



// ----------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const folderId = '533905865198'; // replace with your folder ID

// const projectIdPrefix = 'eh-';
// const projectNamePrefix = 'eh-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
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
    
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName, folderId);
// }




//---------------------------------------------------------------------------------------




//PROJECT CREATION WITH MULTIPLE APIs


// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const folderId = '533905865198';

// const projectIdPrefix = 'efg-';
// const projectNamePrefix = 'efg-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
// }

// async function createProject(projectId, projectName, folderId) {
//   try {
//     const request = {
//       auth: auth,
//       requestBody: {
//         projectId: projectId,
//         name: projectName,
//         parent: {
//           type: 'folder',
//           id: '533905865198'
//         }
//       },
//     };
    

//     const res = await resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);

//     // Enable all APIs here...
//     const apisToEnable = {
//       'bigquery-json.googleapis.com': true,
//       'bigquerymigration.googleapis.com': true,
//       'bigquerystorage.googleapis.com': true,
//       'clouddebugger.googleapis.com': true,
//       'clouddeploy.googleapis.com': true,
//       'logging.googleapis.com': true,
//       'monitoring.googleapis.com': true,
//       'oslogin.googleapis.com': true,
//       'pubsub.googleapis.com': true,
//       'runtimeconfig.googleapis.com': true,
//       'storage-component.googleapis.com': true,
//       'storage-api.googleapis.com': true
//     };

//     const request2 = {
//       name: `projects/${projectId}`,
//       requestBody: {
//         serviceIds: Object.keys(apisToEnable),
//         enablementState: 'ENABLED'
//       }
//     };

//     const serviceusage = google.serviceusage('v1');
//     const res2 = await serviceusage.services.batchEnable(request2);
//     console.log(`Enabled APIs: ${Object.keys(apisToEnable)}`);
    

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName, folderId);
// }




//----------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const serviceusage = google.serviceusage('v1'); // import Service Usage API
// const folderId = '533905865198'; // replace with your folder ID

// const projectIdPrefix = 'eh-';
// const projectNamePrefix = 'eh-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
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

//     // Enable APIs for the new project
//     await enableApis(projectId); // call enableApis function

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// async function enableApis(projectId) {
//   try {
//     const request = {
//       auth: auth,
//       parent: `projects/${projectId}`,
//       requestBody: {
//         serviceIds: [
//           'bigquery-json.googleapis.com',
//           'bigquerymigration.googleapis.com',
//           'bigquerystorage.googleapis.com',
//           'clouddebugger.googleapis.com',
//           'clouddeploy.googleapis.com',
//           'logging.googleapis.com',
//           'monitoring.googleapis.com',
//           'oslogin.googleapis.com',
//           'pubsub.googleapis.com',
//           'runtimeconfig.googleapis.com',
//           'storage-component.googleapis.com',
//           'storage-api.googleapis.com'
//         ]
//       }
//     };
//     const res = await serviceusage.services.batchEnable(request);
//     console.log(`APIs enabled for project ${projectId}`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error enabling APIs for project: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName, folderId);
// }




//----------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const serviceusage = google.serviceusage('v1');
// const iam = google.iam('v1');
// const folderId = '555495213046'; // replace with your folder ID

// const projectIdPrefix = 'eh-';
// const projectNamePrefix = 'eh-';
// const numProjects = 1;

// // Function to generate a random 6-character hex string
// function getRandomHex() {
//   return crypto.randomBytes(3).toString('hex');
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

//     const res = resource.projects.create(request);
//     console.log(`Project ${projectId} created.`);
//     console.log(res.data);
    
//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
//   }
// }

// async function enableServiceUsageApi(projectId) {
//   try {
//     const request = {
//       auth: auth,
//       name: `projects/${projectId}/services/serviceusage.googleapis.com`,
//     };

//     const res = await serviceusage.services.enable(request);
//     console.log(`Service Usage API enabled for project ${projectId}.`);
//     console.log(res.data);

//   } catch (err) {
//     console.error(`Error enabling Service Usage API: ${err}`);
//   }
// }

// async function createGoogleManagedServiceAccount(projectId) {
//   try {
//     const name = `projects/${projectId}/serviceAccounts/${projectId}-sa@${projectId}.iam.gserviceaccount.com`;

//     // Create the Google-managed service account
//     const res1 = await iam.projects.serviceAccounts.create({
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: `${projectId}-sa`,
//         serviceAccount: {
//           displayName: `${projectId}-sa`,
//         },
//       },
//       auth: auth,
//     });

//     console.log(`Google-managed service account ${name} created.`);
//     console.log(res1.data);

//     // Grant the necessary permissions to the service account
//     const res2 = await iam.projects.serviceAccounts.setIamPolicy({
//       resource: name,
//       requestBody: {
//         policy: {
//           bindings: [
//             {
//               role: 'roles/owner',
//               members: [`serviceAccount:${name}`],
//             },
//           ],
//         },
//       },
//       auth: auth,
//     });

//     console.log(`Permissions granted to ${name}.`);
//     console.log(res2.data);

//   } catch (err) {
//     console.error(`Error creating Google-managed service account: ${err}`);
//   }
// }

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName, folderId);
//   enableServiceUsageApi(projectId);
//   createGoogleManagedServiceAccount(projectId);
// }




//----------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const projectIdPrefix = 'asd-';
// const projectNamePrefix = 'asd-';
// const numProjects = 1;

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

// // Create multiple projects with random IDs and names
// for (let i = 1; i <= numProjects; i++) {
//   const projectId = `${projectIdPrefix}${getRandomHex()}`;
//   const projectName = `${projectNamePrefix}${getRandomHex()}`;
//   createProject(projectId, projectName);
// }






//----------------------------------------------------------------------------------------








const {google} = require('googleapis');
const crypto = require('crypto');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const resource = google.cloudresourcemanager('v1');
const iam = google.iam('v1');

const projectIdPrefix = 'sd-';
const projectNamePrefix = 'sd-';
const numProjects = 1;

// Function to generate a random 6-character hex string
function getRandomHex() {
  return crypto.randomBytes(3).toString('hex');
}

// Function to generate a random string
function getRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

async function createProjectWithServiceAccount(projectId, projectName) {
  try {
    const request = {
      auth: auth,
      requestBody: {
        projectId: projectId,
        name: projectName,
      },
    };

    const res = await resource.projects.create(request);
    console.log(`Project ${projectId} created.`);
    console.log(res.data);

    const serviceAccountName = `sa-${getRandomString(6)}`;
    const serviceAccount = await iam.projects.serviceAccounts.create({
      auth: auth,
      name: `projects/${projectId}`,
      requestBody: {
        accountId: serviceAccountName,
        serviceAccount: {
          displayName: serviceAccountName,
        },
      },
    });

    console.log(`Service account ${serviceAccountName} created in project ${projectId}.`);
    console.log(serviceAccount.data);

  } catch (err) {
    console.error(`Error creating project or service account: ${err}`);
  }
}

// Create multiple projects with random IDs and names, and a service account in each project
for (let i = 1; i <= numProjects; i++) {
  const projectId = `${projectIdPrefix}${getRandomHex()}`;
  const projectName = `${projectNamePrefix}${getRandomHex()}`;
  createProjectWithServiceAccount(projectId, projectName);
}
