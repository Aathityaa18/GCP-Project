// // const { google } = require('googleapis');

// // // Set the name of the service account and the desired IAM policy
// // const serviceAccountName = 'organizations/1052443526546/serviceAccounts/service2@sample-1-381412.iam.gserviceaccount.com';
// // const policy = {
// //   bindings: [
// //     {
// //       role: 'roles/owner',
// //       members: [
// //         'user:admin@gcpexam.xyz'
// //       ]
// //     }
// //   ]
// // };

// // // Authenticate with Google Cloud Platform using default credentials
// // google.auth.getApplicationDefault(async (err, authClient) => {
// //   if (err) {
// //     console.error('Failed to authenticate:', err);
// //     return;
// //   }

// //   // Create a new IAM client using the authenticated credentials
// //   const iam = google.iam({
// //     version: 'v1',
// //     auth: authClient
// //   });

// //   try {
// //     // Set the IAM policy for the specified service account
// //     const response = await iam.serviceAccounts.setIamPolicy({
// //       resource: serviceAccountName,
// //       requestBody: {
// //         policy: policy
// //       }
// //     });

// //     console.log(`IAM policy set for ${serviceAccountName}.`);
// //     console.log('Policy:', response.data);
// //   } catch (error) {
// //     console.error('Failed to set IAM policy:', error);
// //   }
// // });




//-------------------------------------------------------------------------------------------




// WORKS GOOD 👍

// const { google } = require('googleapis');

// // Set the project ID and the desired service account name
// const projectId = 'sample-1-381420';
// const max = 300;
// const Random = function getRandom(max) {
//   return Math.floor(Math.random() * max);
// };

// const serviceAccountName = `'account'+${Random(max)}`;

// // Authenticate with Google Cloud Platform using default credentials
// google.auth.getApplicationDefault(async (err, authClient) => {
//   if (err) {
//     console.error('Failed to authenticate:', err);
//     return;
//   }

//   // Create a new IAM client using the authenticated credentials
//   const iam = google.iam({
//     version: 'v1',
//     auth: authClient
//   });

//   try {
//     // Create a new service account in the specified project
//     const response = await iam.projects.serviceAccounts.create({
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: serviceAccountName,
//         serviceAccount: {
//           displayName: `${serviceAccountName} display name`
//         }
//       }
//     });

//     console.log(`Service account created: ${response.data.name}`);
//   } catch (error) {
//     console.error('Failed to create service account:', error);
//   }
// });




//--------------------------------------------------------------------------------------------




// MULTIPLE SERVICE ACCOUNTS

// const { google } = require('googleapis');

// const projectId = 'sample-1-381412';
// const max = 300;

// // Function to generate a random integer between 0 and max
// const getRandom = (max) => {
//   return Math.floor(Math.random() * max);
// };

// // Function to create a new service account with the given name
// const createServiceAccount = async (name) => {
//   const authClient = await google.auth.getClient({
//     scopes: ['https://www.googleapis.com/auth/cloud-platform']
//   });

//   const iam = google.iam({
//     version: 'v1',
//     auth: authClient
//   });

//   try {
//     const response = await iam.projects.serviceAccounts.create({
//       name: `projects/${projectId}`,
//       requestBody: {
//         accountId: name,
//         serviceAccount: {
//           displayName: `${name} display name`
//         }
//       }
//     });

//     console.log(`Service account created: ${response.data.name}`);
//   } catch (error) {
//     console.error('Failed to create service account:', error);
//   }
// };

// // Create 10 service accounts with random names
// for (let i = 1; i <= 9; i++) {
//   const name = `account${getRandom(max)}-${i}`;
//   createServiceAccount(name);
// }



//--------------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const credentials = require('./application_default_credentials.json');

// // const projectId = 'sample-1-381412';
// const projectId = `organizations/sample-1-381412`
// const auth = new google.auth.GoogleAuth({
//   credentials: credentials,
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });

// const iam = google.iam({
//   version: 'v1',
//   auth: auth,
// });

// // const parent = `organizations/${projectId}`

// async function createServiceAccount() {
//   const [serviceAccount] = await iam.projects.serviceAccounts.create({
//     name: `projects/${projectId}`,
//     accountId: 'my-service-account',
//     serviceAccount: {
//       displayName: 'Test'
//     },
//     // Parent is set to the organization id
//     // You can also use 'projects/PROJECT_ID' as parent to create the service account under a project.
//     // See https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects for more information.
//     projectId: projectId,
//     requestBody: {
//       accountId: 'my-service-account',
//       serviceAccount: {
//         displayName: 'Test'
//       }
//     }
//   });
//   console.log(`Created service account ${serviceAccount.email}`);
// }

// createServiceAccount();



//----------------------------------------------------------------------------------------



//ADD SERVICE ACCOUNTS FOR SPECIFIC PROJECTS

const {google} = require('googleapis');
const crypto = require('crypto');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const iam = google.iam('v1');

// const folderId = '555495213046'; // replace with your folder ID
const projectIds = ['asd-d5cccf'];

// Function to generate a random string
function getRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to create a service account in a project
async function createServiceAccount(projectId) {
  try {
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
    console.error(`Error creating service account: ${err}`);
  }
}

// Loop through the project IDs and create a service account in each project
for (const projectId of projectIds) {
  createServiceAccount(projectId);
}
