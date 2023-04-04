// const {google} = require('googleapis');
// const cloudresourcemanager = google.cloudresourcemanager('v1');

// async function addEditorRole(projectId, member) {
//   const auth = new google.auth.GoogleAuth({
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//   });

//   const authClient = await auth.getClient();
//   google.options({auth: authClient});

//   try {
//     // Get the current IAM policy for the project
//     const policy = await cloudresourcemanager.projects.getIamPolicy({
//       resource: projectId,
//     });

//     // Check if the editor role is already assigned to the member
//     const binding = policy.data.bindings.find(b => b.role === 'roles/editor');
//     if (binding && binding.members.includes(`user:${member}`)) {
//       console.log(`Member ${member} already has the editor role in project ${projectId}.`);
//       return;
//     }

//     // Add the member to the editor role
//     if (!binding) {
//       // The editor role isn't defined in the policy, so add it
//       policy.data.bindings.push({
//         role: 'roles/serviceAccountUser',
//         members: [`user:${member}`],
//       });
//     } else {
//       // The editor role is defined in the policy, so add the member to its members list
//       binding.members.push(`user:${member}`);
//     }
    

//     // Update the IAM policy for the project
//     await cloudresourcemanager.projects.setIamPolicy({
//       resource: projectId,
//       requestBody: {
//         policy: policy.data,
//       },
//     });

//     console.log(`Added member ${member} with the editor role to project ${projectId}.`);
//   } catch (err) {
//     console.error(`Error adding member to project: ${err}`);
//   }
// }

// addEditorRole('cloud-2927f7', 'user1@gcpexam.xyz');


//----------------------------------------------------------------------------------------


const {google} = require('googleapis');
const cloudresourcemanager = google.cloudresourcemanager('v1');

async function addRolesToProject(projectId, member, roles) {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const authClient = await auth.getClient();
  google.options({auth: authClient});

  try {
    // Get the current IAM policy for the project
    const policy = await cloudresourcemanager.projects.getIamPolicy({
      resource: projectId,
    });

    // Add the member to the specified roles
    roles.forEach(role => {
      const binding = policy.data.bindings.find(b => b.role === role);
      if (binding && binding.members.includes(`user:${member}`)) {
        console.log(`Member ${member} already has the ${role} role in project ${projectId}.`);
      } else {
        if (!binding) {
          // The role isn't defined in the policy, so add it
          policy.data.bindings.push({
            role: role,
            members: [`user:${member}`],
          });
        } else {
          // The role is defined in the policy, so add the member to its members list
          binding.members.push(`user:${member}`);
        }
        console.log(`Added member ${member} with the ${role} role to project ${projectId}.`);
      }
    });

    // Update the IAM policy for the project
    await cloudresourcemanager.projects.setIamPolicy({
      resource: projectId,
      requestBody: {
        policy: policy.data,
      },
    });

    console.log(`IAM policy updated for project ${projectId}.`);
  } catch (err) {
    console.error(`Error updating IAM policy for project: ${err}`);
  }
}

addRolesToProject('hello-94f025', 'hello@gcpexam.xyz', ['roles/editor']);
