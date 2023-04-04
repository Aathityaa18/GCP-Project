// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const projectIdPrefix = 'd-';
// const projectNamePrefix = 'd-';
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

//     // Add a project member
//     const policyRequest = {
//       auth: auth,
//       resource: {
//         policy: {
//           bindings: [
//             {
//               role: 'roles/owner',
//               members: [
//                 'user:aathityaaravichandran@gmail.com'
//               ],
//             },
//           ],
//         },
//       },
//       // The project ID must be in the format "projects/project-id"
//       resourceName: `projects/${projectId}`,
//     };

//     const policyResponse = resource.projects.setIamPolicy(policyRequest);
//     console.log(`Added project member to ${projectId}.`);
//     console.log(policyResponse.data);

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





// const {google} = require('googleapis');
// const crypto = require('crypto');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const resource = google.cloudresourcemanager('v1');
// const iam = google.iam('v1');
// const member = 'user7@gcpexam.xyz'; // replace with the email address of the user to add
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

//     // Add the specified member to the project with the specified roles
//     const roles = ['roles/owner']; // replace with the desired roles
//     await addMemberToProject(projectId, member, roles);

//   } catch (err) {
//     console.error(`Error creating project: ${err}`);
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

// // Main function to create multiple projects with service accounts and add a user to them
// async function createProjects() {
//   try {
//     // Loop through the number of projects to create
//     for (let i = 1; i <= numProjects; i++) {
//       const projectId = `lab-user-${getRandomHex()}`;
//       const projectName = `cloud-${getRandomHex()}`;

//       // Create a project and a service account in it
//       await createProjectAndServiceAccount(projectId, projectName);
//     }

//     console.log(`All projects created successfully.`);

//   } catch (err) {
//     console.error(`Error creating projects: ${err}`);
//   }
// }

// // Call the main function to create the projects
// createProjects();




//----------------------------------------------------------------------------------------





const {google} = require('googleapis');
const crypto = require('crypto');

const auth = new google.auth.GoogleAuth({
  scopes: [
    'https://www.googleapis.com/auth/cloud-platform',
    'https://www.googleapis.com/auth/cloud-platform.projects',
    'https://www.googleapis.com/auth/cloud-platform.servicecontrol',
    'https://www.googleapis.com/auth/iam',
    'https://www.googleapis.com/auth/iam.serviceAccounts',
  ],
});

const resource = google.cloudresourcemanager('v1');
const iam = google.iam('v1');
const member = 'user7@gcpexam.xyz'; // replace with the email address of the user to add
const numProjects = 1;

// Function to generate a random 6-character hex string
function getRandomHex() {
  return crypto.randomBytes(3).toString('hex');
}

// Function to create a project and then create a service account in it
async function createProject(projectId, projectName) {
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

    // Create a service account in the newly created project
    await createServiceAccount(projectId);

    // Add the specified member to the project with the specified roles
    const roles = ['roles/owner']; // replace with the desired roles
    await addMemberToProject(projectId, member, roles);

  } catch (err) {
    console.error(`Error creating project: ${err}`);
  }
}

// Function to create a service account in a project
async function createServiceAccount(projectId) {
  try {
    const request = {
      auth: auth,
      name: `projects/${projectId}`,
      requestBody: {
        accountId: `sa-${getRandomHex()}`,
        serviceAccount: {
          displayName: `Service Account ${getRandomHex()}`,
        },
      },
    };

    const res = await iam.projects.serviceAccounts.create(request);
    console.log(`Service account created with email: ${res.data.email}`);

  } catch (err) {
    console.error(`Error creating service account: ${err}`);
  }
}

// Function to add a member to a project with the specified roles
async function addMemberToProject(projectId, member, roles) {
  try {
    const policy = await resource.projects.getIamPolicy({
      auth: auth,
      resource: projectId,
    });

    roles.forEach(role => {
      const binding = policy.data.bindings.find(b => b.role === role);
      if (!binding) {
        console.error(`Role ${role} not found.`);
        return;
      }

      if (!binding.members.includes(`user:${member}`)) {
        binding.members.push(`user:${member}`);
      } else {
        console.log(`Member ${member} already has role ${role} in project ${projectId}.`);
      }
    });

    await resource.projects.setIamPolicy({
      auth: auth,
      resource: projectId,
      requestBody: {
        policy: policy.data,
      },
    });

    console.log(`Added member ${member} with roles ${roles} to project ${projectId}.`);

  } catch (err) {
    console.error(`Error adding member to project: ${err}`);
  }
}

// Main function to create multiple projects with service accounts and add a user to them
async function createProjects() {
  try {
    // Loop through the number of projects to create
    for (let i = 1; i <= numProjects; i++) {
      const projectId = `welcome-${getRandomHex()}`;
      const projectName = `welcome-${getRandomHex()}`;

      // Create a project and a service account in it
      await createProject(projectId, projectName);
    }

    console.log(`All projects and service accounts created successfully!`);
} catch (err) {
      console.error(`Error creating projects and service accounts`);
  }
}

createProjects();





//=======================================================================================





// const { google } = require('googleapis');
// const crypto = require('crypto');

// // Generate random IDs for the project and service account
// const projectId = `my-project-${getRandomHex()}`;
// const accountId = `my-service-account-${getRandomHex()}`;

// // Generate a random name for the project
// const projectDisplayName = `My Project ${getRandomHex()}`;
// const serviceAccountDisplayName = 'My Service Account';

// function getRandomHex() {
//     return crypto.randomBytes(3).toString('hex');
// }

// // Set up the Google Cloud SDK credentials
// const { credential } = google.auth.getApplicationDefault();
// const auth = new google.auth.GoogleAuth({
//   credentials: credential,
//   scopes: [
//          'https://www.googleapis.com/auth/cloud-platform',
//          'https://www.googleapis.com/auth/cloud-platform.projects',
//          'https://www.googleapis.com/auth/cloud-platform.servicecontrol',
//          'https://www.googleapis.com/auth/iam',
//          'https://www.googleapis.com/auth/iam.serviceAccounts',
//         ],
// });

// // Create a new project
// const cloudresourcemanager = google.cloudresourcemanager('v1');
// const project = cloudresourcemanager.projects.create({
//   requestBody: {
//     projectId,
//     name: projectDisplayName,
//   },
//   auth,
// });

// // Create a new service account
// const iam = google.iam('v1');
// const [serviceAccount] = await iam.projects.serviceAccounts.create({
//   name: `projects/${projectId}`,
//   requestBody: {
//     accountId,
//     serviceAccount: {
//       displayName: serviceAccountDisplayName,
//     },
//   },
//   auth,
// });

// // Grant the service account permissions
// const [policy] = await iam.projects.serviceAccounts.getIamPolicy({
//   resource: serviceAccount.name,
//   auth,
// });

// policy.bindings.push({
//   role: 'roles/owner',
//   members: [`serviceAccount:${serviceAccount.email}`],
// });

// await iam.projects.serviceAccounts.setIamPolicy({
//   resource: serviceAccount.name,
//   requestBody: {
//     policy,
//   },
//   auth,
// });

// console.log(`Project created: ${project.data.name}`);
// console.log(`Service account created: ${serviceAccount.name}`);

