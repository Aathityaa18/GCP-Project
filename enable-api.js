const {google} = require('googleapis');
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

async function enableAPIs(projectId) {
  try {
    const serviceUsage = google.serviceusage('v1');
    const storageApiName = 'storage-api.googleapis.com';
    const computeApiName = 'compute.googleapis.com';

    // Enable the Cloud Storage API
    const storageRequest = {
      auth: auth,
      parent: `projects/${projectId}`,
      requestBody: {
        serviceIds: [storageApiName],
      },
    };
    const storageRes = await serviceUsage.services.batchEnable(storageRequest);
    console.log(`Enabled ${storageApiName} API for project ${projectId}`);
    console.log(storageRes.data);

    // Enable the Compute Engine API
    const computeRequest = {
      auth: auth,
      parent: `projects/${projectId}`,
      requestBody: {
        serviceIds: [computeApiName],
      },
    };
    const computeRes = await serviceUsage.services.batchEnable(computeRequest);
    console.log(`Enabled ${computeApiName} API for project ${projectId}`);
    console.log(computeRes.data);

  } catch (err) {
    console.error(`Error enabling APIs: ${err}`);
  }
}

// Replace with your project ID
const projectId = 'aa-8e3ee9';

// Call the function to enable the APIs and create the Google APIs Service Agent
enableAPIs(projectId);
