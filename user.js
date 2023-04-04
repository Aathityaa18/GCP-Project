// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const projectId = 'sample-1-381412';
// const userEmail = 'aathityaaravichandran@gmail.com';

// const resource = google.cloudresourcemanager('v1');

// async function addUserToProject() {
//   try {
//     const policy = await resource.projects.getIamPolicy({
//       resource: `projects/${projectId}`,
//       auth: auth,
//     });
    
    

//     policy.data.bindings.push({
//       role: 'roles/editor',
//       members: [`user:${userEmail}`],
//     });
    

//     const request = {
//       resource: `projects/${projectId}`,
//       auth: auth,
//       requestBody: {
//         policy: policy.data,
//       },
//     };

//     console.log(policy); 
//     console.log(request.resource); 

//     const res = await resource.projects.setIamPolicy(request);
//     console.log(`User ${userEmail} added as a viewer to the project.`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error adding user as a viewer: ${err}`);
//   }
// }

// addUserToProject();






// const {google} = require('googleapis');

// const autho = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const projectId = 'sample-1-381412';
// const userEmail = 'aathityaaravichandran@gmail.com';

// //const resource = google.cloudresourcemanager('v1');

// const resource = google.cloudresourcemanager({
//   version: 'v1',
//   auth: autho,
// });


// async function addUserToProject() {
//   try {
//     const policy = {
//       "bindings": [
//         {
//           "role": "roles/editor",
//           "members": [
//             `user:aathityaaravichandran@gmail.com`
//           ]
//         }
//       ]
//     };

//     const request = {
//       resource: `projects/${projectId}`,
//       auth: autho,
//       requestBody: {
//         policy: policy,
//       },
//     };

//     console.log(policy); 
//     console.log(request.resource); 

//     const res = resource.projects.setIamPolicy(request);
//     console.log(`User ${userEmail} added as a editor to the project.`);
//     console.log(res.data);
//   } catch (err) {
//     console.error(`Error adding user as a editor: ${err}`);
//   }
// }

// addUserToProject();





// const {google} = require('googleapis');

// const auth = new google.auth.GoogleAuth({
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const projectId = 'sample-1-381412';
// const userEmail = 'ece222004@saranathan.ac.in';

// const resource = google.cloudresourcemanager('v1');

// async function addUserToProject() {
//   try {
//     const policyRequest = {
//       resource: `projects/${projectId}`,
//       auth: auth,
//     };
//     const policyResponse = await resource.projects.getIamPolicy(policyRequest);
//     const policy = policyResponse.data;

//     const newBinding = {
//       "role": "roles/editor",
//       "members": [
//         `user:${userEmail}`
//       ]
//     };

//     if (!policy.bindings) {
//       policy.bindings = [];
//     }
//     policy.bindings.push(newBinding);

//     const request = {
//       resource: `projects/${projectId}`,
//       auth: auth,
//       requestBody: {
//         policy: policy,
//         updateMask: 'bindings'
//       },
//     };

//     const res = await resource.projects.setIamPolicy(request);
//     console.log(`User ${userEmail} added as an editor to the project.`);
//     console.log(res.data.bindings);
//   } catch (err) {
//     console.error(`Error adding user as an editor: ${err}`);
//   }
// }

// addUserToProject();




