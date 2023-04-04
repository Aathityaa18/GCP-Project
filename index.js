// const { google } = require('googleapis');
// const { auth } = require('google-auth-library');
// const generatePassword = require('generate-password');

// async function createGcpUser() {
//   const client = await auth.getClient({
//     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
//   });

//   const directory = google.admin({ version: 'directory_v1', auth: client });

//   const user = {
//     primaryEmail: `user${Math.floor(Math.random() * 100000)}@gcpexam.xyz`,
//     password: generatePassword.generate({
//       length: 10,
//       numbers: true,
//       symbols: true,
//       uppercase: true,
//       excludeSimilarCharacters: true,
//     }),
//   };

//   try {
//     const res = directory.users.insert({
//       auth: client,
//       requestBody: user,
//     });

//     console.log(res.data);
    
//     console.log(`User ${user.primaryEmail} created successfully. Password: ${user.password}`);
//   } catch (err) {
//     console.error(`Error creating user: ${err}`);
//   }
// }

// createGcpUser();


const {google} = require('googleapis');
const generatePassword = require('generate-password');


const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/admin.directory.user']
});

const admin = google.admin({version: 'directory_v1'});

async function createUser( firstName, lastName ) {
    const user = {
      primaryEmail: `user${Math.floor(Math.random() * 100000)}@gcpexam.xyz`,
      password: generatePassword.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
      }),
        name: {
            givenName: firstName,
            familyName: lastName
        },
        changePasswordAtNextLogin: true
    };

    try {
        const res = await admin.users.insert({
            auth: await auth.getClient(),
            requestBody: user,
            fields: 'id'
        });

        console.log(`User created with ID: ${res.data.id}`);
    } catch (err) {
        console.error(`Failed to create user: ${err}`);
    }
}

// Example usage:
createUser('John', 'Doe');



// const { google } = require('googleapis');
// const { auth } = require('google-auth-library');
// const generatePassword = require('generate-password');

// async function createGcpUser() {
//   const customerID = 'C01dgwlnv'; // replace with the customer ID of your parent account

//   const client = await auth.getClient({
//     scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
//   });

//   const directory = google.admin({ version: 'directory_v1', auth: client });

//   const user = {
//     primaryEmail: `user${Math.floor(Math.random() * 100000)}@gcpexam.xyz`,
//     //primaryEmail: `aathityaaravichandran@gmail.com`,
//     password: generatePassword.generate({
//       length: 10,
//       numbers: true,
//       symbols: true,
//       uppercase: true,
//       excludeSimilarCharacters: true,
//     }),
//     customerId: customerID,
//   };

//   try {
//     const res = directory.users.insert({
//       auth: client,
//       resource: user,
//     });

//     console.log(res.data);
    
//     console.log(`User ${user.primaryEmail} created successfully. Password: ${user.password}`);
//   } catch (err) {
//     console.error(`Error creating user: ${err}`);
//   }
// }

// createGcpUser();




// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
// });

// const directory = google.admin({version: 'directory_v1'});

// async function getUsers() {
//   const authClient = await auth.getClient();
//   google.options({auth: authClient});

//   const res = await directory.users.list({
//     customer: 'C01dgwlnv',
//     maxResults: 10,
//     orderBy: 'email',
//     viewType: 'domain_public',
//   });
  
//   const users = res.data.users;
//   console.log(users);
// }

// getUsers();



// // Load the necessary libraries
// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//     scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });
// const iam = google.iam({
//   version: 'v1',
//   // auth: authClient
// });


// // Set the project ID and the email addresses of the users you want to grant access to
// const projectId = 'sample-1-381412';
// const userEmails = ['aathityaaravichandran@gmail.com', 'smartfashionibm@gmail.com'];

// // Define the IAM policy object
// const policy = {
//     bindings: [{
//         role: 'roles/editor',  // Specify the IAM role to grant
//         members: userEmails.map(email => `user:${email}`)  // Map the email addresses to IAM members
//     }]
// };

// // Create a new IAM policy for the project
// async function createPolicy() {
//     const authClient = await auth.getClient();
//     const request = {
//         auth: authClient,
//         resource: {policy},
//         name: `projects/${projectId}`
//     };
//     const response = await iam.projects.setIamPolicy(request);
//     console.log('New policy:', response.data);
// }

// // Call the createPolicy function to grant access to the project
// createPolicy().catch(console.error);





// const { google } = require('googleapis');
// const { OAuth2Client } = require('google-auth-library');

// // Create an OAuth 2.0 client instance from the client secret JSON file
// const client = new OAuth2Client({
//   clientId: '970841819964-3m8ubcsk3nhauiihiltr9duu6hkjisej.apps.googleusercontent.com',
//   clientSecret: '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',
//   redirectUri: 'https://oauth.pstmn.io/v1/browser-callback'
// });

