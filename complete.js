// const {google} = require('googleapis');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });

// // Replace PROJECT_NAME with the name of the project you want to create
// const project = {
//   name: 'project-1',
// };

// // Replace SERVICE_ACCOUNT_NAME with the name of the service account you want to create
// const serviceAccount = {
//   name: 'serviceaccount1',
// };

// // Replace ROLE_IDENTITY with the identity of the role you want to grant to the service account
// const role = {
//   roleId: 'roles/owner',
//   member: `serviceAccount:${project.name}@${project.name}.iam.gserviceaccount.com`
// };

// // Replace END_USER_EMAIL with the email of the end user you want to add as a project member
// const member = {
//   email: 'user1@gcpexam.xyz',
//   role: 'roles/editor'
// };

// async function main() {
//   // Create an instance of the Cloud Resource Manager API client
//   const cloudresourcemanager = google.cloudresourcemanager('v1');
  
//   // Authenticate with Google's OAuth2 client
//   const authClient = await auth.getClient();
//   google.options({auth: authClient});

//   // Call the create method to create the project
//   const createProjectResponse = await cloudresourcemanager.projects.create({
//     requestBody: project,
//   });
//   const projectId = createProjectResponse.data.projectId;
//   console.log(`Created project with ID: ${projectId}`);

//   // Call the create method to create the service account
//   const iam = google.iam('v1');
//   const createServiceAccountResponse = await iam.projects.serviceAccounts.create({
//     name: `projects/${projectId}`,
//     requestBody: serviceAccount,
//   });
//   const serviceAccountEmail = createServiceAccountResponse.data.email;
//   console.log(`Created service account with email: ${serviceAccountEmail}`);

//   // Call the create method to grant the specified role to the service account
//   const createRoleResponse = await iam.projects.serviceAccounts.roles.create({
//     name: `projects/${projectId}/serviceAccounts/${serviceAccountEmail}`,
//     requestBody: role,
//   });
//   console.log(`Granted role ${role.roleId} to service account with email: ${serviceAccountEmail}`);

//   console.log(createRoleResponse.data);

//   // Call the addMember method to add the end user as a project member
//   const addMemberResponse = await cloudresourcemanager.projects.addMember({
//     resource: `projects/${projectId}`,
//     requestBody: member,
//   });
//   console.log(`Added member ${member.email} with role ${member.role} to project ${projectId}`);

//   console.log(addMemberResponse.data);
// }

// main().catch(console.error);






// const {google} = require('googleapis');
// const uuid = require('uuid');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });

// const project = {
//   name: 'project-1',
// };

// // Generate a unique project ID
// const projectId = `my-project-${uuid.v4()}`;

// // Replace SERVICE_ACCOUNT_NAME with the name of the service account you want to create
// const serviceAccount = {
//   name: 'serviceaccount1',
// };

// // Replace ROLE_IDENTITY with the identity of the role you want to grant to the service account
// const role = {
//   roleId: 'roles/owner',
//   member: `serviceAccount:${project.name}@${projectId}.iam.gserviceaccount.com`
// };

// // Replace END_USER_EMAIL with the email of the end user you want to add as a project member
// const member = {
//   email: 'user1@gcpexam.xyz',
//   role: 'roles/editor'
// };

// async function main() {
//   // Create an instance of the Cloud Resource Manager API client
//   const cloudresourcemanager = google.cloudresourcemanager('v1');
  
//   // Authenticate with Google's OAuth2 client
//   const authClient = await auth.getClient();
//   google.options({auth: authClient});

//   // Call the create method to create the project
//   const createProjectResponse = await cloudresourcemanager.projects.create({
//     requestBody: {
//       name: projectId,
//     },
//   });
//   const projectId = createProjectResponse.data.projectId;
//   console.log(`Created project with ID: ${projectId}`);

//   // Call the create method to create the service account
//   const iam = google.iam('v1');
//   const createServiceAccountResponse = await iam.projects.serviceAccounts.create({
//     name: `projects/${projectId}`,
//     requestBody: serviceAccount,
//   });
//   const serviceAccountEmail = createServiceAccountResponse.data.email;
//   console.log(`Created service account with email: ${serviceAccountEmail}`);

//   // Call the create method to grant the specified role to the service account
//   const createRoleResponse = await iam.projects.serviceAccounts.roles.create({
//     name: `projects/${projectId}/serviceAccounts/${serviceAccountEmail}`,
//     requestBody: role,
//   });
//   console.log(`Granted role ${role.roleId} to service account with email: ${serviceAccountEmail}`);

//   console.log(createRoleResponse.data);

//   // Call the addMember method to add the end user as a project member
//   const addMemberResponse = await cloudresourcemanager.projects.addMember({
//     resource: `projects/${projectId}`,
//     requestBody: member,
//   });
//   console.log(`Added member ${member.email} with role ${member.role} to project ${projectId}`);

//   console.log(addMemberResponse.data);
// }

