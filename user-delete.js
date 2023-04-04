const {google} = require('googleapis');
const cloudresourcemanager = google.cloudresourcemanager('v1');

async function removeMemberFromProject(projectId, member) {
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

    // Iterate over the bindings to find the role that contains the member to remove
    policy.data.bindings.forEach(binding => {
      if (binding.members.includes(`user:${member}`)) {
        // Remove the member from the role's members list
        binding.members = binding.members.filter(m => m !== `user:${member}`);
        console.log(`Removed member ${member} from role ${binding.role} in project ${projectId}.`);
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

removeMemberFromProject('hello-94f025', 'smartfashionibm@gmail.com');




//----------------------------------------------------------------------------------------




// const {google} = require('googleapis');
// const cloudresourcemanager = google.cloudresourcemanager('v1');

// async function removeMemberFromProject(projectId, member, delay) {
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

//     // Iterate over the bindings to find the role that contains the member to remove
//     policy.data.bindings.forEach(binding => {
//       if (binding.members.includes(`user:${member}`)) {
//         // Remove the member from the role's members list after delay
//         setTimeout(() => {
//           binding.members = binding.members.filter(m => m !== `user:${member}`);
//           console.log(`Removed member ${member} from role ${binding.role} in project ${projectId}.`);
          
//           // Update the IAM policy for the project
//           cloudresourcemanager.projects.setIamPolicy({
//             resource: projectId,
//             requestBody: {
//               policy: policy.data,
//             },
//           });
          
//           console.log(`IAM policy updated for project ${projectId}.`);
//         }, delay);
//       }
//     });

//   } catch (err) {
//     console.error(`Error updating IAM policy for project: ${err}`);
//   }
// }

// removeMemberFromProject('hello-94f025', 'smartfashionibm@gmail.com', 60000); // Remove member after 60 seconds (1 minute)
