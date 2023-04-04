const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
});

async function grantIAMRole(serviceAccountEmail, projectId, role) {
  try {
    const iam = google.iam('v1');
    const request = {
      auth: auth,
      resource: projectId,
      requestBody: {
        policy: {
            bindings: [
            {
              role: role,
              members: [
                `serviceAccount:${serviceAccountEmail}`
              ]
            }
          ]
        }
      }
    };
    const response = await iam.projects.setIamPolicy(request);
    console.log(`Granted ${role} IAM role to ${serviceAccountEmail}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error granting IAM role: ${error}`);
    if (error.response) {
      console.error(`API response status code: ${error.response.status}`);
      console.error(`API response body: ${error.response.data}`);
    }
  }
}

// Replace with your project ID, service account email, and IAM role to grant
const projectId = 'aa-477e6c';
const serviceAccountEmail = 'sa-710b09@aa-477e6c.iam.gserviceaccount.com';
const role = 'roles/iam.serviceAccountUser';

// Call the function to grant the IAM role
grantIAMRole(serviceAccountEmail, projectId, role);