// main().catch(console.error);

// const {google} = require('googleapis');
// const uuid = require('uuid');
// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform']
// });

// const project = {
//   name: 'project-1',
// };

// // Generate a unique project ID
// const projectId = `my-project-${uuid.v4()}`;

// // Replace SERVICE_ACCOUNT_NAME with the name of the service account you want to create
// const serviceAccount = {
//   name: 'serviceaccount1',
// };

// // Replace ROLE_IDENTITY with the identity of the role you want to grant to the service account
// const role = {
//   roleId: 'roles/owner',
//   member: `serviceAccount:${project.name}@${projectId}.iam.gserviceaccount.com`
// };

// // Replace END_USER_EMAIL with the email of the end user you want to add as a project member
// const member = {
//   email: 'user1@gcpexam.xyz',
//   role: 'roles/editor'
// };

// async function main() {
//   // Create an instance of the Cloud Resource Manager API client
//   const cloudresourcemanager = google.cloudresourcemanager('v1');
  
//   // Authenticate with Google's OAuth2 client
//   const authClient = await auth.getClient();
//   google.options({auth: authClient});

//   // Call the create method to create the project
//   const createProjectResponse = await cloudresourcemanager.projects.create({
//     requestBody: {
//       name: projectId,
//     },
//   });
//   const createdProjectId = createProjectResponse.data.projectId;
//   console.log(`Created project with ID: ${createdProjectId}`);

//   // Call the create method to create the service account
//   const iam = google.iam('v1');
//   const createServiceAccountResponse = await iam.projects.serviceAccounts.create({
//     name: `projects/${createdProjectId}`,
//     requestBody: serviceAccount,
//   });
//   const serviceAccountEmail = createServiceAccountResponse.data.email;
//   console.log(`Created service account with email: ${serviceAccountEmail}`);

//   // Call the create method to grant the specified role to the service account
//   const createRoleResponse = await iam.projects.serviceAccounts.roles.create({
//     name: `projects/${createdProjectId}/serviceAccounts/${serviceAccountEmail}`,
//     requestBody: role,
//   });
//   console.log(`Granted role ${role.roleId} to service account with email: ${serviceAccountEmail}`);

//   console.log(createRoleResponse.data);

//   // Call the addMember method to add the end user as a project member
//   const addMemberResponse = await cloudresourcemanager.projects.addMember({
//     resource: `projects/${createdProjectId}`,
//     requestBody: member,
//   });
//   console.log(`Added member ${member.email} with role ${member.role} to project ${createdProjectId}`);

//   console.log(addMemberResponse.data);
// }

// main().catch(console.error);





const {google} = require('googleapis');
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
});

// Replace PROJECT_NAME with the name of the project you want to create
const project = {
  name: 'project1',
};

const projectId = 'nth-celerity-378715';

// Replace SERVICE_ACCOUNT_NAME with the name of the service account you want to create
const serviceAccount = {
  name: 'serviceaccount1',
};

// Replace ROLE_IDENTITY with the identity of the role you want to grant to the service account
const role = {
  roleId: 'roles/owner',
  member: `serviceAccount:${project.name}@${projectId}.iam.gserviceaccount.com`
};

// Replace END_USER_EMAIL with the email of the end user you want to add as a project member
const member = {
  email: 'user1@gcpexam.xyz',
  role: 'roles/editor'
};

async function main() {
  // Create an instance of the Cloud Resource Manager API client
  const cloudresourcemanager = google.cloudresourcemanager('v1');
  
  // Authenticate with Google's OAuth2 client
  const authClient = await auth.getClient();
  google.options({auth: authClient});

  // Call the create method to create the project
  const createProjectResponse = await cloudresourcemanager.projects.create({
    requestBody: project,
  });
  const projectId = createProjectResponse.data.projectId;
  console.log(`Created project with ID: ${projectId}`);

  // Call the create method to create the service account
  const iam = google.iam('v1');
  const createServiceAccountResponse = await iam.projects.serviceAccounts.create({
    name: `projects/${projectId}`,
    requestBody: serviceAccount,
  });
  const serviceAccountEmail = createServiceAccountResponse.data.email;
  console.log(`Created service account with email: ${serviceAccountEmail}`);

  // Call the create method to grant the specified role to the service account
  const createRoleResponse = await iam.projects.serviceAccounts.roles.create({
    name: `projects/${projectId}/serviceAccounts/${serviceAccountEmail}`,
    requestBody: role,
  });
  console.log(createRoleResponse.data);

  console.log(`Granted role ${role.roleId} to service account with email: ${serviceAccountEmail}`);

  // Call the addMember method to add the end user as a project member
  const addMemberResponse = await cloudresourcemanager.projects.addMember({
    resource: `projects/${projectId}`,
    requestBody: member,
  });
  console.log(addMemberResponse.data);

  console.log(`Added member ${member.email} with role ${member.role} to project ${projectId}`);
}

main().catch(console.error);





