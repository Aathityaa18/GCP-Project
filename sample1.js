// const {IAM} = require('@google-cloud/iam/build/src');
// const {GoogleAuth} = require('google-auth-library');
// const fs = require('fs');

// const PROJECT_ID = 'your-project-id';
// const SERVICE_ACCOUNT_NAME = 'your-service-account-name';
// const ROLE = 'roles/owner';
// const KEY_FILE_NAME = 'your-key-file.json';


// async function main() {
//   // Use GoogleAuth library to obtain credentials
//   const auth = new GoogleAuth({
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//   });
//   const authClient = await auth.getClient();
//   const iamClient = new IAM({auth: authClient});

//   // Create a service account
//   const [serviceAccount] = await iamClient.createServiceAccount({
//     name: `projects/${PROJECT_ID}`,
//     requestBody: {
//       accountId: SERVICE_ACCOUNT_NAME,
//       serviceAccount: {
//         displayName: SERVICE_ACCOUNT_NAME,
//       },
//     },
//   });

//   console.log(`Service account created: ${serviceAccount.name}`);

//   // Grant the service account the desired role
//   const [policy] = await iamClient.getIamPolicy({
//     resource: `projects/${PROJECT_ID}`,
//   });

//   policy.bindings.push({
//     role: ROLE,
//     members: [`serviceAccount:${serviceAccount.email}`],
//   });

//   const [updatedPolicy] = await iamClient.setIamPolicy({
//     resource: `projects/${PROJECT_ID}`,
//     requestBody: {
//       policy: policy,
//     },
//   });

//   console.log(`Role ${ROLE} granted to ${serviceAccount.email}`);

//   // Create a key file for the service account
//   const [key] = await iamClient.getServiceAccountKey({
//     name: serviceAccount.name,
//   });

//   console.log(`Key file created: ${key.name}`);

//   fs.writeFileSync(KEY_FILE_NAME, key.privateKeyData);
// }

// main();

const axios = require('axios');

const createUser = async (email, password) => {
  const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=YOUR_API_KEY';

  const data = {
    email: email,
    password: password,
    returnSecureToken: true
  };

  const response = await axios.post(url, data);
  
  return response.data;
};

// Example usage:
createUser('example@email.com', 'password123')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
