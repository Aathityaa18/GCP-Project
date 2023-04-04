const {google} = require('googleapis');

function addMemberToProject(projectId, memberEmail, role) {
  // Create an instance of the IAM API client
  const iam = google.iam('v1');

  // Get the current policy for the project
  const policy = iam.projects.getIamPolicy({
    resource: `projects/${projectId}`
  });

  // Add the new binding to the policy
  policy.data.bindings.push({
    role: `roles/${role}`,
    members: [`user:${memberEmail}`]
  });

  // Update the IAM policy for the project
  iam.projects.setIamPolicy({
    resource: `projects/${projectId}`,
    requestBody: {
      policy: policy.data
    }
  });

  console.log(`Added ${memberEmail} to project ${projectId} with role ${role}.`);
}

addMemberToProject('sample-1-381412', 'user2@gcpexam.xyz', 'editor');