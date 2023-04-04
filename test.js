const {google} = require('googleapis');
const crypto = require('crypto');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const resource = google.cloudresourcemanager('v1');
const iam = google.iam('v1');
const member = 'user1@gcpexam.xyz'; // replace with your email address
const role = 'roles/owner'; // replace with the desired role

const folderId = '555495213046'; // replace with your folder ID

const projectIdPrefix = 'hello-';
const projectNamePrefix = 'hello-';
const numProjects = 1;

// Function to generate a random 6-character hex string
function getRandomHex() {
  return crypto.randomBytes(3).toString('hex');
}

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

// Function to create a project and then create a service account in it
async function createProjectAndServiceAccount(projectId, projectName, parent) {
  try {
    const request = {
      auth: auth,
      requestBody: {
        projectId: projectId,
        name: projectName,
        parent: {
          type: 'folder',
          id: parent,
        },
      },
    };

    const res = await resource.projects.create(request);
    console.log(`Project ${projectId} created.`);
    console.log(res.data);

    // Create a service account in the newly created project
    await createServiceAccount(projectId);

    // Add the specified member to the project with the specified role
    await addMemberToProject(projectId, member, role);

  } catch (err) {
    console.error(`Error creating project: ${err}`);
  }
}

// Function to add a member to a project with the specified role
async function addMemberToProject(projectId, member, role) {
  try {
    const policy = await resource.projects.getIamPolicy({
      auth: auth,
      resource: projectId,
    });

    const binding = policy.data.bindings.find(b => b.role === role);
    if (!binding) {
      console.error(`Role ${role} not found.`);
      return;
    }

    if (!binding.members.includes(`user:${member}`)) {
      binding.members.push(`user:${member}`);
      await resource.projects.setIamPolicy({
        auth: auth,
        resource: projectId,
        requestBody: {
          policy: policy.data,
        },
      });

      console.log(`Added member ${member} with role ${role} to project ${projectId}.`);
    } else {
      console.log(`Member ${member} already has role ${role} in project ${projectId}.`);
    }

  } catch (err) {
    console.error(`Error adding member to project: ${err}`);
  }
}

// Create multiple projects

for (let i = 1; i <= numProjects; i++) {
  const projectId = `${projectIdPrefix}${getRandomHex()}`;
  const projectName = `${projectNamePrefix}${getRandomHex()}`;
  createProjectAndServiceAccount(projectId, projectName, folderId);
}