// // Authorize the client with the user's access token
// const accessToken = 'ya29.a0AVvZVspLJPeTjjcXgej0-X9nrPQj0kfbg2z_Y-BrF3wOcAKixqlgCmzR0m7Fb2bAkmzxqvtOC0XP3vARkPCOH_yX1IIGQucVWYBdjwFuCLxn-2CyrLauew8XrYfYyVtiavJ8dIJMb2yiGhp_kVksZYmRbPkbPX69aCgYKAdwSAQ8SFQGbdwaIaGj7twGSez1e8_uKZ9E5sw0167';
// client.setCredentials({ access_token: accessToken });

// // Create the user object
// const user = {
//   displayName: 'Aa',
//   email: 'user10@gcpexam.xyz',
//   password: 'p@ssw0rd'
// };

// // Create the Google Cloud Identity Toolkit API client
// const identitytoolkit = google.identitytoolkit('v3');

// // Make the API request to create the user
// identitytoolkit.projects({
//   parent: 'projects/sample-1-381412',
//   requestBody: {
//     account: user
//   },
//   auth: client
// }, (err, response) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(response.data);
// });






// // const { iam_v1 } = require('googleapis');
// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });
// const iam = google.iam('v1');

// async function getIamPolicy() {
//   const projectId = 'sample-1-381420';
//   const resource = `projects/${projectId}`;

//   const [policy] = await iam.projects.getIamPolicy({resource});
//   console.log(policy);
// }

// async function addUserToIam() {
//   const projectId = 'sample-1-381420';
//   const email = 'user1@gcpexam.xyz';
//   const role = 'roles/editor';
//   const resource = `projects/${projectId}`;

//   const [policy] = await iam.projects.newBinding({resource});
//   const bindings = policy.bindings || [];
//   const newBinding = {
//     role,
//     members: [`user:${email}`]
//   };
//   bindings.push(newBinding);

//   await iam.projects.setIamPolicy({resource, requestBody: {bindings}});
// }

// getIamPolicy();
// addUserToIam();




// const { exec } = require('child_process');

// // Replace <PROJECT_ID> and <USER_EMAIL> with the appropriate values
// const projectId = 'sample-1-381420';
// const userEmail = 'user18@sample-1-381420.iam.gserviceaccount.com';

// // Builds the gcloud command to create the user account
// const command = `"C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin\\gcloud" iam service-accounts create ${userEmail} --project=${projectId}`;


// // Executes the gcloud command
// exec(command, (error, stderr) => {
//   if (error) {
//     console.error(`Error creating user account: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Error creating user account: ${stderr}`);
//     return;
//   }
//   console.log(`User account ${userEmail} created successfully.`);
// });




// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });
// const iam = google.iam('v1');

// async function addUserToProject(userEmail, projectId) {
//   const authClient = await auth.getClient();
//   const resource = {
//     'policy': {
//       'bindings': [
//         {
//           'role': 'roles/editor',
//           'members': [`user:${userEmail}`]
//         }
//       ]
//     },
//     'updateMask': 'bindings'
//   };
//   const response = await iam.roles.setIamPolicy({
//     auth: authClient,
//     resource: resource,
//     resource_: `projects/${projectId}`
//   });
//   console.log(response);

//   console.log(`User ${userEmail} added to project ${projectId}`);
// }

// // Replace <USER_EMAIL> and <PROJECT_ID> with the appropriate values
// const userEmail = 'user1@gcpexam.xyz';
// const projectId = 'sample-1-381420';

// // Call the function to add the user to the project
// addUserToProject(userEmail, projectId);


////
/////
/////


// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });
// const iam = google.iam('v1');

// async function addUserToProject(userEmail, projectId) {
//   const authClient = await auth.getClient();
//   const resource = {
//     'policy': {
//       'bindings': [
//         {
//           'role': 'roles/editor',
//           'members': [`user:${userEmail}`]
//         }
//       ]
//     },
//     'updateMask': 'bindings'
//   };
//   const response = await iam.projects.setIamPolicy({
//     auth: authClient,
//     resource: resource,
//     resource_: `projects/${projectId}`
//   });
//   console.log(response);
//   console.log(`User ${userEmail} added to project ${projectId}`);
// }

// // Replace <USER_EMAIL> and <PROJECT_ID> with the appropriate values
// const userEmail = 'user1@gcpexam.xyz';
// const projectId = 'sample-1-381420';

// // Call the function to add the user to the project
// addUserToProject(userEmail, projectId);



